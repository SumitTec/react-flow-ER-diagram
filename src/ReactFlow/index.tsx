import { useRef, useCallback, useState, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Node,
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
const getId = () => `dndnode_${id++}`;

const suppressResizeObserverError = () => {
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0].includes('ResizeObserver loop limit exceeded')) {
      return;
    }
    originalError.apply(console, args);
  };
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [isShowData, setIsShowData] = useState(true);

  useEffect(() => {
    suppressResizeObserverError();
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
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
      const newNode: any = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition]
  );

  const addNode = (newNode: ConcatArray<Node<any, string | undefined>>) => {
    setNodes((nds) => nds.concat(newNode));
  };

  const toggleShowData = () => {
    if (!isShowData) {
      setNodes([]);
    } else {
      setNodes(initialNodes);
    }
    setIsShowData(false)
  };

  return (
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
      {isShowData && <button onClick={toggleShowData} className="w-30 p-2 h-8 text-xs text-white bg-green-500 p-2 rounded mr-20 mt-20">
        Show Sample Data
      </button>}
    </div>
  );
};

const ReactFlows = () => (
  <ReactFlowProvider>
    <DnDFlow />
    <DownloadButton />
  </ReactFlowProvider>
);

export default ReactFlows;
