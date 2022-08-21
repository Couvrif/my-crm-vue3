<template>
  <div class="page-search">
    <MyForm v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh">重置</el-button>
          <el-button :icon="Search" type="primary">确定</el-button>
        </div>
      </template>
    </MyForm>
  </div>
</template>
<script lang="ts" setup>
import { Refresh, Search } from '@element-plus/icons-vue'
import MyForm from '@/base-ui/form'
import { ref, defineProps } from 'vue'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>
<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
