import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentsList";
import Root from "Root";

describe("test-Suite Comment List", () => {
  let wrapped = null;
  beforeEach(() => {
    wrapped = mount(
      <Root initialState={{ comments: ["hellow wordl", "zombie Land"] }}>
        <CommentList />
      </Root>
    );
  });
  afterEach(() => {
    wrapped.unmount();
  });
  it("should create one LI per comment", () => {
    expect(wrapped.find("li").length).toEqual(2);
  });
  it("shows the text for each comment", () => {
    let $liList = wrapped.render();
    expect($liList.text()).toContain("hellow wordl");
    expect($liList.text()).toContain("zombie Land");
  });
});
