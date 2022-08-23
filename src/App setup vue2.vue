<template>
<!-- 可以没有根标签 -->
  <div>我是App组件</div>
  <h1>name: {{name}}</h1>
  <h1>age: {{age}}</h1>

  <button @click="sayHello">sayHello</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'App',
  // vue2的写法， 会有在vue3读取不到vue2的数据
  // 不建议混用】
  // data() {
  //   return {
  //     sex: 'nan'
  //   }
  // },
  // methods: {
  //   sayhi() {
  //     console.log('sayhi')
  //   }
  // },
  setup() {
    let name = 'zs'
    let age = 18

    function sayHello () {
      console.log('hello')
    }

    // return {
    //   name,
    //   age,
    //   sayHello
    // }
    // 渲染函数
    return () => h('h1', '返回渲染函数')
  }
}
</script>
