export const initialNodes = [
  {
    id: "dndnode_0",
    type: "ernode",
    position: { x: 14.3, y: 108.7 },
    data: {
      label: "order_status",
      sourceHandles: [{ id: "1-source-status VARCHAR", position: 40 }],
      targetHandles: [{ id: "1-target-status VARCHAR", position: 40 }],
      items: [{ id: 1, label: "status VARCHAR", type: "10" }],
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
        { id: "1-source-status VARCHAR", position: 50 },
        { id: "1-source-address VARCHAR", position: 67 },
        { id: "1-source-price", position: 85 },
      ],
      targetHandles: [
        { id: "1-target-id", position: 15 },
        { id: "1-target-user_id", position: 35 },
        { id: "1-target-status VARCHAR", position: 50 },
        { id: "1-target-address VARCHAR", position: 67 },
        { id: "1-target-price", position: 85 },
      ],
      items: [
        { id: 1, label: "id", type: "INT" },
        { id: 2, label: "user_id", type: "INT" },
        { id: 3, label: "status VARCHAR", type: "10" },
        { id: 4, label: "address VARCHAR", type: "45" },
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
        { id: 2, label: "name ", type: "VARCHAR 45" },
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
        { id: 2, label: "user_name", type: "VARCHAR 45" },
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
        { id: 2, label: "user_id", type: "VARCHAR 45" },
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
