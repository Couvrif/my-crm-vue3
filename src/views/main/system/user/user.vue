<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <div class="content">
      <Mytable :dataList="dataList" :propList="propList" :title="title" @handleSelectionChange="handleSelectionChange">
        <!-- 表格外操作栏插槽 -->
        <template #headerHandler>
          <el-button type="primary" size="medium">新建用户</el-button>
          <el-button :icon="Refresh"></el-button>
        </template>

        <!-- 数据栏插槽         -->
        <template #enable="{ row }">
          <el-button plain size="mini" :type="!row.enable ? 'error' : 'success'">{{ !row.enable ? '禁用' : '启用' }}</el-button>
        </template>
        <template #createAt="{ row }">
          {{ $filters.formatTime(row.createAt) }}
        </template>
        <template #updateAt="{ row }">
          {{ $filters.formatTime(row.updateAt) }}
        </template>
        <template #handler>
          <el-button type="text" size="mini">编辑</el-button>
          <el-button type="text" size="mini">删除</el-button>
        </template>
      </Mytable>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Refresh } from '@element-plus/icons-vue'
import { IForm } from '@/base-ui/form'
import { formConfig } from './config/search.config'
import { propList } from './config/table.config'
import pageSearch from '@/components/page-search'
import Mytable from '@/base-ui/table'
import { getPageListData } from '@/service/main/system/system'
import { DataType } from '@/service/login/type'
import { ref } from 'vue'

const searchFormConfig: IForm = formConfig
const title = '用户列表'
let dataList = ref<DataType[]>([])

getPageListData('/users/list', {
  offset: 0,
  size: 10
}).then((res) => {
  dataList.value = res.data.list
  console.log(dataList, 'aaabbb')
})

const handleSelectionChange = (value: any) => {
  console.log(value)
}
</script>
<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
