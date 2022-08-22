import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称：',
      placeholder: '请输入角色名'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价格：',
      placeholder: '请输入原价格'
    },
    {
      field: 'createTime',
      type: 'daterange',
      label: '创建时间：',
      placeholder: '请选择你创建的时间',
      otherOptions: {
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间'
      }
    }
  ]
}
