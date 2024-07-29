import React, { useState, Fragment, useEffect } from "react";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import AddItemsModal from "./NoUseNodes/AddItemsModal";
import { MdCheck, MdEdit, MdSettings } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TiArrowRightThick } from "react-icons/ti";
import ColorPickerModel from "./NoUseNodes/ColorPickerModel";

function ERNodes(node) {
  const { setNodes, getNodes } = useReactFlow(); // Get setNodes function from ReactFlow context

  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("Enter Name");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isSettting, setIsSettting] = useState(false);
  const [bgColorNode, setBgColorNode] = useState("");

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);

    const sourceHandles = newItems.map((item) => ({ id: item.sourceHandles }));
    const targetHandles = newItems.map((item) => ({ id: item.targetHandles }));
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
        n.id === node.id
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
    return (index + 1) * spacing;
  };

  const handleSetting = () => {
    setIsSettting(!isSettting);
  };

  useEffect(() => {
    // Retrieve initial data from localStorage
    const initialData = localStorage.getItem("Json");
    console.log("Initial data from localStorage:", initialData); // Debug log
    if (initialData) {
      const parsedData = JSON.parse(initialData);
      console.log("Parsed initial data:", parsedData); // Debug log
      setNodes(parsedData);
    }
  }, [setNodes]);

  const nodes = getNodes();
  console.log("Current nodes:", nodes); // Debug log

  useEffect(() => {
    if (nodes && nodes.length > 0) {
      console.log("Nodes to be saved:", nodes); // Debug log
      const converted = JSON.stringify(nodes);
      localStorage.setItem("Json", converted);
    }
  }, [nodes]);

  console.log("Node", getNodes());
  console.log("Nodes", node);

  return (
    <Fragment>
      <div className="">
        {isSettting && (
          <NodeToolbar>
            <ColorPickerModel setBgColorNode={setBgColorNode} />
            <AddItemsModal
              items={items}
              setItems={setItems}
              node={node}
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
                {node?.data?.targetHandles?.map((handle, index) => {
                  return (
                    <Handle
                      key={handle.id}
                      id={handle.id}
                      className="justify-between"
                      type="target"
                      style={{
                        background: "#555",
                        top: `${
                          calculateHandlePosition(index, items.length) * 100
                        }%`,
                      }}
                      position={Position.Left}
                    />
                  );
                })}
              </div>
              {node.data?.items?.map((item) => (
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
                {node?.data?.sourceHandles?.map((handle, index) => (
                  <Handle
                    key={handle.id}
                    id={handle.id}
                    type="source"
                    position={Position.Right}
                    style={{
                      background: "#555",
                      top: `${
                        calculateHandlePosition(index, items.length) * 100
                      }%`,
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
