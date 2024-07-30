import { useRef, useCallback, useState, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Node,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes } from "./node-edges";
import DownloadButton from "./DownloadImage";
import Sidebar from "./Sidebar";
import ERNodes from "./Nodes/ERNode";

const nodeTypes = {
  ernode: ERNodes,
};

let id = 0;
export const getId = () => `dndnode_${id++}`;

const suppressResizeObserverError = () => {
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0].includes("ResizeObserver loop limit exceeded")) {
      return;
    }
    originalError.apply(console, args);
  };
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition, getNodes } = useReactFlow();
  const [isShowData, setIsShowData] = useState(true);

  useEffect(() => {
    suppressResizeObserverError();
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  const addNode = (newNode: Node) => {
    console.log("newNode", newNode);
    setNodes((nds) => nds.concat(newNode));
  };

  const toggleShowData = () => {
    console.log("Toggel");

    if (!isShowData) {
      setNodes([]);
      setIsShowData(true);
    } else {
      setIsShowData(false);
      setNodes(initialNodes);
    }
  };
  console.log("GetNOde", getNodes());
  console.log("setIsShowData", isShowData);
  console.log("Nodes", nodes);

  return (
    <>
      <div className="dndflow">
        <Sidebar addNode={addNode} />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
      </div>
      <Panel position="top-right">
        <button
          className="w-30 h-8 text-xs text-white bg-green-500 p-2 pr-3 rounded mr-3 "
          onClick={toggleShowData}
        >
          {!isShowData ? "Hide Sample Data" : "Show Sample Data"}
        </button>
        <DownloadButton />
      </Panel>
    </>
  );
};

const ReactFlows = () => (
  <ReactFlowProvider>
    <DnDFlow />
  </ReactFlowProvider>
);

export default ReactFlows;
