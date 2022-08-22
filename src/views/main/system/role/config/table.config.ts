export const contentTableConfig = {
  title: '角色列表',
  propList: [
    {
      prop: 'name',
      label: '角色名',
      minWidth: '100',
      soltName: 'name'
    },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '100',
      soltName: 'intro'
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
