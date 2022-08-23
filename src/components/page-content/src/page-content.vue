<template>
  <div class="page-content">
    <Mytable :dataList="dataList" :total="total" v-model:page="pageInfo" v-bind="contentTableConfig" @handleSelectionChange="handleSelectionChange">
      <!-- 表格外操作栏插槽 -->
      <template #headerHandler>
        <el-button type="primary" @click="handleNewData">新建用户</el-button>
        <el-button :icon="Refresh"></el-button>
      </template>

      <!-- 数据栏公用插槽         -->
      <template #status="{ row }">
        <el-button plain size="small" text :type="!row.enable ? 'danger' : 'success'">{{ !row.status ? '禁用' : '启用' }}</el-button>
      </template>
      <template #createAt="{ row }">
        {{ $filters.formatTime(row.createAt) }}
      </template>
      <template #updateAt="{ row }">
        {{ $filters.formatTime(row.updateAt) }}
      </template>

      <template #handler="{ row }">
        <el-button text type="primary" @click="handleUpdateData(row)">编辑</el-button>
        <el-button text type="primary" @click="deleteData(row)">删除</el-button>
      </template>

      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="{ row }">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="row"></slot>
        </template>
      </template>
    </Mytable>
  </div>
</template>

<script setup lang="ts">
import { Message, Refresh } from '@element-plus/icons-vue'
import Mytable from '@/base-ui/table'
import { defineProps, defineExpose, ref, watch, getCurrentInstance, defineEmits } from 'vue'
import { getPageListData, deletePageData } from '@/service/main/system/system'
import { DataType } from '@/service/login/type'
import { usePermission } from '@/hooks/usePermission'
import { ElMessage } from 'element-plus/lib/index'
import 'element-plus/theme-chalk/index.css'

const instance = getCurrentInstance()
let dataList = ref<DataType[]>([])
let pageInfo = ref({ currentPage: 1, pageSize: 10 })
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

const emits = defineEmits(['handleUpdateData', 'handleNewData'])

const getPageList = (query: any = {}) => {
  getPageListData(
    props.urlName,
    {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
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

watch(pageInfo, () => {
  getPageList()
})

const handleSelectionChange = (value: any) => {
  console.log(value)
}

const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
  if (item.slotName === 'status') return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'handler') return false
  return true
})

const isCreate = usePermission(props.urlName.split('/')[0], 'create')
const isUpdate = usePermission(props.urlName.split('/')[0], 'update')
const isDelete = usePermission(props.urlName.split('/')[0], 'delete')
const isQuery = usePermission(props.urlName.split('/')[0], 'query')

// 删除，增加，修改
const deleteData = (row: any) => {
  const urlName = props.urlName.split('/')[0] + `/${row.id}`
  deletePageData(urlName).then((res) => {
    if (res.code === 0) {
      ElMessage({ type: 'success', message: res.data })
    } else {
      ElMessage({ type: 'error', message: res.data })
    }
    instance?.proxy?.$Bus.emit('handleQuery')
  })
}

const handleUpdateData = (row: any) => {
  emits('handleUpdateData', row)
}

const handleNewData = () => {
  emits('handleNewData')
}
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
