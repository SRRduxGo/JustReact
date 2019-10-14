import * as actionCreator from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("save comment - action creator", () => {
  console.log(actionCreator);
  it("Creates the action object with correct type", () => {
    const action = actionCreator.SaveComment("some comment");
    console.log("@@@@@@@@@@@@");
    console.log(action);
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = actionCreator.SaveComment("payload to check for");
    expect(action.payload).toEqual("payload to check for");
  });
});
