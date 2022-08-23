<template>
<div class="container">
<!-- 可以没有根标签 -->
  <div>我是Demo组件</div>
  <h1>name: {{name}}</h1>
  <h1>age: {{age}}</h1>
  <button @click="test1">Demo hello 调用父组件方法</button>
</div>
</template>

<script>
import {reactive, ref} from 'vue'
export default {
  name: 'Demo',
  props: ['msg', 'school', ],
  // emits: ['hello'], // 新版已经移除
  setup(props, context) {
    console.log('props: ', props) // 传递过来的响应式数据
    console.log('context: ', context) // 一个对象
    // console.log('context: ', context.attrs) // 一个对象
    console.log('context: ', context.slots) // 一个对象

    let name = ref('zs')
    let age = ref(18)

    function chnageInfo () {
      name.value = 'long'
      age.value = 25
    }
    function test1 () {
      context.emit('hello', 666)
    }

    return {
      name,
      age,
      test1
    }
  }
}
</script>

<style scoped>
.container {
  border: 5px solid red;
}
</style>>