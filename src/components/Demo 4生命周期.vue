<template>
<div class="container">
<!-- 可以没有根标签 -->
  <div>我是Demo组件</div>
  姓：<input type="text" v-model="person.firstName">
  <br/>
  名：<input type="text" v-model="person.lastName">
  <br/>
  全名：<input type="text" v-model="person.fullName">
  <br/>
  <button @click="sum++">add 1s</button>
  <div>sum: {{sum}}</div>

  <!-- <span>全名: {{person.fullName}}</span> -->
</div>
</template>

<script>
import {ref, reactive, computed, watch, onBeforeMount, onMounted, onBeforeUpdate} from 'vue'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })

    let sum = ref(0)

    // 简写， 没有考虑修改
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })
    // 完整写法:
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    onBeforeMount(() => {
      console.log('onBeforeMount---')
    })
    
    onMounted(() => {
      console.log('onMounted---')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate---')
    })
    return {
      person,
      sum
    }
  }
}
</script>

<style scoped>
.container {
  border: 5px solid red;
}
</style>>