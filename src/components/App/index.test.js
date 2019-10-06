import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import App, { Link } from "./";

describe("<App /> shallow rendering", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("h1 contains correct text", () => {
		expect(wrapper.find("h1").text()).toBe("Welcome to React");
	});
	it("matches the snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	it("updates className with new State", () => {
		expect(wrapper.find(".blue").length).toBe(1);
		expect(wrapper.find(".red").length).toBe(0);
		wrapper.setState({ mainColor: "red" });
		expect(wrapper.find(".blue").length).toBe(0);
		expect(wrapper.find(".red").length).toBe(1);
	});
	it("on button click changes p text", () => {
		const button = wrapper.find("button");
		expect(wrapper.find(".button-state").text()).toBe("No!");
		button.simulate("click");
		expect(wrapper.find(".button-state").text()).toBe("Yes!");
	});
	it("on input change, title changes text", () => {
		const mock = {
			value: "Tyler",
		};
		const input = wrapper.find("input");
		expect(wrapper.find("h2").text()).toBe("");

		input.simulate("change", { currentTarget: { value: mock.value } });
		expect(wrapper.find("h2").text()).toBe(mock.value);
	});
	it("calls componentDidMount, updates p tag text", () => {
		jest.spyOn(App.prototype, "componentDidMount");
		const wrapper = shallow(<App />);
		expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
		expect(wrapper.find(".lifeCycle").text()).toBe("componentDidMount");
	});
	it("handleStrings function returns correctly", () => {
		const trueReturn = wrapper.instance().handleStrings("Hello World");
		const falseReturn = wrapper.instance().handleStrings("");
		expect(trueReturn).toBe(true);
		expect(falseReturn).toBe(false);
	});
});

describe("<App /> mount rendering", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<App />);
	});
	it("h1 contains correct text", () => {
		expect(wrapper.find("h1").text()).toBe("Welcome to React");
	});
	it("matches the snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	afterEach(() => {
		wrapper.unmount();
	});
});

describe("<Link />", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Link address="www.google.com" hide={false} />);
	});

	it("link component accepts address prop", () => {
		expect(wrapper.instance().props.address).toBe("www.google.com");
	});
	it("a tag node renders href correctly", () => {
		expect(wrapper.props().href).toBe("www.google.com");
	});
	it("returns null with true hide prop", () => {
		expect(wrapper.find("a").length).toBe(1);
		wrapper.setProps({ hide: true });
		expect(wrapper.get(0)).toBeNull();
	});
});
