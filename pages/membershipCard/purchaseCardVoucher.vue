<template>
  <!-- start 购买卡券 -->
  <view class="purchase-card-voucher">
    <img
      src="/static/images/purchase-card-voucher-bak.png"
      class="purchase-card-voucher-icon"
    />
    <view class="purchase-card-voucher-content">
      <CouponCard :coupon="coupon" scene="purchaseCardVoucher"/>
    </view>
  </view>
  <!-- end 购买卡券 -->
</template>

<script>
import CouponCard from "@/components/couponCard/couponCard.vue";
export default {
  data() {
    return {
      // 优惠劵
      coupon: {
        type: 0,
        title: "洁牙卡一次",
        rule: '通用规则说明通用规则说明通用规则',
        status: 0
      },
    };
  },
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;
  },
  components: { CouponCard },
};
</script>

<style lang="less" scoped>
.purchase-card-voucher {
  width: 100%;
  height: auto;
  position: relative;
  .purchase-card-voucher-icon {
    width: 100%;
    height: 390rpx;
  }
  .purchase-card-voucher-content {
    position: absolute;
    top: 0;
    left: 0rpx;
    width: 100%;
    padding: 17rpx 0;
    padding-top: 20rpx;
    box-sizing: border-box;
  }
}
</style>
