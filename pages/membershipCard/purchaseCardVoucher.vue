<template>
  <!-- start 购买卡券 -->
  <view class="purchase-card-voucher">
    <!-- start purchase-card-voucher-icon -->
    <img
      src="/static/images/purchase-card-voucher-bak.png"
      class="purchase-card-voucher-icon"
    />
    <!-- end purchase-card-voucher-icon -->
    <!-- start purchase-card-voucher-content -->
    <view class="purchase-card-voucher-content">
      <CouponCard :coupon="coupon" scene="purchaseCardVoucher" />
      <!-- start content-info -->
      <view class="content-info">
        <!-- start coupon-sell-info -->
        <view class="coupon-sell-info">
          <view class="coupon-info">
            <view class="coupon-info-data">
              <text class="coupon-info-price">¥5元</text>
              或1000积分
            </view>
            <view class="sold-out">已售999</view>
          </view>
          <view class="quantity-info">
            <view class="quantity-info-hint">购买数量</view>
            <Stepper width="200" height="60" v-model="count" />
          </view>
        </view>
        <!-- end coupon-sell-info -->
        <!-- start operate-vessel -->
        <view class="operate-vessel">
          <view class="price-info">
            <text class="total">合计：￥5.00</text>
            <text class="integral">或200积分</text>
          </view>
          <view class="pay-btn">立即支付</view>
        </view>
        <!-- end operate-vessel -->
      </view>
      <!-- end content-info -->
    </view>
    <!-- end purchase-card-voucher-content -->
  </view>
  <!-- end 购买卡券 -->
</template>

<script>
import CouponCard from "@/components/couponCard/couponCard.vue";
import Stepper from "@/components/stepper/stepper.vue";
export default {
  data() {
    return {
      // 优惠劵
      coupon: {
        type: 0,
        title: "洁牙卡一次",
        rule: "通用规则说明通用规则说明通用规则",
        status: 0,
      },
      // 数量
      count: 0,
    };
  },
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;
  },
  components: { CouponCard, Stepper },
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
    .content-info {
      padding: 0 16rpx;
      box-sizing: border-box;
      .coupon-sell-info {
        background: #ffffff;
        box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
        border-radius: 16rpx;
        padding: 40rpx 32rpx 30rpx 30rpx;
        box-sizing: border-box;
        .coupon-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .coupon-info-data {
            font-size: 28rpx;
            font-weight: 500;
            color: #666666;
            .coupon-info-price {
              font-size: 40rpx;
              color: #c78125;
              margin-right: 10rpx;
            }
          }
          .sold-out {
            padding: 8rpx 14rpx 8rpx 16rpx;
            box-sizing: border-box;
            border: 2rpx solid #60b251;
            border-radius: 6rpx;
            font-weight: 500;
            font-size: 20rpx;
            color: #60b251;
          }
        }
        .quantity-info {
          margin-top: 28rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .quantity-info-hint {
            font-size: 24rpx;
            font-weight: 400;
            color: #666666;
          }
        }
      }
      .operate-vessel {
        margin-top: 22rpx;
        background: #ffffff;
        box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
        border-radius: 16rpx;
        padding: 30rpx 30rpx 20rpx 30rpx;
        box-sizing: border-box;
        .price-info {
          display: flex;
          align-items: center;
          justify-content: center;
          .total {
            font-size: 32rpx;
            font-weight: 500;
            color: #c78125;
          }
          .integral {
            margin-left: 28rpx;
            font-size: 24rpx;
            font-weight: 400;
            color: #666666;
          }
        }
        .pay-btn {
          margin-top: 24rpx;
          width: 100%;
          background: #c78125;
          border-radius: 16rpx;
          padding: 18rpx 0;
          font-size: 32rpx;
          font-weight: 600;
          color: #ffffff;
          text-align: center;
        }
      }
    }
  }
}
</style>
