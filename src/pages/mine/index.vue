<script setup>

</script>

<template>
    <van-nav-bar title="我的" left-arrow @click-left="router.back()" />
    <div class="p-4 flex flex-col items-center">
        <div class="w-[90%] h-18 bg-gradient-to-r from-#f8c509 to-#cbc34b flex ">
            <div class="w-20 h-"><img src="../../../public/my/cat.JPG" alt=""></div>
            <div>
                <div>昵称：</div>
                <div>个性签名：</div>
            </div>
        </div>
        <div>
            <van-cell title="我的订单" is-link />
            <van-cell title="地址管理" is-link />
            <van-cell title="账号管理" is-link />
        </div>
    </div>

</template>