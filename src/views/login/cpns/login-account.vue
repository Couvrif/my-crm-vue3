<template>
  <div class="login-account">
    <el-form
      :model="account"
      label-width="70px"
      ref="formRef"
      :rules="accountRules"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineProps, toRefs, defineExpose, toRef } from "vue";
import cache from "@/utils/cache";
import type { ElForm, FormInstance, FormRules } from "element-plus";
import store from "@/store";
import { postLogin } from "@/service/login/login";

const { login } = store();

const formRef = ref<InstanceType<typeof ElForm>>();

const account = reactive({
  name: cache.getCache("name") ?? "",
  password: cache.getCache("password") ?? "",
});

const props = defineProps({
  isKeep: {
    type: Boolean,
  },
});

const { isKeep } = toRefs(props);

const accountRules = {
  name: [
    { required: true, message: "必须输入用户名", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: "必须是6~20个字母或者数字",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "必须输入密码", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "必须是3位以上数字",
      trigger: "blur",
    },
  ],
};

const accountLoginAction = () => {
  console.log("子组件点击登陆", login);
  formRef.value?.validate((valid) => {
    console.log("校验", valid);
    // eslint-disable-next-line no-undef
    if (isKeep) {
      cache.setCache("name", account.name);
      cache.setCache("password", account.password);
    } else {
      cache.deleteCache("name");
      cache.deleteCache("password");
    }

    login.userLogin(account);
  });
};

defineExpose({ accountLoginAction });
</script>

<style scoped>
.login-account {
  padding: 15px 0;
}
</style>
