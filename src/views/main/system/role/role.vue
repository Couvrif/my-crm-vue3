<template>
  <div class="role">
    <pageSearch :searchFormConfig="searchFormConfig" @queryBtnClick="queryBtnClick" @resetBtnClick="resetBtnClick"></pageSearch>
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :urlName="urlName"
      @handleUpdateData="handleUpdateData"
      @handleNewData="handleNewData"
    ></pageContent>
    <pageModal :urlName="urlName" :defaultInfo="defaultInfo" ref="pageModalRef" :modalConfig="modalConfig" :otherInfo="otherInfo">
      <div class="menusList">
        <el-tree
          ref="elTreeRef"
          :data="menuList"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleSelectMenu"
        />
      </div>
    </pageModal>
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import pageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/table.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { getMenuLeafKeys } from '@/utils/initRouter'
import { ElTree } from 'element-plus/lib/index'
import { ref, nextTick } from 'vue'
import Store from '@/store'

const urlName = 'role/list'
const { login } = Store()
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const otherInfo = ref({})
const menuList = login.entireMenu
console.log('lailaial', menuList, login.entireDepartment)

const handleSelectMenu = (data1: any, data2: any) => {
  console.log('data', data1, data2)
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}

const updateCallback = (item: any) => {
  const leafList = getMenuLeafKeys(item.menuList)
  console.log('leafList', leafList, elTreeRef)
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafList, false)
  })
}

const { pageContentRef, queryBtnClick, resetBtnClick } = usePageSearch()
const { pageModalRef, handleNewData, handleUpdateData, defaultInfo } = usePageModal(undefined, updateCallback)
</script>

<style scoped lang="less">
.menusList {
  margin-left: 60px;
}
</style>
