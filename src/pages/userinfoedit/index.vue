<script setup>
import { useRouter } from 'vue-router';
import { showDialog } from 'vant';
const router = useRouter();
const userdata = reactive({
    username:'',
    sign:'该用户很懒~',
    password:'',
})

const onSubmit = (values) => {
    if (values.username || values.password) {
        const userInfo = JSON.stringify(localStorage.getItem("userInfo"));
        const newuserdata = {
            username: values.username || userInfo.username,
            sign: values.sign || userInfo.sign,
            password: values.password || userInfo.password,
        }
        localStorage.setItem('userInfo',JSON.stringify(newuserdata));
        showDialog({
            title: '',
            message: '用户信息修改成功！',
        }).then(() => {
            // on close
        });
    } else {
        showDialog({
            title: '',
            message: '请填写用户信息！',
        }).then(() => {
            // on close
        });
    }
}
</script>

<template>
    <van-nav-bar title="" left-arrow @click-left="router.back()" />
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="userdata.username" name="username" label="昵称" placeholder="昵称"
                :rules="[{ required: true, message: '请填写昵称' }]" />
            <van-field v-model="userdata.sign" name="sign" label="个性签名"
                :rules="[{ required: false}]" />
            <van-field v-model="userdata.password" type="password" name="password" label="密码" placeholder="密码"
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
    <van-dialog>
    </van-dialog>
</template>