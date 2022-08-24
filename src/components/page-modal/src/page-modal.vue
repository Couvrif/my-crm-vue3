<template>
  <div class="page-modal">
    <el-dialog v-model="centerDialogVisible" title="新建用户" width="26%" center destroy-on-close>
      <MyForm v-bind="modalConfig" v-model="formData"></MyForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose, watch, getCurrentInstance } from 'vue'
import MyForm from '@/base-ui/form'
import { createPageData, updatePageData } from '@/service/main/system/system'

const instance = getCurrentInstance()
let centerDialogVisible = ref(false)
const formData = ref<any>({})

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  urlName: {
    type: String,
    required: true
  },
  otherInfo: {
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

const handleConfirmClick = async () => {
  const pageName = props.urlName.split('/')[0]
  if (Object.keys(props.defaultInfo).length > 0) {
    const res = await updatePageData(`/${pageName}/${props.defaultInfo.id}`, { ...formData.value, ...props.otherInfo })
    console.log('res', res)
  } else {
    const res = await createPageData(`/${pageName}`, { ...formData.value, ...props.otherInfo })
    console.log('res', res)
  }
  instance?.proxy?.$Bus.emit('handleQuery')
  centerDialogVisible.value = false
}
</script>

<style scoped></style>
