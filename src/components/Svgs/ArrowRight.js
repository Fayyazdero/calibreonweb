import React from "react";

const ArrowRight = ({ color, height }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 312 511.42"
        fill={color}
        height={height}
      >
        <path
          fill-rule="nonzero"
          d="M35.54 0 312 252.82 29.84 511.42 0 478.8l246.54-225.94L5.7 32.62z"
        />
      </svg>
    </div>
  );
};

export default ArrowRight;
