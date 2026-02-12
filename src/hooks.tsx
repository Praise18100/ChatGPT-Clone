import { Heading } from "@chakra-ui/react";
import type { FC } from "react";

export const useCalculator = () => {
  const add = (...args: number[]) => {
    return args.reduce((sum, val) => sum + val, 0);
  };

  const subtract = (a: number, b: number) => {
    return a - b;
  };

  // Option 1: Using FC type
  const FormatNumber: FC<{ num: number }> = ({ num }) => {
    return <Heading size="sm">{num.toLocaleString()}</Heading>;
  };

  // Option 2: Regular function component (current - works great!)
  // function formatNumber(num: number) {
  //   return <Heading size="sm">{num.toLocaleString()}</Heading>;
  // }

  return { add, subtract, FormatNumber };
};
