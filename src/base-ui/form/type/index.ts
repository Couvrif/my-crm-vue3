type IFormType = "input" | "password" | "select" | "datepicker" | "daterange";

export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  isHidden?: boolean;

  // 对于select
  options?: any[];

  // 特殊属性
  otherOptions?: any;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
  title?: string;
}
