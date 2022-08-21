<template>
  <div class="my-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input v-bind="item.otherOptions" :placeholder="item.placeholder" v-model="formData[`${item.field}`]"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" v-model="formData[`${item.field}`]">
                  <template v-for="option in item.options" :key="option.label">
                    <el-option v-bind="item.otherOptions" :value="option.value" :label="option.lable"></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'daterange'">
                <el-date-picker v-model="formData[`${item.field}`]" :type="item.type" v-bind="item.otherOptions" :placeholder="item.placeholder"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, ref, watch, defineEmits } from 'vue'
import { IFormItem } from '../type'

const props = defineProps({
  modelVale: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

const emits = defineEmits(['update:modelValue'])

const formData = ref({ ...props.modelVale })

watch(formData, (newValue) => {
  emits('update:modelValue', newValue)
})
</script>
<style lang="less" scoped>
.my-form {
  padding-top: 20px;
}
</style>
