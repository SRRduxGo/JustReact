import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "components/App";
import CommentsBox from "components/CommentsBox";
import CommentList from "components/CommentsList";

//JSDOM

describe("first of the tests", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });
  afterEach(() => {
    wrapped.unmount();
  });
  it("checks - there should be only one comment box", () => {
    expect(wrapped.find(CommentsBox).length).toEqual(1);
  });

  it("check- there is only one comment list", () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
