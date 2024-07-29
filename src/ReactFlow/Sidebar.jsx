import React, { useState } from "react";

export default ({ addNode }) => {
  const [isshow, setisshow] = useState(false);

  const toggleShow = () => {
    setisshow(!isshow);
  };

  const handleNodeClick = (event, nodeType) => {
    event.stopPropagation();
    const position = { x: 250, y: 5 }; // default position
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
