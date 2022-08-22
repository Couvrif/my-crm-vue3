<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig" @queryBtnClick="queryBtnClick" @resetBtnClick="resetBtnClick"></pageSearch>
    <pageContent ref="pageContentRef" :contentTableConfig="contentTableConfig" :urlName="urlName"></pageContent>
  </div>
</template>
<script lang="ts" setup>
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/table.config'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/usePageSearch'

const { pageContentRef, queryBtnClick, resetBtnClick } = usePageSearch()

const urlName = 'users/list'
</script>
<style lang="less" scoped></style>
