<template>
<!-- 可以没有根标签 -->
  <div>我是App组件</div>
  <h1>name: {{name}}</h1>
  <h1>age: {{age}}</h1>
  <h1>salary: {{job.salary}}</h1>
  <h1>hobby: {{hobby}}</h1>

  <button @click="sayHello">sayHello</button>
  <button @click="chnageInfo">chnageInfo</button>
  <Demo msg="aaaaaaa" school="云罗小学" @hello="showHelloMsg">
    <template v-slot:qwe>
        <span>span</span>
    </template>
    <template v-slot:asd>
        <span>span</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
import {reactive, ref} from 'vue'
export default {
  name: 'App',
  components: {
    Demo
  },
  setup(props, context) {

    let name = ref('zs')
    let age = ref(18)
    let job = reactive({
      type: '前端',
      salary: '30k'
    })

    let hobby = reactive(['学习', '思考'])

    function sayHello () {
      console.log('hello')
    }

    function chnageInfo () {
      name.value = 'long'
      age.value = 25
      job.salary = '60k'
      hobby.push('睡觉')
    }
    function showHelloMsg (args) {
      alert('触发了 showHelloMsg 方法' + args)
    }

    return {
      name,
      age,
      job,
      hobby,
      sayHello,
      chnageInfo,
      showHelloMsg
    }
  }
}
</script>
