<template>
  <div class="page-content">
    <Mytable :dataList="dataList" :total="total" v-model:page="pageInfo" v-bind="contentTableConfig" @handleSelectionChange="handleSelectionChange">
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
</template>

<script setup lang="ts">
import { Refresh } from '@element-plus/icons-vue'
import Mytable from '@/base-ui/table'
import { defineProps, defineExpose, ref, watch } from 'vue'
import { getPageListData } from '@/service/main/system/system'
import { DataType } from '@/service/login/type'

let dataList = ref<DataType[]>([])
let pageInfo = ref({ currentPage: 0, pageSize: 10 })
let total = ref<number>()

let props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  urlName: {
    type: String,
    required: true
  }
})

const getPageList = (query: any = {}) => {
  getPageListData(
    props.urlName,
    {
      offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize
    },
    query
  ).then((res) => {
    dataList.value = res.data.list
    total.value = res.data.totalCount
    console.log(dataList, 'aaabbb')
  })
}
getPageList()
defineExpose({ getPageList })

const handleSelectionChange = (value: any) => {
  console.log(value)
}

watch(pageInfo, () => {
  getPageList()
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
