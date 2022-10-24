import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  itemStyle: { padding: "10px 40px" },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名：",
      placeholder: "请输入用户名",
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名：",
      placeholder: "请输入真实姓名",
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码：",
      placeholder: "请输入电话号码",
    },
    {
      field: "enable",
      type: "select",
      label: "用户状态：",
      placeholder: "请选择用户状态",
      options: [
        {
          key: "启用",
          value: 1,
        },
        {
          key: "禁用",
          value: 0,
        },
      ],
    },
    {
      field: "createAt",
      type: "daterange",
      label: "创建时间：",
      placeholder: "请选择你创建的时间",
      otherOptions: {
        "start-placeholder": "开始时间",
        "end-placeholder": "结束时间",
      },
    },
  ],
};
