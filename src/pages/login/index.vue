<script setup>
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
const router = useRouter();
</script>

<template>
    <van-nav-bar title="注册" left-arrow @click-left="router.back()" />
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="userData.username" name="username" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="userData.password" type="password" name="password" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                登入
            </van-button>
            <van-button round block type="primary" style="margin-top: 1rem;" @click="router.push('/register')">
                去注册
            </van-button>
        </div>
    </van-form>
    <van-dialog>
    </van-dialog>
</template>