<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <van-nav-bar title="" left-arrow @click-left="router.back()" />
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="username" name="昵称" label="昵称" placeholder="昵称"
                :rules="[{ required: true, message: '请填写昵称' }]" />
            <van-field v-model="username" name="个性签名" label="个性签名" placeholder="个性签名"
                :rules="[{ required: false, message: '该用户很懒~' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
            <van-button round block type="primary" @click="router.back()" style="margin-top: 1rem;">
                退出登入
            </van-button>
        </div>
    </van-form>

</template>