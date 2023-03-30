import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import FormGroup, { Robot } from "../components/FormGroup";

describe("FormGroup", () => {
  const onSubmitHandle = vi.fn();
  const setName = vi.fn();
  const setAge = vi.fn();
  const setArms = vi.fn();
  const setPicture = vi.fn();

  const defaultProps: Robot = {
    name: "Test Robot",
    age: "5",
    arms: "2",
    picture: "",
  };

  it("renders input fields", () => {
    render(
      <FormGroup
        onSubmitHandle={onSubmitHandle}
        name={defaultProps.name!}
        age={defaultProps.age!}
        arms={defaultProps.arms!}
        picture={defaultProps.picture!}
        setName={setName}
        setAge={setAge}
        setArms={setArms}
        setPicture={setPicture}
      />
    );

    const nameInput = screen.getByPlaceholderText("Name") as HTMLInputElement;
    expect(nameInput.value).toBe(defaultProps.name);

    const ageInput = screen.getByPlaceholderText("Age") as HTMLInputElement;
    expect(ageInput.value).toBe(defaultProps.age);

    const armsInput = screen.getByPlaceholderText(
      "Number of arms"
    ) as HTMLInputElement;
    expect(armsInput.value).toBe(defaultProps.arms);

    const pictureInput = screen.getByPlaceholderText(
      "Picture"
    ) as HTMLInputElement;
    expect(pictureInput.value).toBe(defaultProps.picture);
  });

  it("calls the corresponding set functions when input values are changed", () => {
    render(
      <FormGroup
        onSubmitHandle={onSubmitHandle}
        name={defaultProps.name!}
        age={defaultProps.age!}
        arms={defaultProps.arms!}
        picture={defaultProps.picture!}
        setName={setName}
        setAge={setAge}
        setArms={setArms}
        setPicture={setPicture}
      />
    );

    const nameInput = screen.getByPlaceholderText("Name") as HTMLInputElement;
    const ageInput = screen.getByPlaceholderText("Age") as HTMLInputElement;
    const armsInput = screen.getByPlaceholderText(
      "Number of arms"
    ) as HTMLInputElement;
    const pictureInput = screen.getByPlaceholderText(
      "Picture"
    ) as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "New Robot Name" } });
    expect(setName).toHaveBeenCalledWith("New Robot Name");

    fireEvent.change(ageInput, { target: { value: "10" } });
    expect(setAge).toHaveBeenCalledWith("10");

    fireEvent.change(armsInput, { target: { value: "3" } });
    expect(setArms).toHaveBeenCalledWith("3");

    fireEvent.change(pictureInput, {
      target: { value: "https://example.com/robot.jpg" },
    });
    expect(setPicture).toHaveBeenCalledWith("https://example.com/robot.jpg");
  });
});
