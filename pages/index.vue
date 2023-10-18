<template>
  <button v-for="item in list" :key="item" class="ml-4 btn">
    测试
  </button>

  <div class="p-8">
    <button class="btn" @click="handleBtn">
      点击
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCounter } from '@/store'
import { caseListApi } from '@/api'

const nuxtApp = useNuxtApp()

console.log('nuxtApp', nuxtApp)

const store = useCounter()
const list = ref([])
const { data } = await caseListApi()
list.value = data

async function handleBtn() {
  // const res = await caseListApi()
  console.log('store', store.myRef)
}
</script>
