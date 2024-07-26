import React, { Fragment } from "react";

function ColorPickerNode({ bgcolor }) {
  return (
    <Fragment>
      <div className="w-full mb-2">
        <div className="bg-erbg inline-block rounded-lg p-0.5 w-full">
          <div
            className="w-full rounded-lg pb-10"
            style={{ backgroundColor: bgcolor ? bgcolor : "#fff" }}
          ></div>
        </div>
      </div>
    </Fragment>
  );
}

export default ColorPickerNode;
