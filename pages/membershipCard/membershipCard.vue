<template>
  <!-- start 会员卡 -->
  <view>
    <!-- start 会员卡 -->
    <view class="membership-card">
      <!-- start 会员卡头部背景图片 -->
      <img
        class="membership-card-header-bak"
        src="@/static/images/membership-card-header-bak.png"
      />
      <!-- end 会员卡头部背景图片 -->
      <!-- start 会员卡头部内容 -->
      <view class="membership-card-header-content">
        <!-- start 会员卡头部用户信息栏 -->
        <view class="membership-card-header-userinfo">
          <view class="user-info">
            <img class="user-buddha" src="@/static/images/qr-code-icon.png" />
            <text class="user-name">刘小姐</text>
          </view>
          <img class="qr-code-icon" src="@/static/images/qr-code-icon.png" />
        </view>
        <!-- end 会员卡头部用户信息栏 -->
        <!-- start 会员卡头部用户NO -->
        <view class="membership-card-header-no">
          <img class="user-no-bak" src="@/static/images/user-no-bak.png" />
          <view class="user-no-font">NO： 156 9999 8888</view>
        </view>
        <!-- end 会员卡头部用户NO -->
        <view class="membership-card-header-bottom-bak">
          <img
            class="membership-card-header-bottom-icon"
            src="@/static/images/membership-card-header-bottom-bak.png"
          />
          <view class="membership-card-header-bottom-content">
            <!-- start 会员卡头部用户VIP信息 -->
            <view class="membership-card-header-vip-info">
              <view class="user-vip-validity">
                <img
                  class="warning-icon"
                  src="@/static/images/warning-icon.png"
                />
                <text class="vip-validity">有效期至 2022年6月27日</text>
              </view>
              <view class="purchase-upgrade" @click="payUpgrade">付费升级</view>
            </view>
            <!-- end 会员卡头部用户VIP信息 -->
          </view>
        </view>
      </view>
      <!-- end 会员卡头部内容 -->

      <!-- start  菜单内容 -->
      <view class="menu-content">
        <!-- start 菜单展示信息 -->
        <view class="show-message">
          <view class="show-message-list">
            <img
              class="show-message-list-icon"
              src="@/static/images/coupon-icon.png"
            />
            <view class="show-message-list-title">优惠券</view>
            <view class="show-message-list-count">10(张)</view>
          </view>
          <view class="show-message-list">
            <img
              class="show-message-list-icon"
              src="@/static/images/integral-icon.png"
            />
            <view class="show-message-list-title">积分</view>
            <view class="show-message-list-count">1250</view>
          </view>
          <view class="show-message-list">
            <img
              class="show-message-list-icon"
              src="@/static/images/shop-icon.png"
            />
            <view class="show-message-list-title">适用门店</view>
            <view class="show-message-list-count">3(家)</view>
          </view>
        </view>
        <!-- end 菜单展示信息 -->
        <!-- start 菜单 -->
        <Menu style="margin-top: 20rpx" :menuList="menuList1"></Menu>
        <Menu style="margin-top: 20rpx" :menuList="menuList2"></Menu>
        <Menu style="margin-top: 20rpx" :menuList="menuList3"></Menu>
        <!-- end 菜单 -->
      </view>
      <!-- end  菜单内容 -->
    </view>
    <!-- start 会员卡 -->
    <u-tabbar v-model="current" :list="bottomMenuList" inactive-color="#999999" active-color="#C78125" height="110" icon-size="48"></u-tabbar>
  </view>
  <!-- end 会员卡 -->
</template>

