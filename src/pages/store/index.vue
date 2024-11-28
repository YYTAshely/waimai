 <template>
     <div class="storeDetails">
        <Header title="店铺"></Header>
        <div class="content">
            <div class="img"></div>
            <div class="footSort">
                <div class="name">
                    {{ title }}
                    <img :src="img" alt="" class="store-img">
                </div>
            </div>
        </div>
     </div>
 </template>

<script setup>
    import Header from '~/components/header.vue';
</script>

<style scoped>
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
        }
.foodSort .sort{
    margin-top: 10px;
}
.foodSort .name{
    display: flex;
    padding: 20px;
    justify-content: space-between;
}
.name .store-img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin-top: -30px;
}
</style>