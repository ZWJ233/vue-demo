<template>
    <div>
        <h1>HelloChina</h1>
        <p>{{msg}}</p>
        <router-link to="/china/wh">武汉</router-link>
        <router-link to="/china/sz">随州</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'login',
        data(){
            return {
                msg:'欢迎来到中国'
            }
        }
    }
</script>

<style scoped>
    h1{
        color:pink;
        font-size:20px;
    }
</style>