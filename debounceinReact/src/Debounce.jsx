import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Debounce = ({settext}) => {
  const timer = useRef(null);
  function debouceFunc(value) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      settext(value);
    }, 1000);
  }

  return (
    <div>
      <input
        onChange={(e) => debouceFunc(e.target.value)}
        type="text"
        placeholder="search something..........."
      />
    </div>
  );
};

export default Debounce;
