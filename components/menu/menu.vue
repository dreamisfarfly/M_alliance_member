<template>
  <!-- start menu -->
  <view class="menu">
    <view class="menu-list" v-for="(item, key) in menuList" :key="key">
      <view class="menu-list-info">
        <img
          class="menu-list-info-icon"
          :src="item.icon"
        />
        <text class="menu-list-info-title">{{item.name}}</text>
      </view>
      <view class="menu-list-operate">
        <text class="menu-list-operate-hint">{{item.hint}}</text>
        <img
          class="menu-list-operate-icon"
          src="/static/images/right-icon.png"
        />
      </view>
    </view>
  </view>
  <!-- end menu -->
</template>

<script>
export default {
  props:{
    menuList: {
        typeof: Array,
        default: function(){
            return [];
        }
    }
  },
  data() {
    return {
      
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.menu {
  background: #ffffff;
  box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
  border-radius: 16rpx;
  .menu-list {
    padding: 18rpx 30rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .menu-list-info {
      display: flex;
      align-items: center;

      .menu-list-info-icon {
        width: 56rpx;
        height: 56rpx;
      }

      .menu-list-info-title {
        margin-left: 20rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
      }
    }

    .menu-list-operate {
      display: flex;
      align-items: center;

      .menu-list-operate-hint {
        margin-right: 32rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
      }

      .menu-list-operate-icon {
        width: 14rpx;
        height: 22rpx;
      }
    }
  }
}
</style>
