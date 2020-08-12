import React from "react";

import App from "./App";
import Test from "./myTest";
import { shallow, mount } from "enzyme";

describe("myTest Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
    console.log(wrapper.debug());
  });

  test("show me the button", () => {
    const text = wrapper.find("Test div");
    expect(text.text()).toBe("Click me");
  });

  test("should show when button is clikcd", () => {
    const button = wrapper.find("#firstbtn");
    button.simulate("click");
    const text = wrapper.find("Test p");
    expect(text.text()).toContain("Show me when i was clicked");
  });

  test("should show when input value changed", () => {
    const mobinput = wrapper.find("Test");

    mobinput.find("#nin").instance().value = "hiii";
    mobinput.find("#nin").simulate("change");

    expect(mobinput.state().values).toEqual("hiii");
  });
});
