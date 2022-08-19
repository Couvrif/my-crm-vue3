<template>
  <div class="login">
    <div class="login-content">
      <el-tabs type="border-card" stretch v-model="currentTab">
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><User /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <loginAccountVue :isKeep="isKeep" ref="accountRef"></loginAccountVue>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <loginPhoneVue></loginPhoneVue>
        </el-tab-pane>
      </el-tabs>
      <div class="control-account">
        <el-checkbox v-model="isKeep">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" class="login-btn" @click="loginAction">立即登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Iphone } from '@element-plus/icons-vue'
import loginAccountVue from './cpns/login-account.vue'
import loginPhoneVue from './cpns/login-phone.vue'
import cache from '@/utils/cache'

// do not use same name with ref
const isKeep = ref(true)
const currentTab = ref('account')
const accountRef = ref<InstanceType<typeof loginAccountVue>>()

const loginAction = () => {
  console.log('submit!', accountRef.value)
  accountRef.value?.accountLoginAction()
}
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');

  .login-content {
    width: 360px;
    margin: 220px auto;
    .control-account {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
    }

    .login-btn {
      margin-top: 12px;
      width: 100%;
    }
  }
}
</style>
