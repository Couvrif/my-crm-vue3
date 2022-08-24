import { ref } from 'vue'
import pageModal from '@/components/page-modal'

type funType = (item?: any) => void

export function usePageModal(newFn?: funType, updateFn?: funType) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})

  const handleUpdateData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    updateFn && updateFn(item)
  }

  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    newFn && newFn()
  }
  return { pageModalRef, defaultInfo, handleNewData, handleUpdateData }
}
