<template>
    <div v-for="(item,index) in NavList" :key="index" class="item" @click="tostore">
        <img :src="item.pic">
        <div class="item_right">
            <div class="title">{{ item.title }}</div>
            <div class="sales">{{ item.sales }}</div>
            <div class="price">{{ item.price }}</div>
            <div class="label">
                <div v-for="(i,index) in item.label"  :key="index">{{ i }}</div>
            </div>
        </div>
    </div>

</template>


<script setup>
    import {useRouter} from 'vue-router'
   const props = defineProps({
    NavList:{
        type:Array,
    }
   })
   const router =useRouter();
   const tostore = ()=>{
    router.push('/store');
   }
</script>

<style scoped>
    .item {
        display: flex;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
    }
    .item:not(:first-child){
        margin-top: 10px;
    }
    .item img {
        width: 120px;
        height: 120px;
        border-radius: 10px;
        margin-right: 20px;
    }
    .item .item_right {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    .item_right .title {
        font-size: 18px;
    }
    .item .label {
        display: flex;
    }
    .item .label div {
        padding:2px 5px;
        border-radius: 5px;
        background-color: #ffc400;
    }
    .item .label div:not(:first-child){
        margin-left: 5px;
    }
</style>