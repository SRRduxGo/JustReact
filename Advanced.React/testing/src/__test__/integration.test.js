import React from "react";
import App from "components/App";
import Root from "Root";
import moxios from "moxios";
import { mount } from "enzyme";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});
afterEach(() => {
  moxios.uninstall();
});

it("can display a list of comments and fetch them too", done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find("#fetchButton").simulate("click");
  //   setTimeout(function() {
  //     wrapped.update();
  //     expect(wrapped.find("li").length).toEqual(2);
  //     done();
  //     wrapped.unmount();
  //   }, 100);

  moxios.wait(function() {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
