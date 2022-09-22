<template>
  <!-- start 我的卡券 -->
  <view class="my-card-voucher">
    <!-- start 切换栏 -->
    <u-tabs-swiper
      inactive-color="#999999"
      active-color="#333333"
      :bar-style="tableBarStyle"
      ref="tabs"
      :list="tabMenu"
      :is-scroll="false"
      bar-height="6"
      bar-width="54"
      font-size="28"
      :current="swiperCurrent"
      @change="tabsChange"
    >
    </u-tabs-swiper>
    <!-- start 切换栏 -->
    <!-- start my-card-voucher -->
    <!-- end my-card-voucher -->
  </view>
  <!-- end 我的卡券 -->
</template>

<script>
export default {
  data() {
    return {
      // tab栏滑块样式
      tableBarStyle: {
        background: "linear-gradient(270deg, #D99A48 0%, #F5C684 100%)",
      },
      // 选项卡标题
      tabMenu: [
        {
          name: "我的优惠券",
        },
        {
          name: "购买卡券",
        },
      ],
      //  swiper组件的current值
      swiperCurrent: 0,
    };
  },
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;
  },
  methods: {
    // tabs通知swiper切换
    tabsChange(index) {
      this.swiperCurrent = index;
    },
  },
};
</script>

<style lang="less" scoped></style>
