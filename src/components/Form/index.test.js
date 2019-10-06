import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Form from "./";
import api from "../../services/api";

const updateInput = (wrapper, instance, newValue) => {
	const input = wrapper.find(instance);
	input.simulate("change", {
		currentTarget: { value: newValue },
	});
	return wrapper.find(instance);
};

describe("<Form />", () => {
	let wrapper;
	const mock = {
		name: "Tyler",
		email: "test@gmail.com",
		number: "8018882321",
	};
	beforeEach(() => {
		wrapper = shallow(<Form />);
	});
	it("receive promotions default is true", () => {
		const promotionInput = wrapper.find('[data-testid="checked"]');
		expect(promotionInput.props().checked).toBe(true);
	});

	it("allows user to fill out form", () => {
		const nameInput = updateInput(wrapper, '[data-testid="name"]', mock.name);
		const emailInput = updateInput(wrapper, '[data-testid="email"]', mock.email);
		const numberInput = updateInput(wrapper, '[data-testid="number"]', mock.number);
		wrapper.find('[data-testid="checked"]').simulate("click");

		expect(nameInput.props().value).toBe(mock.name);
		expect(emailInput.props().value).toBe(mock.email);
		expect(numberInput.props().value).toBe(mock.number);
		expect(wrapper.find('[data-testid="checked"]').props().checked).toBe(false);
	});

	it("submits the form", () => {
		jest.spyOn(api, "addUser").mockImplementation(() => Promise.resolve({ data: "New User Added" }));

		updateInput(wrapper, '[data-testid="name"]', mock.name);
		updateInput(wrapper, '[data-testid="email"]', mock.email);
		updateInput(wrapper, '[data-testid="number"]', mock.number);
		wrapper.find('[data-testid="addUserForm"]').simulate("submit", { preventDefault: () => {} });

		expect(api.addUser).toHaveBeenCalledWith(...Object.values(mock));
	});

	it("matches saved snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
