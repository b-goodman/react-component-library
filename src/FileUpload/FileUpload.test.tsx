import React from "react";
import { shallow } from "enzyme";

import LoginForm from "./FileUpload";

describe("Login Form", () => {
  let props: any;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderWrapper = () => shallow(<LoginForm {...props} />);

  describe("Snapshots", () => {
    it("should match snapshots as primary themed", () => {
      expect(renderWrapper()).toMatchSnapshot();
    });

    it("should match snapshots as secondary themed", () => {
      props.theme = "secondary";
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
