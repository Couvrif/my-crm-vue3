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
    <pageModal :defaultInfo="defaultInfo" ref="pageModalRef" :modalConfig="modalConfig"></pageModal>
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
import { ref } from 'vue'

const urlName = 'users/list'

const { pageContentRef, queryBtnClick, resetBtnClick } = usePageSearch()

const pageModalRef = ref<InstanceType<typeof pageModal>>()
const defaultInfo = ref({})

const handleUpdateData = (item: any) => {
  defaultInfo.value = item
  if (pageModalRef.value) {
    pageModalRef.value.centerDialogVisible = true
  }
}

const handleNewData = () => {
  if (pageModalRef.value) {
    pageModalRef.value.centerDialogVisible = true
  }
}
</script>
<style lang="less" scoped></style>
