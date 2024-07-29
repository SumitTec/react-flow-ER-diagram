export const initialNodes = [
  {
    id: "dndnode_0",
    type: "ernode",
    position: {
      x: 14.304428491037385,
      y: 108.73593729399454,
    },
    data: {
      label: "order_status",
      sourceHandles: [
        {
          id: "1-source-status VARCHAR",
        },
      ],
      targetHandles: [
        {
          id: "1-target-status VARCHAR",
        },
      ],
      items: [
        {
          id: 1,
          label: "status VARCHAR",
          type: "10",
          sourceHandles: "1-source-status VARCHAR",
          targetHandles: "1-target-status VARCHAR",
        },
      ],
    },
    width: 132,
    height: 57,
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 14.304428491037385,
      y: 108.73593729399454,
    },
  },
  {
    id: "dndnode_1",
    type: "ernode",
    position: {
      x: 187.77630307902643,
      y: 83.39609405900822,
    },
    data: {
      label: "order",
      sourceHandles: [
        {
          id: "1-source-id",
        },
        {
          id: "1-source-user_id",
        },
        {
          id: "1-source-status VARCHAR",
        },
        {
          id: "1-source-address VARCHAR",
        },
        {
          id: "1-source-price",
        },
      ],
      targetHandles: [
        {
          id: "1-target-id",
        },
        {
          id: "1-target-user_id",
        },
        {
          id: "1-target-status VARCHAR",
        },
        {
          id: "1-target-address VARCHAR",
        },
        {
          id: "1-target-price",
        },
      ],
      items: [
        {
          id: 1,
          label: "id",
          type: "INT",
          sourceHandles: "1-source-id",
          targetHandles: "1-target-id",
        },
        {
          id: 1,
          label: "user_id",
          type: "INT",
          sourceHandles: "1-source-user_id",
          targetHandles: "1-target-user_id",
        },
        {
          id: 1,
          label: "status VARCHAR",
          type: "10",
          sourceHandles: "1-source-status VARCHAR",
          targetHandles: "1-target-status VARCHAR",
        },
        {
          id: 1,
          label: "address VARCHAR",
          type: "45",
          sourceHandles: "1-source-address VARCHAR",
          targetHandles: "1-target-address VARCHAR",
        },
        {
          id: 1,
          label: "price",
          type: "INT",
          sourceHandles: "1-source-price",
          targetHandles: "1-target-price",
        },
      ],
    },
    width: 132,
    height: 121,
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 187.77630307902643,
      y: 83.39609405900822,
    },
  },
  {
    id: "dndnode_2",
    type: "ernode",
    position: {
      x: 362.4242194710191,
      y: 95.30807315700639,
    },
    data: {
      label: "order_item",
      sourceHandles: [
        {
          id: "1-source-order_id",
        },
        {
          id: "1-source-product_id",
        },
        {
          id: "1-source-price",
        },
        {
          id: "1-source-qty",
        },
      ],
      targetHandles: [
        {
          id: "1-target-order_id",
        },
        {
          id: "1-target-product_id",
        },
        {
          id: "1-target-price",
        },
        {
          id: "1-target-qty",
        },
      ],
      items: [
        {
          id: 1,
          label: "order_id",
          type: "INT",
          sourceHandles: "1-source-order_id",
          targetHandles: "1-target-order_id",
        },
        {
          id: 1,
          label: "product_id",
          type: "INT",
          sourceHandles: "1-source-product_id",
          targetHandles: "1-target-product_id",
        },
        {
          id: 1,
          label: "price",
          type: "INT",
          sourceHandles: "1-source-price",
          targetHandles: "1-target-price",
        },
        {
          id: 1,
          label: "qty",
          type: "INT",
          sourceHandles: "1-source-qty",
          targetHandles: "1-target-qty",
        },
      ],
    },
    width: 132,
    height: 105,
    selected: false,
    positionAbsolute: {
      x: 362.4242194710191,
      y: 95.30807315700639,
    },
    dragging: false,
  },
  {
    id: "dndnode_3",
    type: "ernode",
    position: {
      x: 555.9278641369882,
      y: 104.48411496101005,
    },
    data: {
      label: "product",
      sourceHandles: [
        {
          id: "1-source-id",
        },
        {
          id: "1-source-name ",
        },
        {
          id: "1-source-price",
        },
        {
          id: "1-source-qty",
        },
      ],
      targetHandles: [
        {
          id: "1-target-id",
        },
        {
          id: "1-target-name ",
        },
        {
          id: "1-target-price",
        },
        {
          id: "1-target-qty",
        },
      ],
      items: [
        {
          id: 1,
          label: "id",
          type: "INT",
          sourceHandles: "1-source-id",
          targetHandles: "1-target-id",
        },
        {
          id: 1,
          label: "name ",
          type: "VARCHAR 45",
          sourceHandles: "1-source-name ",
          targetHandles: "1-target-name ",
        },
        {
          id: 1,
          label: "price",
          type: "INT",
          sourceHandles: "1-source-price",
          targetHandles: "1-target-price",
        },
        {
          id: 1,
          label: "qty",
          type: "INT",
          sourceHandles: "1-source-qty",
          targetHandles: "1-target-qty",
        },
      ],
    },
    width: 132,
    height: 105,
    selected: false,
    positionAbsolute: {
      x: 555.9278641369882,
      y: 104.48411496101005,
    },
    dragging: false,
  },
  {
    id: "dndnode_4",
    type: "ernode",
    position: {
      x: 43.10651869122009,
      y: 253.59465704638268,
    },
    data: {
      label: "user",
      sourceHandles: [
        {
          id: "1-source-id",
        },
        {
          id: "1-source-user_name",
        },
      ],
      targetHandles: [
        {
          id: "1-target-id",
        },
        {
          id: "1-target-user_name",
        },
      ],
      items: [
        {
          id: 1,
          label: "id",
          type: "INT",
          sourceHandles: "1-source-id",
          targetHandles: "1-target-id",
        },
        {
          id: 1,
          label: "user_name",
          type: "VARCHAR 45",
          sourceHandles: "1-source-user_name",
          targetHandles: "1-target-user_name",
        },
      ],
    },
    width: 132,
    height: 89,
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 43.10651869122009,
      y: 253.59465704638268,
    },
  },
  {
    id: "dndnode_5",
    type: "ernode",
    position: {
      x: 275.33685175657433,
      y: 292.9063748693581,
    },
    data: {
      label: "cart",
      sourceHandles: [
        {
          id: "1-source-id",
        },
        {
          id: "1-source-user_id",
        },
      ],
      targetHandles: [
        {
          id: "1-target-id",
        },
        {
          id: "1-target-user_id",
        },
      ],
      items: [
        {
          id: 1,
          label: "id",
          type: "INT",
          sourceHandles: "1-source-id",
          targetHandles: "1-target-id",
        },
        {
          id: 1,
          label: "user_id",
          type: "VARCHAR 45",
          sourceHandles: "1-source-user_id",
          targetHandles: "1-target-user_id",
        },
      ],
    },
    width: 132,
    height: 73,
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 275.33685175657433,
      y: 292.9063748693581,
    },
  },
  {
    id: "dndnode_6",
    type: "ernode",
    position: {
      x: 442.77564989146936,
      y: 268.1545525363735,
    },
    data: {
      label: "cart_item",
      sourceHandles: [
        {
          id: "1-source-cart_id",
        },
        {
          id: "1-source-product_id",
        },
        {
          id: "1-source-qty",
        },
      ],
      targetHandles: [
        {
          id: "1-target-cart_id",
        },
        {
          id: "1-target-product_id",
        },
        {
          id: "1-target-qty",
        },
      ],
      items: [
        {
          id: 1,
          label: "cart_id",
          type: "INT",
          sourceHandles: "1-source-cart_id",
          targetHandles: "1-target-cart_id",
        },
        {
          id: 1,
          label: "product_id",
          type: "INT",
          sourceHandles: "1-source-product_id",
          targetHandles: "1-target-product_id",
        },
        {
          id: 1,
          label: "qty",
          type: "INT",
          sourceHandles: "1-source-qty",
          targetHandles: "1-target-qty",
        },
      ],
    },
    width: 132,
    height: 89,
    selected: false,
    positionAbsolute: {
      x: 442.77564989146936,
      y: 268.1545525363735,
    },
    dragging: false,
  },
];
