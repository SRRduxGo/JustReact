import commentReducer from "reducers/comments";
import * as actionCreators from "actions";
//import { SAVE_COMMENTS } from "actions/types";

it("handle actions of type save comments", () => {
  const action = actionCreators.SaveComment("new Comment");
  const newState = commentReducer([], action);
  expect(newState).toEqual(["new Comment"]);
});

it("handles action with unknown type", () => {
  const newState = commentReducer(["old comment"], {});
  expect(newState).toEqual(["old comment"]);
});
