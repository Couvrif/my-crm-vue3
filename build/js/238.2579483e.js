"use strict";(self["webpackChunkvue3_ts_cms"]=self["webpackChunkvue3_ts_cms"]||[]).push([[238],{94489:function(e,l,t){t.r(l),t.d(l,{default:function(){return y}});var a=t(73396),n=t(44870);const o={labelWidth:"100px",itemStyle:{padding:"10px 40px"},formItems:[{field:"name",type:"input",label:"用户名：",placeholder:"请输入用户名"},{field:"realname",type:"input",label:"真实姓名：",placeholder:"请输入真实姓名"},{field:"cellphone",type:"input",label:"电话号码：",placeholder:"请输入电话号码"},{field:"enable",type:"select",label:"用户状态：",placeholder:"请选择用户状态",options:[{key:"启用",value:1},{key:"禁用",value:0}]},{field:"createAt",type:"daterange",label:"创建时间：",placeholder:"请选择你创建的时间",otherOptions:{"start-placeholder":"开始时间","end-placeholder":"结束时间"}}]},r={title:"用户",propList:[{prop:"name",label:"用户名",minWidth:"100",slotName:"name"},{prop:"realname",label:"真实姓名",minWidth:"100",slotName:"realname"},{prop:"cellphone",label:"手机号码",minWidth:"100",slotName:"cellphone"},{prop:"enable",label:"状态",minWidth:"100",slotName:"enable"},{prop:"createAt",label:"创建时间",minWidth:"100",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"100",slotName:"updateAt"},{label:"操作",minWidth:"80",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0},d={title:"新建用户",formItems:[{field:"name",type:"input",label:"用户名",placeholder:"请输入用户名"},{field:"realname",type:"input",label:"真实姓名",placeholder:"请输入真实姓名"},{field:"cellphone",type:"input",label:"电话号码",placeholder:"请输入电话号码"},{field:"password",type:"password",label:"密码",placeholder:"请输入密码",isHidden:!1},{field:"departmentId",type:"select",label:"选择部门",placeholder:"请选择部门",options:[]},{field:"roleId",type:"select",label:"选择角色",placeholder:"请选择角色",options:[]}],colLayout:{span:24},itemStyle:{padding:"5px 40px"}};var i=t(67841),p=t(76980),s=t(40758),f=t(54337),m=t(50558),c=t(66534);const u={class:"user"};var h=(0,a.aZ)({__name:"user",setup(e){const l="users/list",{login:t}=(0,c.Z)();console.log(t,"别搞笑");const h=()=>{const e=d.formItems.find((e=>"password"===e.field));e&&(e.isHidden=!1)},b=()=>{const e=d.formItems.find((e=>"password"===e.field));e&&(e.isHidden=!0)},y=(0,a.Fl)((()=>{const e=d.formItems.find((e=>"roleId"===e.field));e.options=t.entireRole.map((e=>({title:e.name,value:e.id})));const l=d.formItems.find((e=>"departmentId"===e.field));return l.options=t.entireDepartment.map((e=>({title:e.name,value:e.id}))),d})),{pageContentRef:C,queryBtnClick:g,resetBtnClick:k}=(0,f.Y)(),{pageModalRef:I,handleNewData:w,handleUpdateData:N,defaultInfo:v}=(0,m.S)(h,b);return(e,t)=>((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)((0,n.unref)(i.Z),{searchFormConfig:(0,n.unref)(o),onQueryBtnClick:(0,n.unref)(g),onResetBtnClick:(0,n.unref)(k)},null,8,["searchFormConfig","onQueryBtnClick","onResetBtnClick"]),(0,a.Wm)((0,n.unref)(p.Z),{ref_key:"pageContentRef",ref:C,contentTableConfig:(0,n.unref)(r),urlName:l,onHandleUpdateData:(0,n.unref)(N),onHandleNewData:(0,n.unref)(w)},null,8,["contentTableConfig","onHandleUpdateData","onHandleNewData"]),(0,a.Wm)((0,n.unref)(s.Z),{urlName:l,defaultInfo:(0,n.unref)(v),ref_key:"pageModalRef",ref:I,modalConfig:(0,n.unref)(y)},null,8,["defaultInfo","modalConfig"])]))}});const b=h;var y=b}}]);
//# sourceMappingURL=238.2579483e.js.map