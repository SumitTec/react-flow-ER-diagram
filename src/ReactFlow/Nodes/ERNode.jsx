import React, { useState, useEffect, Fragment } from "react";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import AddItemsModal from "./NoUseNodes/AddItemsModal";
import { MdCheck, MdEdit, MdSettings } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TiArrowRightThick } from "react-icons/ti";
import ColorPickerModel from "./NoUseNodes/ColorPickerModel";

function ERNodes({ id, data }) {
  const { setNodes, getNodes } = useReactFlow();
  const [items, setItems] = useState(data?.items || []);
  const [title, setTitle] = useState(data?.label || "Enter Name");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isSettting, setIsSettting] = useState(false);
  const [bgColorNode, setBgColorNode] = useState(data?.bgColor || "");

  const handleRemoveItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    updateHandles(newItems);
  };

  const updateHandles = (newItems) => {
    const sourceHandles = newItems.map((item, index) => ({
      id: `source-${index}`,
      position: calculateHandlePosition(index, newItems.length),
    }));
    const targetHandles = newItems.map((item, index) => ({
      id: `target-${index}`,
      position: calculateHandlePosition(index, newItems.length),
    }));

    setNodes((nds) =>
      nds.map((n) =>
        n.id === id
          ? {
              ...n,
              data: {
                ...n.data,
                sourceHandles,
                targetHandles,
                items: newItems,
              },
            }
          : n
      )
    );
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
    setNodes((nds) =>
      nds.map((n) =>
        n.id === id
          ? {
              ...n,
              data: {
                ...n.data,
                label: title,
              },
            }
          : n
      )
    );
  };

  const calculateHandlePosition = (index, total) => {
    const spacing = 1 / (total + 1);
    return (index + 1) * spacing * 100;
  };

  const handleSetting = () => {
    setIsSettting(!isSettting);
  };

  // useEffect(() => {
  //   // Retrieve initial data from localStorage
  //   const initialData = localStorage.getItem("Json");
  //   if (initialData) {
  //     const parsedData = JSON.parse(initialData);
  //     setNodes(parsedData);
  //   }
  // }, [setNodes]);

  // useEffect(() => {
  //   const nodes = getNodes();
  //   if (nodes && nodes.length > 0) {
  //     const converted = JSON.stringify(nodes);
  //     // localStorage.setItem("Json", converted);
  //   }
  // }, [getNodes]);

  return (
    <Fragment>
      <div className="">
        {isSettting && (
          <NodeToolbar>
            <ColorPickerModel setBgColorNode={setBgColorNode} />
            <AddItemsModal
              items={items}
              setItems={setItems}
              node={{ id, data }}
              title={title}
            />
          </NodeToolbar>
        )}
        <div className="bg-erbg inline-block rounded-lg p-0.5">
          <div
            className="w-32 rounded-lg pb-2"
            style={{ background: bgColorNode ? bgColorNode : "#061044" }}
          >
            <div className="flex justify-between bg-erlabelbg rounded-t-lg px-1 py-1 border-b border-outerborderBlue h-auto">
              <div className="text-8 text-white w-3/4">
                {isEditingTitle ? (
                  <input
                    type="text"
                    value={title}
                    defaultValue={"Enter name"}
                    onChange={handleTitleChange}
                    onBlur={handleTitleBlur}
                    className="w-full text-black p-1 rounded h-3 outline-none"
                    autoFocus
                  />
                ) : (
                  <span onClick={handleTitleClick} className="cursor-pointer">
                    {title || "Enter name"}
                  </span>
                )}
              </div>
              <div className="flex">
                {isEditingTitle && (
                  <button
                    onClick={handleTitleBlur}
                    className="w-4 h-3 text-7 text-white bg-green-500 px-0 py-0.5 rounded mx-0.5 flex justify-center"
                  >
                    <MdCheck />
                  </button>
                )}
                {!isEditingTitle && (
                  <button
                    onClick={handleTitleClick}
                    className="w-4 h-3 text-7 text-white bg-green-500 px-0 py-0.5 rounded mx-0.5 flex justify-center"
                  >
                    <MdEdit />
                  </button>
                )}
                <button
                  onClick={handleSetting}
                  className="w-4 h-3 text-7 text-white bg-green-500 px-0 py-0.5 rounded mx-0.5 flex justify-center"
                >
                  <MdSettings />
                </button>
              </div>
            </div>
            <div className="py-1 relative">
              <div className="handles targets">
                {data?.targetHandles?.map((handle) => (
                  <Handle
                    key={handle.id}
                    id={handle.id}
                    className="justify-between"
                    type="target"
                    style={{
                      background: "#555",
                      top: `${handle.position}%`,
                    }}
                    position={Position.Left}
                  />
                ))}
              </div>
              {items?.map((item) => (
                <div
                  key={item.id}
                  className="text-white px-2 text-xs flex justify-between"
                >
                  <div className="flex text-7">
                    <TiArrowRightThick className="w-2.5 h-2.5 shadow-arrowsh bg-arrowbg text-arrowcolor px-0.5 py-0.5 text-7 rounded mr-1 mt-1" />
                    {item.label}
                    <span className="ml-1 text-tetnum text-5 uppercase">
                      - ({item.type})
                    </span>
                  </div>
                  <div className="justify">
                    <IoIosCloseCircle
                      onClick={() => handleRemoveItem(item.id)}
                      className="h-2.5 mt-1 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
              <div className="handles sources">
                {data?.sourceHandles?.map((handle) => (
                  <Handle
                    key={handle.id}
                    id={handle.id}
                    type="source"
                    position={Position.Right}
                    style={{
                      background: "#555",
                      top: `${handle.position}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ERNodes;
