import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

console.log("setting up tests");
Enzyme.configure({
  adapter: new Adapter()
});
