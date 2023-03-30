import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from "../components/Card";

describe("Card", () => {
  const robot = {
    name: "Test Robot",
    age: "10",
    arms: "2",
    picture: "",
  };

  it("renders the robot's name, age, and number of arms", () => {
    render(<Card robot={robot} />);

    const name = screen.getByText(/name:/i);
    expect(name).toHaveTextContent("Name: Test Robot");

    const age = screen.getByText(/age:/i);
    expect(age).toHaveTextContent("Age: 10");

    const arms = screen.getByText(/number of arms:/i);
    expect(arms).toHaveTextContent("Number of arms: 2");
  });

  it("renders the default image if the robot's picture is not provided", () => {
    render(<Card robot={{ ...robot, picture: "" }} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/src/assets/default-img.jpeg");
  });

  it("renders the robot's picture if provided", () => {
    render(<Card robot={{ ...robot, picture: "test-img.jpeg" }} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "test-img.jpeg");
  });
});
