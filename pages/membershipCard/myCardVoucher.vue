<template>
  <!-- start 我的卡券 -->
  <view>
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
    <view class="my-card-voucher">
      <template v-if="swiperCurrent == 0">
        <!-- strat screen-vessel -->
        <view class="screen-vessel">
          <view class="screen-list"
            >全部类型
            <img
              src="/static/images/not-bottom-icon.png"
              class="screen-list-icon"
            />
          </view>
          <view class="separator"></view>
          <view class="screen-list"
            >已使用
            <img
              src="/static/images/not-bottom-icon.png"
              class="screen-list-icon"
          /></view>
        </view>
        <!-- end screen-vessel -->
        <CouponCard
          scene="myCoupon"
          :coupon="item"
          v-for="(item, key) in couponList"
          :style="{ marginTop: key == 0 ? '12rpx' : '' }"
          :key="key"
        />
      </template>
      <template v-if="swiperCurrent == 1">
        <CouponCard
          scene="listBuy"
          :coupon="item"
          v-for="(item, key) in couponList"
          :style="{ marginTop: key == 0 ? '12rpx' : '' }"
          :key="key"
        />
      </template>
    </view>
    <!-- end my-card-voucher -->
  </view>
  <!-- end 我的卡券 -->
</template>

<script>
import CouponCard from "@/components/couponCard/couponCard.vue";
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
      // 优惠劵列表
      couponList: [
        {
          type: 0,
          title: "洁牙卡一次",
          status: 0,
        },
        {
          type: 1,
          title: "10元消费券",
          status: 1,
        },
        {
          type: 2,
          title: "10元现金券",
          status: 1,
        },
      ],
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
  components: { CouponCard },
};
</script>

<style lang="less" scoped>
.my-card-voucher {
  padding: 0 14rpx;
  box-sizing: border-box;
}

.screen-vessel {
  box-sizing: border-box;
  margin: 0 16rpx;
  margin-top: 20rpx;
  background: #ffffff;
  border-radius: 8rpx;
  height: 80rpx;
  display: flex;
  align-items: center;
  .screen-list {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
    .screen-list-icon {
      margin-left: 20rpx;
      width: 14rpx;
      height: 10rpx;
    }
  }
  .separator {
    width: 2rpx;
    height: 34rpx;
    opacity: 0.05;
    background: #000000;
  }
}
</style>
