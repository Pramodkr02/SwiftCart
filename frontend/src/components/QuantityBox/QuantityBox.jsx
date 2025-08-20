import React from "react";

const QuantityBox = () => {
  return (
    <div className="QuantityBox">
      <input
        type="number"
        defaultValue={1}
        className="!w-full !border-3 !h-[45px]"
        min="1"
        max="1000"
      />
    </div>
  );
};

export default QuantityBox;
