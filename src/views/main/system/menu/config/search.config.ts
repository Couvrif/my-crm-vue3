import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名称：",
      placeholder: "请输入角色名",
    },
    {
      field: "intro",
      type: "input",
      label: "权限介绍：",
      placeholder: "请输入权限介绍",
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
