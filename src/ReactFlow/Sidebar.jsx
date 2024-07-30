import React, { useState } from "react";
import { getId } from ".";
import { useReactFlow } from "reactflow";
import { MdCheck, MdSettings } from "react-icons/md";

export default ({ addNode }) => {
  const [isshow, setisshow] = useState(false);

  const { screenToFlowPosition } = useReactFlow();
  const toggleShow = () => {
    setisshow(!isshow);
  };

  const handleNodeClick = (event, nodeType) => {
    // console.log("nodeType", nodeType);
    // event.stopPropagation();
    // const position = { x: 250, y: 5 }; // default position
    // const newNode = {
    //   id: `dndnode_${Date.now()}`,
    //   type: nodeType,
    //   position,
    //   data: { label: `${nodeType} node` },
    // };

    // const type = event.dataTransfer.getData("application/reactflow");

    if (typeof nodeType === "undefined" || !nodeType) {
      return;
    }

    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });
    const newNode = {
      id: `dndnode_${Date.now()}`,
      type: nodeType,
      position,
      data: { label: `${nodeType} node` },
    };

    addNode(newNode);
  };

  return (
    <aside>
      {/* <div className="description">
        You can drag these nodes to the pane on the right or click to add.
      </div>
      */}
      <div onClick={toggleShow} className={`dndnode inputs `}>
        <span className="block mb-4 text-white">Nodes</span>
        <div className="">
          <ul>
            <li>
              <div
                className="dndnodes"
                onClick={(event) => handleNodeClick(event, "ernode")}
              >
                {/* Default ER Node */}
                <div className="bg-erbg inline-block rounded-lg p-0.5">
                  <div className="w-40 h-12 rounded-lg pb-2 bg-erbg">
                    <div class="flex justify-between bg-erlabelbg rounded-t-lg px-1 py-1 border-b border-outerborderBlue h-auto">
                      <div className="text-8 text-white w-3/4">
                        <span className="cursor-pointer">Click to add</span>
                      </div>
                      <div className="flex">
                        <button
                          onClick={(e) => e.preventDefault()}
                          className="w-4 h-3 text-7 text-white bg-green-500 px-0 py-0.5 rounded mx-0.5 flex justify-center"
                        >
                          <MdCheck />
                        </button>
                        <button
                          onClick={(e) => e.preventDefault()}
                          className="w-4 h-3 text-7 text-white bg-green-500 px-0 py-0.5 rounded mx-0.5 flex justify-center"
                        >
                          <MdSettings />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
