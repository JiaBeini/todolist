//一、创建Vue根实例
import Vue from 'vue'

// 导入App组件
import App from './App.vue'

// 创建vue根实例
new Vue({
    el:'#app',
    components:{
        //组件名：组件对象
        App//App:App
    },
    template:'<App/>'
})
//挂载App组件