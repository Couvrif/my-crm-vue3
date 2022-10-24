<template>
  <div class="page-search">
    <MyForm v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh" @click="handleReset">重置</el-button>
          <el-button :icon="Search" type="primary" @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </MyForm>
  </div>
</template>
<script lang="ts" setup>
import { Refresh, Search } from "@element-plus/icons-vue";
import MyForm from "@/base-ui/form";
import { ref, defineProps, defineEmits, getCurrentInstance } from "vue";

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["queryBtnClick", "resetBtnClick"]);

let searchForm: any = {};
for (let item of props.searchFormConfig.formItems) {
  searchForm[item.field] = "";
}

const formData = ref(searchForm);

const handleReset = () => {
  formData.value = searchForm;
  emits("resetBtnClick");
};

const handleQueryClick = () => {
  emits("queryBtnClick", formData.value);
};

const instance = getCurrentInstance();

instance?.proxy?.$Bus.on("handleQuery", () => {
  return handleQueryClick();
});
</script>
<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
