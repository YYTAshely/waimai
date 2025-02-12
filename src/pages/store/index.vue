<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <div>
        <van-nav-bar title="店铺" left-arrow @click-left="router.push()" />
        <div><img src="https://th.bing.com/th/id/OIP.63ZHyYLs_0HQzuTDqUUa5AHaE9?rs=1&pid=ImgDetMain"></div>
        <div class="flex justify-between px-8 mt-[-1rem] rounded bg-red-500 z-[9999] relative">
            <div>酸菜鱼</div>
            <div><img src="https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440" class="w-[72px] h-[72px]"></div>
        </div>
    </div>
</template>
