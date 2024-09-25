import { useState, useEffect, useRef } from "react";
import Btn from "./Btn";

const Counter = () => {
  const [count, setCount] = useState(0);
  const updateCheck = useRef(false);

  const setCounter = () => {
    setCount(count + 1);
  };
  const plusTen = () => {
    setCount(count + 10); // count = count + 10
  };
  const minusTen = () => {
    setCount(count - 10);
    if (count - 10 <= 0) {
      setCount(0);
    }
  };
  const reset = () => {
    setCount(0);
  };

  // 마운트 (배열이 빈 배열일 때, 처음에 딱 한 번 만 호출 함)
  useEffect(() => {
    console.log("mount!");
  }, []);

  // 업데이트
  useEffect(() => {
    if (!updateCheck.current) {
      updateCheck.current = true;
      return;
    } else {
      console.log("count update!");
    }
  }, [count]);

  // 언마운트 (배열이 빈 배열, return값도 빈 값)
  useEffect(() => {
    return () => {
      console.log("unmount!");
    };
  }, []);

  return (
    <>
      <h1>Hello, React!</h1>
      <h1>Total Clicks : {count}</h1>
      <Btn click={setCounter} text="click" />
      <Btn click={plusTen} text="+10" />
      <Btn click={minusTen} text="-10" />
      <Btn click={reset} text="reset" />
    </>
  );
};

export default Counter;
