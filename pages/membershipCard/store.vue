<template>
  <!-- start 店铺 -->
  <view>
    <!-- start store-header -->
    <view class="store-header">
      <img
        src="/static/images/purchase-card-voucher-bak.png"
        class="store-header-img"
      />
      <view class="store-header-hazy-layer"></view>
    </view>
    <!-- end store-header -->
    <!-- start store-content -->
    <view class="store-content">
      <!-- start store-card -->
      <view class="store-card">
        <!-- start store-card-info -->
        <view class="store-card-info">
          <img src="/static/images/coupon-code-icon.png" class="store-icon" />
          <view class="info">
            <view class="justify-align">
              <view class="store-name">前吉kengee（九封店）</view>
              <img
                src="/static/images/not-collect-icon.png"
                class="collect-icon"
              />
            </view>
            <view class="score-info">
              <score :evaluationScore="4" />
              <text class="score-count">4.9分</text>
            </view>
            <view class="type-info">
              <view class="type-name">面包｜西点</view>
              <view class="popularity"
                >人气值： <text class="popularity-val">10000</text></view
              >
            </view>
          </view>
        </view>
        <!-- end store-card-info -->
        <!-- start site-info -->
        <view class="justify-align site-info">
          <view class="site">
            <view class="site-name">
              <img src="/static/images/location-icon.png" class="site-icon" />
              五一路五一路398号
            </view>
            <view class="distance">距离您 >5km</view>
          </view>
          <view class="site-operation">
            <img
              src="/static/images/location-big-icon.png"
              class="site-operation-icon"
            />
            <view class="separator"></view>
            <img
              src="/static/images/phone-icon.png"
              class="site-operation-icon"
            />
          </view>
        </view>
        <!-- end site-info -->
        <!-- start subscribe-info -->
        <view class="subscribe-info justify-align">
          <view class="subscribe-info-hint">
            <img
              src="/static/images/time-icon.png"
              class="subscribe-info-hint-icon"
            />
            需要提前24小时预约
          </view>
          <view class="subscribe-btn">预约</view>
        </view>
        <!-- end subscribe-info -->
      </view>
      <!-- end store-card -->
      <!-- start switch-bar -->
      <view class="switch-bar">
        <view
          class="switch-bar-list"
          v-for="(item, key) in switchList"
          @click="selectIndex = key"
          :key="key"
        >
          <view :class="selectIndex == key ? 'selct-list-label' : ''">{{
            item.label
          }}</view>
          <view class="subscript">
            <img
              v-if="selectIndex == key"
              src="/static/images/select-switch-icon.png"
              class="switch-icon"
            />
          </view>
        </view>
      </view>
      <!-- end switch-bar -->
      <!-- start 会员特权 -->
      <template v-if="selectIndex == 0">
        <!-- start 会员折扣 -->
        <view class="privilege">
          <!-- start privilege-list -->
          <view class="privilege-list justify-align">
            <view class="privilege-info">
              <view class="privilege-title">会员折扣：8折 </view>
              <view class="privilege-subheading"
                >会员折扣全场八折，酒水除外</view
              >
            </view>
            <img
              src="/static/images/member-discount-icon.png"
              class="privilege-icon"
            />
          </view>
          <!-- end privilege-list -->
          <!-- start privilege-list -->
          <view class="privilege-list justify-align" style="margin-top: 20rpx">
            <view class="privilege-info">
              <view class="privilege-title">其他特权 </view>
              <view class="privilege-subheading"
                >VIP免费停车； VIP生日特权：赠送生日面一碗；</view
              >
            </view>
            <img
              src="/static/images/other-privileges-icon.png"
              class="privilege-icon"
            />
          </view>
          <!-- end privilege-list -->
        </view>
        <!-- end 会员折扣 -->
        <!-- start 会员优惠券 -->
        <view class="column">
          <view class="column-name">会员优惠券</view>
          <view class="column-content">
            <CouponCard
              scene="couponMembership"
              :coupon="item"
              v-for="(item, key) in couponList"
              :key="key"
            />
          </view>
        </view>
        <!-- end 会员优惠券 -->
        <!-- start 门头照片 -->
        <view class="column">
          <view class="column-name">门头照片</view>
          <view class="column-content">
            <img src="" class="photograph" />
          </view>
        </view>
        <!-- end 门头照片 -->
        <!-- start 门店环境 -->
        <view class="column">
          <view class="column-name">门店环境</view>
          <view class="column-content">
            <img src="" class="photograph" />
          </view>
        </view>
        <!-- end 门店环境 -->
        <!-- start 营业执照 -->
        <view class="column">
          <view class="column-name">营业执照</view>
          <view class="column-content">
            <img src="" class="photograph" />
          </view>
        </view>
        <!-- end 营业执照 -->
      </template>
      <!-- end 会员特权 -->
      <!-- start 用户评价 -->
      <template v-if="selectIndex == 1"></template>
      <!-- end 用户评价 -->
    </view>
    <!-- end store-content -->
  </view>
  <!-- end 店铺 -->
</template>

