import React, { useState } from "react";
import Modal from "react-modal";
import { useReactFlow } from "reactflow";
import { RxCrossCircled } from "react-icons/rx";
import { FaPlusCircle } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
const AddItemsModal = ({ items, setItems, node, title }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [showInputField, setShowInputField] = useState(false);
  const [modalItems, setModalItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { setNodes, getNodes, setEdges, getEdges } = useReactFlow();
  const handleAddItem = () => {
    if (inputValue.trim() && inputType.trim()) {
      // ================
      const labelExists =
        items.some((item) => item.label === inputValue) ||
        modalItems.some((item) => item.label === inputValue);
      if (labelExists) {
        setErrorMessage("Label is duplicate");
        return;
      }
      // =============
      const newId = items.length + 1;
      const newItem = {
        id: newId,
        label: inputValue,
        type: inputType,
        sourceHandles: `${newId}-source-${inputValue}`,
        targetHandles: `${newId}-target-${inputValue}`,
      };
      // const newItems = [...items, newItem];
      const newItems = [...modalItems, newItem];
      // setItems(newItems);
      setModalItems(newItems);
      // setIsOpen(false);
      setInputValue("");
      setInputType("");
      // setShowInput(false);
      // setHideButton(false);
    }
    setShowInputField(!showInputField);
  };
  const handleFinishItem = () => {
    const newItemsFinish = [...items, ...modalItems];

    console.log("newItemsFinish", newItemsFinish);
    setItems(newItemsFinish);
    // Extract sourceHandles and targetHandles from items
    const sourceHandles = newItemsFinish.map((item) => ({
      id: item.sourceHandles,
    }));
    const targetHandles = newItemsFinish.map((item) => ({
      id: item.targetHandles,
    }));
    // Update the node data
    setNodes((nds) =>
      nds.map((n) =>
        n.id === node.id
          ? {
              ...n,
              data: {
                ...n.data,
                sourceHandles,
                targetHandles,
                items: newItemsFinish,
              },
            }
          : n
      )
    );
    setIsOpen(false);
    setModalItems([]);
  };
  // const handleAddClick = () => {
  //   // setShowInput(true);
  //   // setHideButton(true);
  // };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };
  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
    setShowInputField(!showInputField);
    setModalItems([]);
  }
  return (
    <>
      <button
        onClick={openModal}
        className="w-5 text-xs text-white bg-green-500 px-1 py-0.5 rounded mx-1 font-semibold set-btn"
      >
        <TiPlus />
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
            {title}
          </h1>
          {showInputField === false ? (
            <div
              onClick={handleAddItem}
              className="text-white cursor-pointer hover:scale-105"
            >
              <FaPlusCircle className="size-5" />
            </div>
          ) : null}
        </div>
        <div className="block py-1 px-2">
          {modalItems.length > 0 && (
            <div className="grid grid-cols-2 gap-1 bg-[#CACFE1] border border-[#79A7FF] px-1 h-7 text-center rounded-t-md">
              <label className="text-black text-xs font-semibold border-r border-[#79A7FF] pt-1">
                Key
              </label>
              <label className="text-black text-xs font-semibold pt-1">
                Type
              </label>
            </div>
          )}
          {modalItems.map((data, index) => (
            <div
              className={`grid grid-cols-2 gap-1 border border-t-0 border-[#79A7FF] px-1 h-7 text-center ${
                index === modalItems.length - 1 ? "rounded-b-md" : ""
              }`}
              key={data.id}
            >
              <label className="text-white text-xs font-normal border-r border-[#79A7FF] pt-[5px]">
                {data.label}
              </label>
              <label className="text-white text-xs font-normal pt-[5px]">
                {data.type}
              </label>
            </div>
          ))}
          {/* <div
            className={` bg-[] rounded-md mt-3 ${
              showInputField ? "block" : "hidden"
            }`}
          > */}
          <div
            className={`flex flex-col gap-2 pb-2 pt-3 ${
              showInputField ? "block" : "hidden"
            }`}
          >
            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#3E5A7E] text-xs border-2 border-transparent text-white px-2 rounded-lg h-9  focus:border-[#79A7FF] focus:outline-none"
                value={inputValue}
                onChange={handleInputChange}
              />
              <p className="text-red-500 text-10">{errorMessage}</p>
            </div>
            <input
              type="text"
              placeholder="Type"
              className="w-full bg-[#3E5A7E] text-xs text-white px-2 rounded-lg h-9 border-2 border-transparent focus:border-[#79A7FF] focus:outline-none"
              value={inputType}
              onChange={handleTypeChange}
            />
          </div>
          <div className="flex gap-2">
            {showInputField ? (
              <>
                <button
                  onClick={handleAddItem}
                  className={`w-full text-xs text-center text-black hover:text-white bg-[#79A7FF] px-1 h-8 rounded-lg cursor-pointer hover:bg-black hover:border border-white pointer ${
                    inputValue.length === 0 ? "pointer-events-none" : ""
                  }`}
                >
                  Add
                </button>
                <button
                  onClick={handleAddItem}
                  className="w-full text-xs text-center text-white bg-red-500 px-1 h-8 rounded-lg hover:bg-black hover:border border-white pointer"
                >
                  Cancel
                </button>
              </>
            ) : null}
          </div>
          {/* </div> */}
          {modalItems.length > 0 ? (
            <button
              onClick={handleFinishItem}
              className="w-full text-xs mt-3 text-black hover:text-white bg-[#79A7FF] px-1 h-8 rounded-lg hover:bg-black hover:border border-white pointer"
            >
              Finish
            </button>
          ) : null}
        </div>
      </Modal>
    </>
  );
};
export default AddItemsModal;
