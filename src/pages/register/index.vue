<script setup>
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
const router = useRouter();

const userData = reactive({
    username: "",
    password: "",
})

const onSubmit = (values) => {
    console.log(values)
    if (localStorage.userInfo) {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (values.username === userInfo.username) {
            showToast('用户名已存在');
            return
        }
    } else {
        register(values);
    }
}

const register = (values) => {
    localStorage.setItem("userInfo", JSON.stringify(values));
    showToast('注册成功！');
}

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
                注册
            </van-button>
            <van-button round block type="primary" style="margin-top: 1rem;" @click="router.push('/login')">
                去登入
            </van-button>
        </div>
    </van-form>

</template>