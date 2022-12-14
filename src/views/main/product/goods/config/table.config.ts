export const contentTableConfig = {
  title: "商品",
  propList: [
    {
      prop: "name",
      label: "商品名称",
      minWidth: "100",
      slotName: "name",
    },
    {
      prop: "oldPrice",
      label: "原价格",
      minWidth: "100",
      slotName: "oldPrice",
    },
    {
      prop: "newPrice",
      label: "现价格",
      minWidth: "100",
      slotName: "newPrice",
    },
    {
      prop: "status",
      label: "状态",
      minWidth: "100",
      slotName: "status",
    },
    {
      prop: "imgUrl",
      label: "商品图片",
      minWidth: "100",
      slotName: "imgUrl",
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "100",
      slotName: "createAt",
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "100",
      slotName: "updateAt",
    },
    {
      label: "操作",
      minWidth: "80",
      slotName: "handler",
    },
  ],
  showIndexColumn: true,
  showSelectColumn: true,
};
