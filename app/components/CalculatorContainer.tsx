"use client";

import React, { useState } from "react";
import { evaluate } from "mathjs";
import CalculatorPresenter from "./CalculatorPresenter";

const CalculatorContainer: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [memory, setMemory] = useState<string>("");
  const operators = ["*", "/", "+", "-", "."];

  // optional feature: limit result to 6 decimals
  const formatResult = (value: number) => {
    return parseFloat(value.toFixed(6)).toString();
  };

  const handleClickButton = (value: string) => {
    if (
      (operators.includes(value) && input === "" && value !== "-") ||
      (operators.includes(value) &&
        value !== "." &&
        operators.includes(input.slice(-1)))
    ) {
      // the clicked button is an operator, and input is empty, and
      // the clicked button is not the minus sign (negates input)
      // OR
      // the clicked button is an operator, but is not the decimal,
      // and the last character of the input is an operator
      // THEN do not proceed
      return;
    }

    if (input === "0" && !operators.includes(value)) {
      // the input is 0 and the clicked button is not an operator
      setInput(value);
    } else if (
      // the last character of the input is 0 and the second to
      // the last character (before the zero) is an operator
      // this will prevent leading zeros in numbers after operators
      // e.g. "1+01" will be displayed as "1+1"
      input.slice(-1) === "0" &&
      operators.includes(input.slice(-2, -1))
    ) {
      if (value === "0") {
        setInput(input + value);
      } else {
        setInput(input.slice(0, -1) + value);
      }
    } else {
      setInput(input + value);
    }

    // if the clicked button is not an operator
    if (!operators.includes(value)) {
      try {
        const evaluatedValue = evaluate(input + value);
        setResult(formatResult(evaluatedValue));
      } catch {
        setResult("Error");
      }
    }
  };

  const handleClickEquals = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClickClear = () => {
    const value = "";
    setInput(value);
    setResult(value);
  };

  const handleClickMR = () => {
    if (memory !== "") {
      setInput(memory);
    }
  };

  const handleClickMS = () => {
    if (input !== "0") {
      setMemory(input);
    }
    if (result !== "0") {
      setMemory(result);
    }
  };

  const handleClickMC = () => {
    setMemory("");
  };

  return (
    <div>
      <CalculatorPresenter
        input={input}
        result={result}
        onClickButton={handleClickButton}
        onClickEquals={handleClickEquals}
        onClickClear={handleClickClear}
        onClickMR={handleClickMR}
        onClickMS={handleClickMS}
        onClickMC={handleClickMC}
      />
    </div>
  );
};

export default CalculatorContainer;
