<template>
  <!-- start menu -->
  <view class="menu">
    <view class="menu-list" v-for="(item, key) in menuList" :key="key" @click="redirect(item.path)">
      <view
        class="interior-vessel"
        :style="[
          {
            'border-bottom':
              key + 1 != menuList.length && separator
                ? '1px solid rgba(0,0,0,0.1)'
                : '',
          },
          { padding: spaceBetween + ' 0' },
        ]"
      >
        <view class="menu-list-info">
          <img
            class="menu-list-info-icon"
            :style="{ width: iconSize.width, height: iconSize.height }"
            :src="item.icon"
          />
          <text class="menu-list-info-title">{{ item.name }}</text>
        </view>
        <view class="menu-list-operate">
          <text class="menu-list-operate-hint">{{ item.hint }}</text>
          <img
            class="menu-list-operate-icon"
            src="/static/images/right-icon.png"
          />
        </view>
      </view>
    </view>
  </view>
  <!-- end menu -->
</template>

<script>
export default {
  props: {
    // 菜单列表
    menuList: {
      typeof: Array,
      default: function () {
        return [];
      },
    },
    // 上下边距
    spaceBetween: {
      typeof: String,
      default: "22rpx",
    },
    // 菜单图片大小
    iconSize: {
      typeof: Object,
      default: function () {
        return {
          width: "56rpx",
          height: "56rpx",
        };
      },
    },
    // 显示分割符
    separator: {
      typeof: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    // 跳转页面
    redirect(path) {
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  background: #ffffff;
  box-shadow: 0 8rpx 16rpx 0 rgba(108, 119, 128, 0.05);
  border-radius: 16rpx;
  .menu-list {
    box-sizing: border-box;
    padding: 0 30rpx;
    .interior-vessel {
      display: flex;
      justify-content: space-between;
    }

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
