<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig" @queryBtnClick="queryBtnClick" @resetBtnClick="resetBtnClick"></pageSearch>
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :urlName="urlName"
      @handleUpdateData="handleUpdateData"
      @handleNewData="handleNewData"
    ></pageContent>
    <pageModal :urlName="urlName" :defaultInfo="defaultInfo" ref="pageModalRef" :modalConfig="modalConfigRes"></pageModal>
  </div>
</template>
<script lang="ts" setup>
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/table.config'
import { modalConfig } from './config/modal.config'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import Store from '@/store'
import { ref, computed } from 'vue'

const urlName = 'users/list'

const { login } = Store()
console.log(login, '别搞笑')

const newCallback = () => {
  const psw = modalConfig.formItems.find((item) => {
    return item.field === 'password'
  })
  if (psw) psw.isHidden = false
}

const updateCallback = () => {
  const psw = modalConfig.formItems.find((item) => {
    return item.field === 'password'
  })
  if (psw) psw.isHidden = true
}

const modalConfigRes = computed(() => {
  const roleItem = modalConfig.formItems.find((item) => {
    return item.field === 'roleId'
  })

  roleItem!.options = login.entireRole.map((value: { name: any; id: any }) => {
    return { title: value.name, value: value.id }
  })

  const departmentItem = modalConfig.formItems.find((item) => {
    return item.field === 'departmentId'
  })

  departmentItem!.options = login.entireDepartment.map((value: { name: any; id: any }) => {
    return { title: value.name, value: value.id }
  })
  return modalConfig
})

const { pageContentRef, queryBtnClick, resetBtnClick } = usePageSearch()
const { pageModalRef, handleNewData, handleUpdateData, defaultInfo } = usePageModal(newCallback, updateCallback)
</script>
<style lang="less" scoped></style>
