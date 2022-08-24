import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  title: '新建角色',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
      // rules: [{ required: true }]
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
      // rules: [{ required: true }]
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: '5px 40px' }
}
