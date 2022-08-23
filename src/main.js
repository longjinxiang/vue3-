// 引入的不是构造函数，而是一个一个工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例--app 类似于Vue2的vm， 但是更轻
const app = createApp(App)
console.log(app) // 是一个对象

app.mount('#app') // 挂载

// setTimeout(() => {
//   app.unmount('#app')
// }, 1000)
