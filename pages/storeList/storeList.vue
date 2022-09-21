<template>
  <view>
    <!-- start 底部导航 -->
    <u-navbar :is-back="false" title="">
      <view class="slot-wrap">
        <Search
          v-model="searchValue"
          @searchFun="searchFun"
          placeholder="搜索"
        ></Search>
      </view>
    </u-navbar>
    <view>
      <!-- start screen-vessel -->
      <view class="screen-vessel">
        <!-- start screen-vessel-menu -->
        <view class="screen-vessel-menu">
          <!-- start screen-vessel-menu-list -->
          <view
            class="screen-vessel-menu-list"
            v-for="(item, key) in menuList"
            :class="selectIndex == key ? 'select-screen-vessel-menu-list' : ''"
            @click="selectMenu(key)"
            :key="key"
            >{{ item.name }}</view
          >
          <!-- end screen-vessel-menu-list -->
        </view>
        <!-- end screen-vessel-menu -->
        <!-- start screen-vessel-content -->
        <view class="screen-vessel-content">
          <view class="shop-content">
            <!-- start shop-list -->
            <view class="shop-list" v-for="(item, key) in shopList" :key="key">
              <view class="shop-list-info">
                <img src="" class="shop-list-info-icon" />
                <view class="shop-info">
                  <view class="shop-name">长沙山水健康体检中心</view>
                  <view class="shop-discounts"
                    ></view
                  >
                  <view class="shop-member-price"
                    >会员：<text class="yellow-font">180</text></view
                  >
                </view>
              </view>
              <view class="shop-list-operation">
                <view class="shop-list-at">店铺有效期：2023-06-10</view>
                <img
                  v-if="item.status == 0"
                  @click="changeShopStatus(key)"
                  src="/static/images/switch-close-icon.png"
                  class="switch-btn"
                />
                <img
                  v-if="item.status == 1"
                  @click="changeShopStatus(key)"
                  src="/static/images/switch-open-icon.png"
                  class="switch-btn"
                />
              </view>
            </view>
            <!-- end shop-list -->
          </view>
        </view>
        <!-- end screen-vessel-content -->
      </view>
      <!-- end screen-vessel -->
    </view>
    <u-tabbar
      v-model="current"
      :list="bottomMenuList"
      inactive-color="#999999"
      active-color="#C78125"
      height="110"
      icon-size="48"
      countLabelBgColor="#C78125"
      countLabelFontSize="16"
    ></u-tabbar>
    <!-- end 底部导航 -->
  </view>
</template>

<script>
import Search from "@/components/search/search.vue";
export default {
  data() {
    return {
      // 搜索值
      searchValue: "",
      // 底部菜单列表
      bottomMenuList: [
        {
          iconPath: "/static/images/membership-card-menu-icon.png",
          selectedIconPath:
            "/static/images/select-membership-card-menu-icon.png",
          text: "会员卡",
          pagePath: "/pages/membershipCard/membershipCard",
        },
        {
          iconPath: "/static/images/shop-list-icon.png",
          selectedIconPath: "/static/images/select-shop-list-icon.png",
          text: "门店列表",
          pagePath: "/pages/storeList/storeList",
        },
        {
          iconPath: "/static/images/more-discount-icon.png",
          selectedIconPath: "/static/images/select-more-discount-icon.png",
          text: "更多优惠",
          pagePath: "",
        },
        {
          iconPath: "/static/images/message-notification-icon.png",
          selectedIconPath:
            "/static/images/select-message-notification-icon.png",
          text: "消息通知",
          pagePath: "/pages/messageNotification/messageNotification",
          count: 1,
        },
      ],
      // 当前浏览页
      current: 1,
      // 菜单列表
      menuList: [
        {
          name: "全部",
        },
        {
          name: "餐饮",
        },
        {
          name: "住宿",
        },
        {
          name: "生活",
        },
        {
          name: "医疗",
        },
        {
          name: "美食",
        },
        {
          name: "酒吧",
        },
      ],
      // 选中索引
      selectIndex: 0,
      // 店铺列表
      shopList: [
        {
          status: 0,
        },
        {
          status: 1,
        },
      ],
    };
  },
  components: { Search },
  methods: {
    // 搜索
    searchFun() {},
    // 选中菜单
    selectMenu(key) {
      this.selectIndex = key;
    },
  },
};
</script>

<style lang="less" scoped>
.slot-wrap {
  width: 100%;
  height: 100%;
  padding: 8rpx 30rpx;
  background: #ffffff;
  box-sizing: border-box;
}

.screen-vessel {
  margin-top: 100rpx;
  display: flex;
  height: 100vh;
  .screen-vessel-menu {
    width: 160rpx;
    background: #efefef;
    box-shadow: inset 0 -2rpx 0 0 rgba(229, 229, 229, 0.5);
    .screen-vessel-menu-list {
      width: 100%;
      height: 80rpx;
      text-align: center;
      line-height: 80rpx;
      font-size: 28rpx;
      font-weight: 400;
      color: #333333;
    }
    .select-screen-vessel-menu-list {
      font-weight: 500;
      background: #ffffff;
      color: #c78125;
    }
  }
  .screen-vessel-content {
    flex: 1;
    background: #ffffff;
    padding: 0 30rpx;
    .shop-content {
      .shop-list {
        padding: 32rpx 0 24rpx 0;
        box-sizing: border-box;
        border-bottom: 2rpx solid rgba(0, 0, 0, 0.05);
        .shop-list-info {
          display: flex;
          .shop-list-info-icon {
            width: 120rpx;
            height: 120rpx;
          }
          .shop-info {
            margin-left: 20rpx;
            .shop-name {
              font-size: 28rpx;
              font-weight: 500;
              color: #000000;
            }
            .shop-discounts {
              margin-top: 10rpx;
              font-size: 24rpx;
              font-weight: 400;
              color: #999999;
            }
            .shop-member-price {
              margin-top: 8rpx;
              font-size: 12px;
              font-weight: 400;
              color: #999999;
            }
          }
        }
        .shop-list-operation {
          margin-top: 30rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .shop-list-at {
            font-size: 24rpx;
            font-weight: 400;
            color: #666666;
          }
          .switch-btn {
            width: 60rpx;
            height: 32rpx;
          }
        }
      }
    }
  }
}
</style>
