import React, { useState } from "react";
import Modal from "react-modal";
import { RxCrossCircled } from "react-icons/rx";
import { FaPlusCircle } from "react-icons/fa";
import { IoColorFill } from "react-icons/io5";
import { SketchPicker } from "react-color";
import ColorPickerNode from "./ColorPickerNode";

const ColorPickerModel = ({ setBgColorNode }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [color, setColor] = useState("#061044");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleAddBgColor = () => {
    setBgColorNode(color);
    setIsOpen(false);
  };

  const handleRemoveBgColor = () => {
    setColor("");
  };

  const handleOpenColorPicker = () => {
    setOpenColorPicker(true);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    setOpenColorPicker(!openColorPicker);
  }

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="w-5 text-xs text-white bg-green-500 px-1 py-0.5 rounded mx-1 font-semibold set-btn"
      >
        <IoColorFill />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={`!bg-[#0C1E35] !top-12 !right-0 !h-[calc(100vh-48px)] !absolute !z-20 !transition-all !duration-500 !ease-in-out pt-2 !rounded-l-lg ${
          modalIsOpen ? "w-[250px]" : "w-0 hidden"
        }`}
        contentLabel="Example Modal"
      >
        <div
          className="cursor-pointer text-white float-right mb-3 mr-2 hover:scale-105"
          onClick={() => setIsOpen(false)}
        >
          <RxCrossCircled className="size-6" />
        </div>
        <div className="clear-both"></div>
        <div className="flex items-center justify-between gap-1 px-2">
          <h1 className="text-lg font-medium text-center text-white">
            Change your Node Color
          </h1>
          {openColorPicker === false ? (
            <div
              onClick={handleOpenColorPicker}
              className="text-white cursor-pointer hover:scale-105"
            >
              <FaPlusCircle className="size-5" />
            </div>
          ) : null}
        </div>
        <div className="block py-1 px-2">
          <div
            className={`flex flex-col gap-2 pt-3 pb-2 ${
              openColorPicker ? "block" : "hidden"
            }`}
          >
            <div className="w-full">
              <ColorPickerNode bgcolor={color} />
              <div
                onClick={() => setDisplayColorPicker(!displayColorPicker)}
                className="w-full text-10 text-center text-black bg-white px-2 py-1 rounded cursor-pointer"
              >
                Choose Bg Color Here
              </div>
              {displayColorPicker && (
                <SketchPicker color={color} onChange={handleColorChange} />
              )}
            </div>
          </div>

          <div className="flex gap-1">
            {openColorPicker ? (
              <>
                <button
                  onClick={handleAddBgColor}
                  className="w-full text-xs text-center text-black hover:text-white bg-[#79A7FF] px-1 h-8 rounded-lg hover:bg-black hover:border border-white pointer"
                >
                  Add Color
                </button>
                <button
                  onClick={handleRemoveBgColor}
                  className="w-full text-xs text-center text-white bg-red-500 px-1 h-8 rounded-lg hover:bg-black hover:border border-white pointer"
                >
                  Remove Color
                </button>
              </>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ColorPickerModel;
