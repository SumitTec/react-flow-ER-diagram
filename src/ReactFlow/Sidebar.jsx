import React, { useState } from "react";
import { getId } from ".";
import { useReactFlow } from "reactflow";

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
      <div className="description">
        You can drag these nodes to the pane on the right or click to add.
      </div>
      <div
        onClick={toggleShow}
        className={`dndnode inputs ${isshow ? "arrow" : ""}`}
      >
        ER Diagram
        {isshow && (
          <div className="SUbmenu-list">
            <ul>
              <li>
                <div
                  className="dndnodes"
                  onClick={(event) => handleNodeClick(event, "ernode")}
                >
                  Default ER Node
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};
