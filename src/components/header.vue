<template>
    <van-icon name="arrow-left" class="icon" />
    <header>
        <div>{{ title }}</div>
    </header>
</template>

<script setup>

    const props = defineProps({
        title:{
            type:String
        }
    })
</script>

<style scoped>
header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;
}
header .edit {
      font-size: 16px;
      position: absolute;
      right: 15px;
      font-weight: normal;
}
.icon {
      position: absolute;
      left: 10px;
      line-height: 40px;
    }
.storeDetails {
      height: 100%;
      display: flex;
      flex-flow: column;
    }
.content {
        flex: 1;
        overflow-y: auto;
      }
.content .img {
            background: url("../../assets/yuna.jpg") no-repeat center/cover;
            width: 100%;
            height: 150px;
        }
.foodSort {
          height: 500px;
          background-color: #fff;
          margin-top: -30px;
          border-radius: 20px 20px 0 0;

          .sort {
            margin-top: 10px;
          }
          .name {
            display: flex;
            padding: 20px;
            justify-content: space-between;
            .store-img {
              width: 80px;
              height: 80px;
              border-radius: 10px;
              margin-top: -30px;
            }
          }
        }
</style>