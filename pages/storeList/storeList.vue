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
      <view style="height:100vh;">
        <Classify :classifyList="classifyList"></Classify>
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
import Classify from "../../components/classify/classify.vue";
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
    };
  },
  components: { Search, Classify },
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

.store-list-content {
    
}
</style>
