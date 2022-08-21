<template>
  <div class="my-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: '/' }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IBreadcrumb } from '../type'
const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style lang="less" scoped></style>