<script>
import Menu from "@/components/menu/menu.vue";
export default {
  data() {
    return {
      // 底部菜单列表
      bottomMenuList: [
        {
          iconPath: '/static/images/membership-card-menu-icon.png',
          selectedIconPath: '/static/images/select-membership-card-menu-icon.png',
          text: '会员卡',
        },
        {
          iconPath: '/static/images/shop-list-icon.png',
          selectedIconPath: '/static/images/select-shop-list-icon.png',
          text: '门店列表',
        },
        {
          iconPath: '/static/images/more-discount-icon.png',
          selectedIconPath: '/static/images/select-more-discount-icon.png',
          text: '更多优惠',
        },
        {
          iconPath: '/static/images/message-notification-icon.png',
          selectedIconPath: '/static/images/select-message-notification-icon.png',
          text: '消息通知',
        }
      ],
      // 当前浏览页
      current: 0,
      // 菜单1
      menuList1: [
        {
          icon: "/static/images/promotion-code-icon.png",
          name: "我的推荐码",
          hint: "每推荐2人赠送1年会籍",
        },
      ],
      // 菜单2
      menuList2: [
        {
          icon: "/static/images/expense-calendar-icon.png",
          name: "消费记录",
          hint: "累积消费￥1200.00",
          path: '/pages/membershipCard/expenseCalendar'
        },
        {
          icon: "/static/images/recorded-securities-icon.png",
          name: "用券记录",
          hint: "",
          path: '/pages/membershipCard/recordedSecurities'
        },
        {
          icon: "/static/images/online-mall-icon.png",
          name: "线上商城",
          hint: "品牌折扣 会员专享",
        },
      ],
      // 菜单3
      menuList3: [
        {
          icon: "/static/images/setting-icon.png",
          name: "设置",
          hint: "",
          path: '/pages/membershipCard/setting'
        },
      ],
    };
  },
  methods: {
    // 付费升级
    payUpgrade() {
      uni.navigateTo({
        url: '/pages/membershipCard/purchaseUpgrade'
      })
    }
  },
  components: { Menu },
};
</script>

<style scoped lang="scss">
.membership-card {
  width: 100%;
  height: 600rpx;
  position: relative;

  .membership-card-header-bak {
    width: 100%;
    height: 100%;
  }

  .membership-card-header-content {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;

    .membership-card-header-userinfo {
      margin: 0 50rpx;
      margin-top: 120rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .user-info {
        display: flex;
        align-items: center;

        .user-buddha {
          width: 60rpx;
          height: 60rpx;
          border-radius: 50%;
        }

        .user-name {
          margin-left: 22rpx;
          font-size: 28rpx;
          font-weight: 500;
          color: #ffffff;
        }
      }

      .qr-code-icon {
        width: 15px;
        height: 15px;
      }
    }

    .membership-card-header-no {
      margin: 0 50rpx;
      margin-top: 40rpx;
      box-sizing: border-box;
      position: relative;

      .user-no-bak {
        width: 100%;
        height: 268rpx;
      }

      .user-no-font {
        font-size: 28rpx;
        font-weight: bold;
        color: #ffe4b4;
        position: absolute;
        top: 150rpx;
        left: 48rpx;
      }
    }

    .rounded-background {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30rpx;

      border-radius: 24rpx 24rpx 0 0;
      background: #f9f9f9;
    }

    .membership-card-header-bottom-bak {
      width: 100%;
      height: 330rpx;
      position: absolute;
      left: 0;
      bottom: -120rpx;

      .membership-card-header-bottom-icon {
        width: 100%;
        height: 100%;
      }

      .membership-card-header-bottom-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        .membership-card-header-vip-info {
          margin: 0 32rpx;
          margin-top: 2rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 100rpx;

          .user-vip-validity {
            display: flex;
            align-items: center;

            .warning-icon {
              width: 24rpx;
              height: 24rpx;
            }

            .vip-validity {
              margin-left: 16rpx;
              font-size: 20rpx;
              font-weight: 400;
              color: #ffffff;
            }
          }

          .purchase-upgrade {
            width: 144rpx;
            height: 48rpx;
            background: linear-gradient(270deg, #c9a88b 0%, #996f52 100%);
            box-shadow: inset -1px 1px 1px 0px rgba(255, 255, 255, 0.5);
            border-radius: 8rpx;
            font-size: 24rpx;
            color: #ffffff;
            font-weight: 500;
            line-height: 48rpx;
            text-align: center;
          }
        }
      }
    }
  }
}

.menu-content {
  position: relative;
  bottom: 0rpx;
  top: -40rpx;
  width: 100%;
  height: auto;
  padding: 0 30rpx;
  padding-top: 30rpx;
  padding-bottom: 120rpx;
  background: #f9f9f9;
  box-sizing: border-box;
  border-radius: 24rpx;

  .show-message {
    height: 160rpx;
    background: #ffffff;
    box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
    border-radius: 16rpx;
    display: flex;

    .show-message-list {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .show-message-list-icon {
        width: 56rpx;
        height: 56rpx;
      }

      .show-message-list-title {
        font-size: 24rpx;
        font-weight: 400;
        color: #333333;
        margin: 8rpx 0;
      }

      .show-message-list-count {
        font-size: 24rx;
        font-weight: 500;
        color: #c78125;
      }
    }
  }
}
</style>
