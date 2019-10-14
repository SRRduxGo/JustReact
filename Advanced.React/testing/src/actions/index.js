import { SAVE_COMMENT, FETCH_COMMENT } from "actions/types";
import axios from "axios";
export function SaveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function FetchComment() {
  const Response = axios.get("https://jsonplaceholder.typicode.com/comments");
  console.log("what is the response");
  console.log(Response);
  return { type: FETCH_COMMENT, payload: Response };
}
