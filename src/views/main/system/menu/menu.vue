<template>
  <div class="role">
    <!-- <pageSearch :searchFormConfig="searchFormConfig"></pageSearch> -->
    <pageContent :contentTableConfig="contentTableConfig" :urlName="urlName"></pageContent>
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/table.config'

const urlName = 'menu/list'
</script>

<style scoped></style>
