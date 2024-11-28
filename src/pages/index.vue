<template>
  <div class="home">
    <div class="content">
      <header>
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span>jason课程</span>
          <van-icon name="arrow" />
        </div>
      </header>
      <main>
        <div class="main-bg">
          <div class="search">
              <van-search
                v-model="value"
                shape="round"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
              >
                <template #action>
                  <div @click="onClickButton" class="search-button">搜索</div>
                </template>
              </van-search>
          </div>
          <div class="sort">
            <div class="big-sort">
              <div v-for="(item,index) in data.big_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
            <div class="small-sort">
              <div v-for="(item,index) in data.small_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
          </div>
          <van-tabs v-model:active="active" class="van-tabs">
            <van-tab v-for="(item,index) in data.centent_nav_list" :title="item.tab" :key="index">
              <NavList :NavList="item.data"></NavList>
            </van-tab>
          </van-tabs>
        </div>
        
      </main>
    </div>
  </div>

</template>


<script setup lang="ts"> 
    import { ref,reactive  } from 'vue';
    import { showToast } from 'vant';
    import NavList from '~/components/NavList.vue';

    const active = ref(0);

    let data = reactive({
      big_sort: [
        {
          name: "美食",
          icon: "icon-meishi",
        },
        {
          name: "甜点饮品",
          icon: "icon-icon-test",
        },
        {
          name: "超市便利",
          icon: "icon-chaoshishangpin-bian",
        },
        {
          name: "生鲜果蔬",
          icon: "icon-shuiguo",
        },
        {
          name: "买药",
          icon: "icon-maiyao",
        },
      ],
      small_sort: [
        {
          name: "午餐",
          icon: "icon-wucan",
        },
        {
          name: "买酒",
          icon: "icon-jiu",
        },
        {
          name: "新鲜水果",
          icon: "icon-icon-test1",
        },
        {
          name: "汉堡披萨",
          icon: "icon-hanbao",
        },
        {
          name: "休闲饮品",
          icon: "icon-yinpin",
        },
        {
          name: "夜宵",
          icon: "icon-noodle",
        },
        {
          name: "吐司",
          icon: "icon-tusi",
        },
        {
          name: "跑腿",
          icon: "icon-paotui",
        },
        {
          name: "美人佳丽",
          icon: "icon-nv",
        },
        {
          name: "全部分类",
          icon: "icon-fenleiorguangchangorqita",
        },
      ],
      centent_nav_list: [
        {
          tab: "天天神券",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img.zcool.cn/community/01ddfe6219a1bd11013e8cd0684563.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100",
              title: "隆江猪脚饭",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "减配送费",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "点评高分",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "会员满减",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
      ],
    })

    const value = ref('');
    const onSearch = (val:string) => {
      showToast(val)};
    const onClickButton = () =>{ showToast(value.value)
    };

    
</script>

<style scoped>
.home {
  display: flex;
  flex-flow: column;
  height: 100vh;
  font-size: 12px;
}
.content {
  display: flex;
  flex-flow: column;
  flex: 1;
  overflow-y: auto;
}

.content header {
  display: flex;
  background-image: linear-gradient(#ffc400,#fff);
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 40px 20px;
}

.content header .text {
  font-size: 20px;
  font-weight: 600;
}

.content header .location {
  display: flex;
  align-items: center;
}
.content header .location span {
  font-size: 14px;
  margin: 0 5px;
}
main {
  margin-top: -30px;
  height: 100%;
  margin-bottom: 50px;
}
main .main-bg {
  background-image: linear-gradient(#fff,#f5f5f5);
  padding: 10px 20px 0px 20px;
  border-radius: 30px 30px 0 0;
  height: 100%;
}

.van-search {
  position: relative;
  border: 1px solid #ffc400;
  border-radius: 20px;
  padding: 0;
}

/* .van-search .search-button {
  right: 0;
  background-color: #ffc400;
  border-radius: 20px;
  padding-left: 5px;
  margin-right: -7px;
  放弃了~~~~
} */
.sort {
  padding:20px 0 ;
}
.sort .big-sort {
  display: flex;
}
.sort .big-sort div {
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.sort .big-sort div .icon {
  height: 50px;
  width: 50px;
  margin-bottom: 5px;
}
.small-sort {
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
}
.small-sort div{
  display: flex;
  width: 20%;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.small-sort div .icon {
  height: 30px;
  width: 30px;
  margin: 10px;
}
.van-tabs {
padding: 0 20px 10px;
}

   :v-deep .van-tabs__wrap {
  border-radius: 10px;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
