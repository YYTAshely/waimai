<script setup>
import { showDialog } from 'vant';

showDialog({
    title: '标题',
    message: '代码是写出来给人看的，附带能在机器上运行。',
    theme: 'round-button',
}).then(() => {
    // on close
});

showDialog({
    message: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
    theme: 'round-button',
}).then(() => {
    // on close
});
const show = ref(true);
</script>

<template>
    <van-dialog>
    </van-dialog>
    <div>woye1

    </div>
</template>