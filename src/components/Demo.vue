<template>
<div class="container">
<!-- 可以没有根标签 -->
  <div>我是Demo组件</div>
  姓：<input type="text" v-model="person.firstName">
  <br/>
  名：<input type="text" v-model="lastName">
  <br/>
  全名：<input type="text" v-model="person.fullName">
  <br/>
  <button @click="sum++">add 1s</button>
  <div>sum: {{sum}}</div>

  <div>name: {{name1}}</div>
  <div>name: {{lastName}}</div>

  <!-- <span>全名: {{person.fullName}}</span> -->
</div>
</template>

<script>
import {ref, reactive, computed, toRef, toRefs} from 'vue'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三',
      age: 18,
      job: {
        salary: '前端'
      }
    })

    let sum = ref(0)

   // 变成响应式数据
    const name1 = toRef(person, 'firstName')
    return {
      person,
      sum,
      name1,
      lastName: toRef(person, 'lastName'),
      salary: toRef(person.job, 'salary'),
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>
.container {
  border: 5px solid red;
}
</style>>