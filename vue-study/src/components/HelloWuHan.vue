<template>
    <div>
        <p>welcome to wuhan <router-link to="/china/wh/gg">光谷</router-link></p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'HelloWuHan'
    }
</script>

<style scoped>
    p{
        color:orange;
    }
</style>