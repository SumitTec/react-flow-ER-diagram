export const initialNodes = [
  {
    id: "dndnode_0",
    type: "ernode",
    position: { x: 14.3, y: 108.7 },
    data: {
      label: "order_status",
      sourceHandles: [{ id: "1-source-status ", position: 40 }],
      targetHandles: [{ id: "1-target-status ", position: 40 }],
      items: [{ id: 1, label: "status ", type: "boolean" }],
    },
  },
  {
    id: "dndnode_1",
    type: "ernode",
    position: { x: 187.8, y: 83.4 },
    data: {
      label: "order",
      sourceHandles: [
        { id: "1-source-id", position: 15 },
        { id: "1-source-user_id", position: 35 },
        { id: "1-source-status ", position: 50 },
        { id: "1-source-address ", position: 67 },
        { id: "1-source-price", position: 85 },
      ],
      targetHandles: [
        { id: "1-target-id", position: 15 },
        { id: "1-target-user_id", position: 35 },
        { id: "1-target-status ", position: 50 },
        { id: "1-target-address ", position: 67 },
        { id: "1-target-price", position: 85 },
      ],
      items: [
        { id: 1, label: "id", type: "INT" },
        { id: 2, label: "user_id", type: "INT" },
        { id: 3, label: "status ", type: "boolean" },
        { id: 4, label: "address ", type: "string" },
        { id: 5, label: "price", type: "INT" },
      ],
    },
  },
  {
    id: "dndnode_2",
    type: "ernode",
    position: { x: 362.4, y: 95.3 },
    data: {
      label: "order_item",
      sourceHandles: [
        { id: "1-source-order_id", position: 18 },
        { id: "1-source-product_id", position: 40 },
        { id: "1-source-price", position: 62 },
        { id: "1-source-qty", position: 83 },
      ],
      targetHandles: [
        { id: "1-target-order_id", position: 18 },
        { id: "1-target-product_id", position: 40 },
        { id: "1-target-price", position: 62 },
        { id: "1-target-qty", position: 83 },
      ],
      items: [
        { id: 1, label: "order_id", type: "INT" },
        { id: 2, label: "product_id", type: "INT" },
        { id: 3, label: "price", type: "INT" },
        { id: 4, label: "qty", type: "INT" },
      ],
    },
  },
  {
    id: "dndnode_3",
    type: "ernode",
    position: { x: 555.9, y: 104.5 },
    data: {
      label: "product",
      sourceHandles: [
        { id: "1-source-id", position: 18 },
        { id: "1-source-name ", position: 40 },
        { id: "1-source-price", position: 60 },
        { id: "1-source-qty", position: 80 },
      ],
      targetHandles: [
        { id: "1-target-id", position: 18 },
        { id: "1-target-name ", position: 40 },
        { id: "1-target-price", position: 60 },
        { id: "1-target-qty", position: 80 },
      ],
      items: [
        { id: 1, label: "id", type: "INT" },
        { id: 2, label: "name ", type: "string" },
        { id: 3, label: "price", type: "INT" },
        { id: 4, label: "qty", type: "INT" },
      ],
    },
  },
  {
    id: "dndnode_4",
    type: "ernode",
    position: { x: 43.1, y: 253.6 },
    data: {
      label: "user",
      sourceHandles: [
        { id: "1-source-id", position: 21 },
        { id: "1-source-user_name", position: 48 },
      ],
      targetHandles: [
        { id: "1-target-id", position: 21 },
        { id: "1-target-user_name", position: 48 },
      ],
      items: [
        { id: 1, label: "id", type: "INT" },
        { id: 2, label: "user_name", type: "string" },
      ],
    },
  },
  {
    id: "dndnode_5",
    type: "ernode",
    position: { x: 275.3, y: 292.9 },
    data: {
      label: "cart",
      sourceHandles: [
        { id: "1-source-id", position: 31 },
        { id: "1-source-user_id", position: 67 },
      ],
      targetHandles: [
        { id: "1-target-id", position: 31 },
        { id: "1-target-user_id", position: 67 },
      ],
      items: [
        { id: 1, label: "id", type: "INT" },
        { id: 2, label: "user_id", type: "string" },
      ],
    },
  },
  {
    id: "dndnode_6",
    type: "ernode",
    position: { x: 442.8, y: 268.2 },
    data: {
      label: "cart_item",
      sourceHandles: [
        { id: "1-source-cart_id", position: 22 },
        { id: "1-source-product_id", position: 47 },
        { id: "1-source-qty", position: 77 },
      ],
      targetHandles: [
        { id: "1-target-cart_id", position: 22 },
        { id: "1-target-product_id", position: 47 },
        { id: "1-target-qty", position: 77 },
      ],
      items: [
        { id: 1, label: "cart_id", type: "INT" },
        { id: 2, label: "product_id", type: "INT" },
        { id: 3, label: "qty", type: "INT" },
      ],
    },
  },
];

export const initialEdges = [
  {
    source: "dndnode_0",
    sourceHandle: "1-source-status ",
    target: "dndnode_1",
    targetHandle: "1-target-user_id",
    id: "reactflow__edge-dndnode_01-source-status -dndnode_11-target-user_id",
  },
  {
    source: "dndnode_4",
    sourceHandle: "1-source-user_name",
    target: "dndnode_1",
    targetHandle: "1-target-address ",
    id: "reactflow__edge-dndnode_41-source-user_name-dndnode_11-target-address ",
  },
  {
    source: "dndnode_4",
    sourceHandle: "1-source-id",
    target: "dndnode_1",
    targetHandle: "1-target-address ",
    id: "reactflow__edge-dndnode_41-source-id-dndnode_11-target-address ",
  },
  {
    source: "dndnode_4",
    sourceHandle: "1-source-id",
    target: "dndnode_5",
    targetHandle: "1-target-user_id",
    id: "reactflow__edge-dndnode_41-source-id-dndnode_51-target-user_id",
  },
  {
    source: "dndnode_5",
    sourceHandle: "1-source-id",
    target: "dndnode_6",
    targetHandle: "1-target-cart_id",
    id: "reactflow__edge-dndnode_51-source-id-dndnode_61-target-cart_id",
  },
  {
    source: "dndnode_6",
    sourceHandle: "1-source-product_id",
    target: "dndnode_3",
    targetHandle: "1-target-id",
    id: "reactflow__edge-dndnode_61-source-product_id-dndnode_31-target-id",
  },
  {
    source: "dndnode_1",
    sourceHandle: "1-source-id",
    target: "dndnode_2",
    targetHandle: "1-target-order_id",
    id: "reactflow__edge-dndnode_11-source-id-dndnode_21-target-order_id",
  },
  {
    source: "dndnode_2",
    sourceHandle: "1-source-product_id",
    target: "dndnode_3",
    targetHandle: "1-target-id",
    id: "reactflow__edge-dndnode_21-source-product_id-dndnode_31-target-id",
  },
  {
    source: "dndnode_6",
    sourceHandle: "1-source-qty",
    target: "dndnode_3",
    targetHandle: "1-target-qty",
    id: "reactflow__edge-dndnode_61-source-qty-dndnode_31-target-qty",
  },
];
