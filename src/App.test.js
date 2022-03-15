import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest
    .fn()
    .mockReturnValue({ environment: "dev", service: "fakeService" }),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

test("App component snapshot", () => {
  const component = renderer.create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
