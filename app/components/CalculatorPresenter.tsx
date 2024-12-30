import React from "react";
import Button from "./Button";

interface CalculatorPresenterProps {
  input: string;
  result: string;
  onClickButton: (num: string) => void;
  onClickEquals: () => void;
  onClickClear: () => void;
  onClickMR: () => void;
  onClickMS: () => void;
  onClickMC: () => void;
}

const CalculatorPresenter: React.FC<CalculatorPresenterProps> = ({
  input,
  result,
  onClickButton,
  onClickEquals,
  onClickClear,
  onClickMR,
  onClickMS,
  onClickMC,
}) => {
  const buttons = [
    { label: "MR", bgColor: "bg-gray-200", onClick: () => onClickMR() },
    { label: "MS", bgColor: "bg-gray-200", onClick: () => onClickMS() },
    { label: "MC", bgColor: "bg-gray-200", onClick: () => onClickMC() },
    {
      label: "*",
      bgColor: "bg-yellow-100",
      onClick: () => onClickButton("*"),
    },
    { label: "7", bgColor: "bg-white", onClick: () => onClickButton("7") },
    { label: "8", bgColor: "bg-white", onClick: () => onClickButton("8") },
    { label: "9", bgColor: "bg-white", onClick: () => onClickButton("9") },
    {
      label: "/",
      bgColor: "bg-yellow-100",
      onClick: () => onClickButton("/"),
    },
    { label: "4", bgColor: "bg-white", onClick: () => onClickButton("4") },
    { label: "5", bgColor: "bg-white", onClick: () => onClickButton("5") },
    { label: "6", bgColor: "bg-white", onClick: () => onClickButton("6") },
    {
      label: "+",
      bgColor: "bg-yellow-100",
      onClick: () => onClickButton("+"),
    },
    { label: "1", bgColor: "bg-white", onClick: () => onClickButton("1") },
    { label: "2", bgColor: "bg-white", onClick: () => onClickButton("2") },
    { label: "3", bgColor: "bg-white", onClick: () => onClickButton("3") },
    {
      label: "-",
      bgColor: "bg-yellow-100",
      onClick: () => onClickButton("-"),
    },
    { label: "0", bgColor: "bg-white", onClick: () => onClickButton("0") },
    { label: ".", bgColor: "bg-white", onClick: () => onClickButton(".") },
    { label: "C", bgColor: "bg-gray-200", onClick: () => onClickClear() },
    { label: "=", bgColor: "bg-pink-200", onClick: () => onClickEquals() },
  ];

  return (
    <div className="flex flex-col w-[240px] bg-gray-500 gap-2 p-3 rounded-md">
      <div className="bg-gray-800 w-full px-2 py-1 rounded-sm">
        <h3 className="text-white">CandyCalculator</h3>
      </div>
      <div className="w-full">
        <div className="text-white h-6">{input ? input : ""}</div>
      </div>
      <div className="w-full">
        <div className="bg-white border-gray-900 px-2 py-1 text-right text-3xl rounded-sm">
          {result ? result : "0"}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            bgColor={button.bgColor}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorPresenter;
