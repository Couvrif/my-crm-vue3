<template>
  <div class="page-modal">
    <el-dialog v-model="centerDialogVisible" title="新建用户" width="26%" center>
      <MyForm v-bind="modalConfig" v-model="formData"></MyForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose, watch } from 'vue'
import MyForm from '@/base-ui/form'
import { modalConfig } from '@/views/main/system/user/config/modal.config'

const centerDialogVisible = ref(false)
const formData = ref<any>({})

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  }
})

defineExpose({ centerDialogVisible })

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
</script>

<style scoped></style>
