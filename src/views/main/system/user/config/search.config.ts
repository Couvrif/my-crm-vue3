import { IForm, IFormItem } from '@/base-ui/form'

export const formConfig: IForm = {
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '运动',
      placeholder: '请选择你喜欢的运动',
      options: [
        {
          key: '篮球',
          value: 'backupball'
        },
        {
          key: '足球',
          value: 'football'
        },
        {
          key: '桌球',
          value: 'tableball'
        }
      ]
    },
    {
      field: 'createTime',
      type: 'daterange',
      label: '创建时间',
      placeholder: '请选择你创建的时间',
      otherOptions: {
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间'
      }
    }
  ]
}
