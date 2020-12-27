<template>
    <div><h1>this is App</h1> </div>
</template>

<script>
// import img from './assets/images/bg.png'
// import './assets/styles/test.css'
import './assets/styles/global.styl'

export default {
    name:'App',
    created(){
        console.log(img)
    }
}
</script>
<style lang='stylus' scoped>
h1
    color :red
</style>