import React, { useRef, useCallback } from "react";
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

import DownloadButton from "./DownloadImage";
import Sidebar from "./Sidebar";
import Nodes from "./Nodes/Custom";
import NumberNodes from "./Nodes/NumberNode";
import OutputNode from "./Nodes/OutputNode";
import DefaultNode from "./Nodes/DefaultNode";
import InputNode from "./Nodes/InputNode";
import StartEnd from "./Nodes/StartEnd";
import InputOutput from "./Nodes/InputOutput";
import Decision from "./Nodes/Decision";
import Process from "./Nodes/Process";
import Delay from "./Nodes/Delay";
import ERNodes from "./Nodes/ERNode";

const nodeTypes = {
  custom: Nodes,
  number: NumberNodes,
  ernode: ERNodes,
  outputs: OutputNode,
  defaults: DefaultNode,
  inputs: InputNode,
  startend: StartEnd,
  inputoutput: InputOutput,
  decision: Decision,
  process: Process,
  delay: Delay,
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

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
      const newNode = {
        id: `dndnode_${Date.now()}`,
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
