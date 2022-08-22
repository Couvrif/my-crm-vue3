export const contentTableConfig = {
  title: '商品列表',
  propList: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '100',
      soltName: 'name'
    },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '100',
      soltName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价格',
      minWidth: '100',
      soltName: 'newPrice'
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '100',
      soltName: 'enable'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      soltName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      soltName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '80',
      soltName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