<script>
import score from "@/components/score/score.vue";
import CouponCard from "@/components/couponCard/couponCard.vue";
export default {
  components: { score, CouponCard },
  data() {
    return {
      couponList: [
        {
          type: 0,
          title: "洁牙卡一次",
          status: 1,
        },
        {
          type: 2,
          title: "10元消费券",
          status: 1,
        },
      ],
      // 选择值
      selectIndex: 0,
      // 切换栏
      switchList: [
        {
          label: "会员特权",
        },
        {
          label: "用户评价",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.store-header {
  width: 100%;
  height: 316rpx;
  position: relative;
  .store-header-img {
    width: 100%;
    height: 100%;
  }
  .store-header-hazy-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20rpx);
  }
}

.store-content {
  position: relative;
  width: 100%;
  margin-top: -64rpx;
  z-index: 666;
  padding: 0 14rpx;
  box-sizing: border-box;
  .store-card {
    margin: 0 16rpx;
    padding: 0rpx 30rpx 26rpx 30rpx;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0 8rpx 16px 0 rgba(108, 119, 128, 0.05);
    border-radius: 28rpx;
    .store-card-info {
      display: flex;
      padding-top: 12rpx;
      .store-icon {
        position: relative;
        margin-top: -24rpx;
        width: 140rpx;
        height: 140rpx;
      }
    }
    .info {
      margin-left: 24rpx;
      flex: 1;
      .store-name {
        font-size: 32rpx;
        font-weight: 500;
        color: #333333;
      }
      .collect-icon {
        width: 52rpx;
        height: 52rpx;
      }
    }
    .score-info {
      margin-top: 12rpx;
      display: flex;
      .score-count {
        margin-left: 22rpx;
        font-size: 20rpx;
        font-weight: 500;
        color: #da9b49;
      }
    }
    .type-info {
      margin-top: 18rpx;
      display: flex;
      align-items: center;
      .type-name {
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
      }
      .popularity {
        margin-left: 70rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
        .popularity-val {
          font-size: 28rpx;
          font-weight: bold;
          color: #da9b49;
        }
      }
    }
  }
  .site-info {
    margin-top: 32rpx;
    .site {
      .site-name {
        font-size: 28tpx;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
        .site-icon {
          width: 20rpx;
          height: 26rpx;
          margin-right: 12rpx;
        }
      }
      .distance {
        margin-top: 2rpx;
        margin-left: 32rpx;
        font-size: 20rpx;
        font-weight: 500;
        color: #da9b49;
      }
    }
    .site-operation {
      display: flex;
      align-items: center;
      .site-operation-icon {
        width: 48rpx;
        height: 48rpx;
      }
      .separator {
        width: 2rpx;
        height: 36rpx;
        opacity: 0.1;
        background: #000000;
        margin: 0 32rpx;
      }
    }
  }
  .subscribe-info {
    margin-top: 36rpx;
    width: 100%;
    background: rgba(220, 174, 98, 0.11);
    border-radius: 16rpx;
    padding: 14rpx 20rpx 16rpx 20rpx;
    box-sizing: border-box;
    .subscribe-info-hint {
      font-size: 24rpx;
      font-weight: 400;
      color: #333333;
      display: flex;
      align-items: center;
      .subscribe-info-hint-icon {
        width: 28rpx;
        height: 28rpx;
        margin-right: 6rpx;
      }
    }
    .subscribe-btn {
      border: 2rpx solid #c78125;
      border-radius: 8rpx;
      font-size: 24rpx;
      font-weight: 500;
      color: #c78125;
      padding: 8rpx 32rpx;
    }
  }
}

.justify-align {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.switch-bar {
  display: flex;
  width: 100%;
  height: 132rpx;
  .switch-bar-list {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    color: #999999;
    margin-right: 88rpx;
    padding-left: 22rpx;
    .subscript {
      margin-top: 6rpx;
      width: 58rpx;
      height: 16rpx;

      .switch-icon {
        width: 100%;
        height: 100%;
      }
    }
    .selct-list-label {
      font-size: 36rpx;
      font-weight: 500;
      color: #333333;
    }
  }
}

.privilege {
  padding: 0 16rpx;
  box-sizing: border-box;
  .privilege-list {
    padding: 26rpx 28rpx 24rpx 32rpx;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
    border-radius: 16rpx;
    .privilege-info {
      .privilege-title {
        font-size: 28rpx;
        font-weight: 500;
        color: #c78125;
      }
      .privilege-subheading {
        margin-top: 2rpx;
        font-size: 10px;
        font-weight: 400;
        color: #999999;
      }
    }
    .privilege-icon {
      width: 72rpx;
      height: 70rpx;
    }
  }
}

.column {
  margin-top: 40rpx;
  width: 100%;
  .column-name {
    padding-left: 16rpx;
    font-size: 28rpx;
    font-weight: 500;
    color: #333333;
  }
  .column-content {
    margin-top: 22rpx;
  }
}

.photograph {
  width: 100%;
  height: 516rpx;
  border-radius: 12rpx;
}
</style>
