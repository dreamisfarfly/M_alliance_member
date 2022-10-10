<template>
  <!-- start 适用门店 -->
  <view>
    <!-- start 导航栏 -->
    <u-navbar
      :is-back="false"
      title="（代金券10元）适用门店"
      :background="background"
      title-color="#333333"
      title-size="32"
      :title-bold="true"
      :title-width="400"
    >
    </u-navbar>
    <!-- end 导航栏 -->
    <!-- start store-list-content -->
    <view class="store-list-content">
      <view :style="{ height: swiperHeight }">
        <Classify :classifyList="classifyList">
          <template v-slot:content>
            <ShopCard v-for="(item, key) in 10" :key="key"></ShopCard>
          </template>
        </Classify>
      </view>
    </view>
    <!-- end store-list-content -->
  </view>
  <!-- end 适用门店 -->
</template>

<script>
import Classify from "@/components/classify/classify.vue";
import ShopCard from "@/components/shopCard/shopCard.vue";
export default {
  components: { Classify, ShopCard },
  data() {
    return {
      // 导航栏背景
      background: {
        backgroundColor: "#FFFFFF",
      },
      swiperHeight: '',
      // 分类列表
      classifyList: [
        {
          id: 0,
          name: "全部",
        },
        {
          id: 1,
          name: "餐饮",
        },
        {
          id: 2,
          name: "住宿",
        },
        {
          id: 3,
          name: "生活",
        },
        {
          id: 4,
          name: "医疗医疗",
        },
        {
          id: 7,
          name: "xx",
        },
      ],
    };
  },
  mounted() {
    let that = this;
    uni.getSystemInfo({
      success: (resu) => {
        // resu 可以获取当前屏幕的高度
        const query = uni.createSelectorQuery();
        query.select(".store-list-content").boundingClientRect();
        query.exec((res) => {
          that.swiperHeight = resu.windowHeight - res[0].top + "px"; //屏幕的高度减去当前swiper距离顶部的高度就是剩余屏幕的高度 然后动态赋值给swiper
          console.log("页面的剩余高度", res[0].top);
          console.log(res)
        });
      },
      fail: (res) => {},
    });
  },
};
</script>

<style lang="less" scoped></style>
