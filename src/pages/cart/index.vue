<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <div>
        <van-nav-bar title="购物车" left-arrow @click-left="router.back()" />
        <div class="text-[green]">文字</div>
    </div>
</template>
  
  