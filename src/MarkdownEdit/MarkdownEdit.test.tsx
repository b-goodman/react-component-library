import React from "react";
import { shallow } from "enzyme";

import MarkdownEdit from "./MarkdownEdit";

describe("Markdown Editor", () => {
  let props: any;

  beforeEach(() => {
    props = {};
  });

  const renderWrapper = () => shallow(<MarkdownEdit {...props} />);

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
