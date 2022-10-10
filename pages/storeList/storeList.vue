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
    <!-- start store-list-content -->
    <view class="store-list-content">
      <!-- start classify-vessel -->
      <view class="classify-vessel">
        <!-- start classify-list -->
        <view class="classify-list">
          <view class="classify-info">
            <img
              src="/static/images/classify-site-icon.png"
              class="classify-icon"
            />
            <view class="classify-content">距离</view>
          </view>
          <img src="/static/images/not-bottom-icon.png" class="reverse-icon" />
        </view>
        <!-- end classify-list -->
        <!-- start separator -->
        <view class="separator"></view>
        <!-- end separator -->
        <!-- start classify-list -->
        <view class="classify-list">
          <view class="classify-info">
            <img
              src="/static/images/classify-site-icon.png"
              class="classify-icon"
            />
            <view class="classify-content">所在地</view>
          </view>
          <img src="/static/images/not-bottom-icon.png" class="reverse-icon" />
        </view>
        <!-- end classify-list -->
        <!-- start separator -->
        <view class="separator"></view>
        <!-- end separator -->
        <!-- start classify-list -->
        <view class="classify-list">
          <view class="classify-info">
            <img
              src="/static/images/classify-evaluate-icon.png"
              class="classify-icon"
            />
            <view class="classify-content">评价</view>
          </view>
          <img src="/static/images/not-bottom-icon.png" class="reverse-icon" />
        </view>
        <!-- end classify-list -->
        <!-- start separator -->
        <view class="separator"></view>
        <!-- end separator -->
        <!-- start classify-list -->
        <view class="classify-list">
          <view class="classify-info">
            <img
              src="/static/images/classify-discount-icon.png"
              class="classify-icon"
            />
            <view class="classify-content">折扣</view>
          </view>
          <img src="/static/images/not-bottom-icon.png" class="reverse-icon" />
        </view>
        <!-- end classify-list -->
      </view>
      <!-- end classify-vessel -->
      <view :style="{height: swiperHeight}" class="menu-vessel">
        <Classify :classifyList="classifyList">
          <template v-slot:content>
            <ShopCard v-for="(item, key) in 10" :key="key"></ShopCard>
          </template>
        </Classify>
      </view>
    </view>
    <!-- end store-list-content -->
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
import Classify from "@/components/classify/classify.vue";
import ShopCard from "@/components/shopCard/shopCard.vue";
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
          children: [
            {
              id: 5,
              name: "生活",
            },
            {
              id: 6,
              name: "生活",
            },
          ],
        },
        {
          id: 7,
          name: "xx",
        },
      ],
      swiperHeight: 0,
    };
  },
  components: { Search, Classify, ShopCard },
  methods: {
    // 搜索
    searchFun() {},
    // 选中菜单
    selectMenu(key) {
      this.selectIndex = key;
    },
  },
  mounted() {
    let that = this;
    uni.getSystemInfo({
      success: (resu) => {
        // resu 可以获取当前屏幕的高度
        const query = uni.createSelectorQuery();
        query.select(".menu-vessel").boundingClientRect();
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

<style lang="less" scoped>
.slot-wrap {
  width: 100%;
  height: 100%;
  padding: 8rpx 30rpx;
  background: #ffffff;
  box-sizing: border-box;
}

.classify-vessel {
  display: flex;
  width: 100%;
  background: #f3f3f3;
  align-items: center;
  .separator {
    width: 2rpx;
    height: 34rpx;
    opacity: 0.05;
    background: #000000;
  }
  .classify-list {
    flex: 1;
    padding: 34rpx 20rpx 26rpx 16rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .classify-info {
      flex: 1;
      display: flex;
      align-items: center;
      .classify-content {
        flex: 1;
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
      }
      .classify-icon {
        width: 32rpx;
        height: 32rpx;
        margin-right: 4rpx;
      }
    }
    .reverse-icon {
      width: 14rpx;
      height: 10rpx;
    }
  }
}
</style>
