<template>
  <div class="goods">
    <pageSearch :searchFormConfig="searchFormConfig" @queryBtnClick="queryBtnClick" @resetBtnClick="resetBtnClick"></pageSearch>
    <pageContent ref="pageContentRef" :contentTableConfig="contentTableConfig" :urlName="urlName"></pageContent>
  </div>
</template>

<script setup lang="ts">
import { contentTableConfig } from './config/table.config'
import { searchFormConfig } from './config/search.config'
import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import { usePageSearch } from '@/hooks/usePageSearch'

const urlName = 'goods/list'

const { pageContentRef, queryBtnClick, resetBtnClick } = usePageSearch()
</script>

<style scoped></style>
