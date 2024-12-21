import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CalculatorPresenter from "../app/components/CalculatorPresenter";

describe("CalculatorPresenter", () => {
  const mockProps = {
    input: "10+7",
    result: "17",
    onClickButton: jest.fn(),
    onClickEquals: jest.fn(),
    onClickClear: jest.fn(),
    onClickMR: jest.fn(),
    onClickMS: jest.fn(),
    onClickMC: jest.fn(),
  };

  it("Renders input and result correctly", () => {
    render(<CalculatorPresenter {...mockProps} />);

    expect(screen.getByText("CandyCalculator")).toBeInTheDocument();
    expect(screen.getByText("10+7")).toBeInTheDocument();
    expect(screen.getByText("17")).toBeInTheDocument();
  });

  it("Calls onClickButton when a number button is clicked", () => {
    render(<CalculatorPresenter {...mockProps} />);
    const buttonSix = screen.getByText("6");

    fireEvent.click(buttonSix);
    expect(mockProps.onClickButton).toHaveBeenCalledWith("6");
  });

  it("Calls onClickEquals when '=' is clicked", () => {
    render(<CalculatorPresenter {...mockProps} />);
    const buttonEquals = screen.getByText("=");

    fireEvent.click(buttonEquals);
    expect(mockProps.onClickEquals).toHaveBeenCalled();
  });

  it("Calls onClickClear when 'C' is clicked", () => {
    render(<CalculatorPresenter {...mockProps} />);
    const buttonClear = screen.getByText("C");

    fireEvent.click(buttonClear);
    expect(mockProps.onClickClear).toHaveBeenCalled();
  });

  it("Calls onClickMR when 'MR' is clicked", () => {
    render(<CalculatorPresenter {...mockProps} />);
    const buttonMR = screen.getByText("MR");

    fireEvent.click(buttonMR);
    expect(mockProps.onClickMR).toHaveBeenCalled();
  });
});
