<template>
  <div class="goods">
    <pageSearch
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="queryBtnClick"
      @resetBtnClick="resetBtnClick"
    ></pageSearch>
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :urlName="urlName"
    >
      <template #imgUrl="{ row }">
        <el-image
          style="width: 100px; height: 100px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
        />
      </template>
      <template #oldPrice="{ row }">{{ "￥" + row.oldPrice }}</template>
      <template #newPrice="{ row }">{{ "￥" + row.newPrice }}</template>
    </pageContent>
  </div>
</template>

<script setup lang="ts">
import { contentTableConfig } from "./config/table.config";
import { searchFormConfig } from "./config/search.config";
import pageContent from "@/components/page-content";
import pageSearch from "@/components/page-search";
import { usePageSearch } from "@/hooks/usePageSearch";

const urlName = "goods/list";

const { pageContentRef, queryBtnClick, resetBtnClick } = usePageSearch();
</script>

<style scoped></style>
