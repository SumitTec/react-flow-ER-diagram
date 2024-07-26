import React, { useState, Fragment } from "react";
import { Handle, Position } from "reactflow";

function NumberNodes() {
  const [items, setItems] = useState([
    { id: 1, label: "textures", type: "string" },
    { id: 2, label: "fractalSpeed", type: "number" },
    { id: 3, label: "vector3", type: "string" },
    { id: 4, label: "Color", type: "string" },
    { id: 5, label: "Resolution", type: "number" },
    { id: 6, label: "vector4", type: "vector" },
  ]);

  const [title, setTitle] = useState("Number");
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [hideButton, setHideButton] = useState(false);

  const handleAddClick = () => {
    setShowInput(true);
    setHideButton(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() && inputType.trim()) {
      setItems([
        ...items,
        { id: items.length + 1, label: inputValue, type: inputType },
      ]);
      setInputValue("");
      setInputType("");
      setShowInput(false);
      setHideButton(false);
    }
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  return (
    <Fragment>
      <div className="">
        <div className="bg-numberbg inline-block rounded-lg p-0.5">
          <div className="w-52 rounded-lg bg-numbergradientbg pb-2">
            <div className="flex justify-between bg-numberlabelbg rounded-t-lg px-3 py-1 border-b border-outerborderBlue">
              <div className="text-xs text-white">
                {isEditingTitle ? (
                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    onBlur={handleTitleBlur}
                    className="text-black p-1 rounded"
                    autoFocus
                  />
                ) : (
                  <span onClick={handleTitleClick} className="cursor-pointer">
                    {title}
                  </span>
                )}
              </div>
              <div className="flex">
                <div draggable className="text-8 w-fit text-white bg-numberrgb py-0.5 px-2 rounded text-center shadow-frogshadow mx-1">
                  RGB
                </div>
                <div className="hover:sepia filter-none inline-flex">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="gear"
                    className="svg-inline--fa fa-gear text-settingcolor w-2.5 cursor-pointer"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="py-1">
              {items.map((item) => (
                <div key={item.id} className="text-white px-2 text-xs flex justify-between">
                  <div className="flex">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="right-long"
                      className="w-5 h-4 mt-0.5 shadow-arrowsh bg-arrowbg text-arrowcolor px-0.5 py-0.5 text-10 rounded mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"
                      ></path>
                    </svg>
                    {item.label}
                    <span className="ml-1 text-tetnum text-7">({item.type})</span>
                  </div>

                  <div className="justify">
                    <img
                      src="/images/cross_active.svg"
                      alt=""
                      className="h-3 mt-1 cursor-pointer"
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>

            {showInput && (
              <div className="py-1 px-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full text-xs text-black p-1 rounded mb-1"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Type"
                  className="w-full text-xs text-black p-1 rounded mb-1"
                  value={inputType}
                  onChange={handleTypeChange}
                />
                <button
                  onClick={handleAddItem}
                  className="w-full text-xs text-white bg-blue-500 p-1 rounded"
                >
                  Add
                </button>
              </div>
            )}

            {!hideButton && (
              <button
                onClick={handleAddClick}
                className="w-full text-xs text-white bg-green-500 p-1 rounded mt-2"
              >
                Add Item
              </button>
            )}
          </div>
        </div>
      </div>

      <Handle
        type="source"
        style={{ background: "#555" }}
        id="top"
        position={Position.Top}
      />
      <Handle
        type="target"
        style={{ background: "#555" }}
        id="bottom"
        position={Position.Bottom}
      />
    </Fragment>
  );
}

export default NumberNodes;