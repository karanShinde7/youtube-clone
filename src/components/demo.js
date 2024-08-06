import React, { useMemo, useState } from "react";

const Demo = () => {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  //Function to find the nth prime number
  const findNthPrime = (n) => {
    let count = 0;
    let num = 2;
    console.log("Prime number function getting called...");
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  };

  const [text, setText] = useState(0);
  const [isDarkTheme, setDarkTheme] = useState(false);

  // if we use it like this, operation will take time while doing the heavy opertaion.
  // findNthPrime(text)
  //   when user wants to toggle theme which is not related to prime number but still react
  //   will perfom that and reconsoliation process will do the state change.
  //   To block this we should memoise the result of prime number by that we can call prime
  //   function only when text value changes.

  const prime = useMemo(() => {
    findNthPrime(text);
  }, [text]);

  console.log("Redering ...");

  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black ${
        isDarkTheme ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div>
        <button
          className={`m-10 p-2 bg-green-500`}
          onClick={() => setDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <input
        className={`m-4 p-2 w-70 border ${
          isDarkTheme ? "border-white" : "border-black"
        }`}
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <h1
          className={`font-bold mt-4 ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          nth Prime Number: {prime}
        </h1>
      </div>
    </div>
  );
};

export default Demo;
