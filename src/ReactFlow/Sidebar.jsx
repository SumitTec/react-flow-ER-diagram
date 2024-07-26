import React, { useState } from "react";

export default () => {
  const [isshow, setisshow] = useState(false);
  const [isnewshow, setisnewshow] = useState(false);
  const [issub, setissub] = useState(false);
  const [isoutsub, setisoutsub] = useState(false);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const toggleShow = () => {
    setisshow(!isshow);
  };

  const newtoggelshow = () => {
    setisnewshow(!isnewshow);
  };

  const subtoggle = (event) => {
    event.stopPropagation();
    setissub(!issub);
  };

  const outputtoggle = (event) => {
    event.stopPropagation();
    setisoutsub(!isoutsub);
  };

  const handleItemClick = (event) => {
    event.stopPropagation();
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        onClick={toggleShow}
        className={`dndnode inputs ${isshow ? "arrow" : ""}`}
        draggable
      >
        ER Diagram
        {isshow && (
          <div className="SUbmenu-list">
            <ul>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "ernode")}
                  draggable
                  onClick={handleItemClick}
                >
                  ER Node
                </div>
              </li>
              <li>
                <div
                  onClick={subtoggle}
                  className={`dndnodes input ${issub ? "arrows" : ""}`}
                >
                  Input Node
                  {issub && (
                    <div className="SUbmenu-lists">
                      <ul>
                        <li>
                          <div
                            className="text-xs w-16 ml-2 py-1.5"
                            onDragStart={(event) =>
                              onDragStart(event, "inputs")
                            }
                            draggable
                          >
                            Default
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                {/* <div
                  className="dndnodes outputs"
                  onDragStart={(event) => onDragStart(event, "outputs")}
                  draggable
                >
                  Output Node
                </div> */}

                <div
                  onClick={outputtoggle}
                  className={`dndnodes input ${isoutsub ? "arrows" : ""}`}
                >
                  Output Node
                  {isoutsub && (
                    <div className="SUbmenu-lists">
                      <ul>
                        <li>
                          <div
                            className="text-xs w-16 ml-2 py-1.5"
                            onDragStart={(event) =>
                              onDragStart(event, "outputs")
                            }
                            draggable
                          >
                            Default
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "default")}
                  draggable
                  onClick={handleItemClick}
                >
                  Default Node
                </div>
              </li>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "custom")}
                  draggable
                  onClick={handleItemClick}
                >
                  Custom
                </div>
              </li>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "number")}
                  draggable
                  onClick={handleItemClick}
                >
                  Number
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
     {/* <div
        onClick={newtoggelshow}
        className={`dndnode inputs ${isnewshow ? "arrow" : ""}`}
        draggable
      >
        Flow Chart
        {isnewshow && (
          <div className="SUbmenu-list">
            <ul>
              <li>
                <div
                  className="ernode"
                  onDragStart={(event) => onDragStart(event, "startend")}
                  draggable
                >
                  Start/End Node
                </div>
              </li>
              <li>
                <div
                  className="ernode"
                  onDragStart={(event) => onDragStart(event, "inputoutput")}
                  draggable
                >
                  Input/Output Node
                </div>
              </li>
              <li>
                <div
                  className="ernode"
                  onDragStart={(event) => onDragStart(event, "decision")}
                  draggable
                  onClick={handleItemClick}
                >
                  Decision Node
                </div>
              </li>
              <li>
                <div
                  className="ernode"
                  onDragStart={(event) => onDragStart(event, "process")}
                  draggable
                  onClick={handleItemClick}
                >
                  Process Node
                </div>
              </li>
              <li>
                <div
                  className="ernode"
                  onDragStart={(event) => onDragStart(event, "delay")}
                  draggable
                  onClick={handleItemClick}
                >
                  Delay
                </div>
              </li>
            </ul>
          </div>
        )}
      </div> */}
    </aside>
  );
};
