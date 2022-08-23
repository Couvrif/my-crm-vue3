<template>
  <div class="my-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="dataList" border style="width: 100%" @selection-change="handleSelectionChange" v-bind="childrenProps">
      <el-table-column v-if="showSelectColumn" type="selection" align="center" width="60px"></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80px"></el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="pageInfo.currentPage"
          v-model:page-size="pageInfo.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, toRefs, PropType } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '列表'
  },
  dataList: {
    type: Array,
    required: true
  },
  propList: {
    type: Array as PropType<any[]>,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: true
  },
  showSelectColumn: {
    type: Boolean,
    default: true
  },
  pageInfo: {
    type: Object,
    default: () => ({ currentPage: 1, pageSize: 10 })
  },
  total: {
    type: Number,
    default: 0
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['selectionChange', 'update:page'])
const { dataList, propList, pageInfo } = toRefs(props)

const handleSelectionChange = (value: any) => {
  console.log('value', value)
  emit('selectionChange', value)
}

const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.pageInfo, pageSize })
}

const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.pageInfo, currentPage })
}
</script>
<style lang="less" scoped>
.my-table {
  overflow: hidden;
}
.header {
  display: flex;
  height: 45px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  float: right;
  .el-pagination {
    text-align: right;
  }
}
</style>
