import { ref } from 'vue'
import pageModal from '@/components/page-modal'

type funType = () => void

export function usePageModal(newFn: funType, updateFn: funType) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})

  const handleUpdateData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    updateFn()
  }

  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    newFn()
  }
  return { pageModalRef, defaultInfo, handleNewData, handleUpdateData }
}
