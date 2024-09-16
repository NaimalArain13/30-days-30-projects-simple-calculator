"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "./ui/card";
import { ChangeEvent, useState } from "react";
export default function SimpleCalculator() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");

  //Event handlers
  const handleNum1 = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum1(e.target.value);
  };
  const handleNum2 = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum2(e.target.value);
  };

  //Calculation functions
  const add = (): void => {
    setResult((parseInt(num1) + parseInt(num2)).toString());
  };
  const sub = (): void => {
    setResult((parseInt(num1) - parseInt(num2)).toString());
  };
  const multiply = (): void => {
    setResult((parseInt(num1) * parseInt(num2)).toString());
  };
  const divide = (): void => {
    if (parseInt(num2) !== 0) {
      setResult((parseInt(num1) / parseInt(num2)).toString());
    } else {
      setResult("Error: Division by Zero");
    }
  };

  //clear function
  const clearFunction = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 flex-cols">
      <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Simple Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="number1">Number 1</label>
              <Input
                name="number1"
                type="number"
                value={num1}
                onChange={handleNum1}
                placeholder="Enter the number"
                required
                className="rounded-md"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="number2">Number 2</label>
              <Input
                name="number2"
                type="number"
                value={num2}
                onChange={handleNum2}
                placeholder="Enter the Number"
                required
                className="rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant={"outline"}
              onClick={add}
              className="text-2xl font-bold text-gray-700 dark:text-gray-300"
            >
              +
            </Button>
            <Button
              variant={"outline"}
              onClick={sub}
              className="text-2xl rounded-md font-bold text-gray-700 dark:text-gray-300"
            >
              -
            </Button>
            <Button
              variant={"outline"}
              onClick={multiply}
              className="text-2xl rounded-md font-bold text-gray-700 dark:text-gray-300"
            >
              *
            </Button>
            <Button
              variant={"outline"}
              onClick={divide}
              className="text-2xl rounded-md font-bold text-gray-700 dark:text-gray-300"
            >
              /
            </Button>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="result">Result</label>
            <Input
              id="result"
              type="text"
              value={result}
              placeholder="Result"
              readOnly
              className="rounded-md"
            />
          </div>

          <Button
            onClick={clearFunction}
            variant={"outline"}
            className="w-full rounded-md"
          >
            Clear
          </Button>
        </CardContent>
        <CardFooter className=" flex justify-center items-center">
          Built with <p className="text-red-900 m-2">🤍</p> by{" "}
          <i className="ml-2">Naimal Salahuddin</i>
        </CardFooter>
      </Card>
    </div>
  );
}
