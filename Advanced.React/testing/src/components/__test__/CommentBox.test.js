import React from "react";
import CommentsBox from "components/CommentsBox";
import { mount } from "enzyme";
import Root from "Root";

/*import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "reducers";*/

describe("tests suite - comment box", function() {
  let wrapped;
  beforeEach(() => {
    console.log("before ach fired");
    wrapped = mount(
      <Root>
        <CommentsBox />
      </Root>
    );
    /*<Provider store={createStore(reducers, {})}>
        <CommentsBox />
      </Provider>*/
  });
  afterEach(() => {
    wrapped.unmount();
  });

  it(" has a comment area and a submit button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);
  });

  describe("comment box events", function() {
    beforeEach(() => {
      console.log("seond version of before each");
      wrapped.find("textarea").simulate("change", {
        target: {
          value: "simulated changed text"
        }
      });
      wrapped.update();
    });

    it("has a textarea - where user can type", () => {
      expect(wrapped.find("textarea").prop("value")).toEqual(
        "simulated changed text"
      );
    });

    it("empties the textarea on submit", () => {
      wrapped.find("form").simulate("submit", {});
      wrapped.update();
      expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
  });
});
