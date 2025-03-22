import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Component: Loading", () => {
  it("should match snapshot", () => {
    const component = render(<Loading />);
    expect(component).toMatchSnapshot();
  });
});
