<template>
  <!-- start classify -->
  <view class="classify">
    <!-- start classify-menu -->
    <view class="classify-menu">
      <!-- start classify-menu-list -->
      <view
        class="classify-menu-list"
        v-for="(item, key) in classifyList"
        :key="key"
      >
        <view
          class="list-vessel"
          :class="verifySelectListVal(item.id) ? 'select-vessel' : ''"
          @click="selectListVal(item.id)"
        >
          {{ item.name }}
          <img
            v-if="!verifySelectListVal(item.id) && null != item.children"
            src="/static/images/not-bottom-icon.png"
            class="classify-menu-list-icon"
          />
          <img
            v-if="verifySelectListVal(item.id) && null != item.children"
            src="/static/images/select-bottom-icon.png"
            class="classify-menu-list-icon"
          />
        </view>
        <view
          class="children-vessel"
          v-if="verifySelectListVal(item.id) && null != item.children"
        >
          <view
            v-for="(items, keys) in item.children"
            :key="keys"
            :class="
              verifySelectListVal(items.id) ? 'select-children-vessel-list' : ''
            "
            class="children-vessel-list"
            @click.stop="selectListVal(items.id, 2)"
            >{{ items.name }}</view
          >
        </view>
      </view>
      <!-- end classify-menu-list -->
    </view>
    <!-- end classify-menu -->
    <view class="classify-content">
        <slot name="content"></slot>
    </view>
  </view>
  <!-- end classify -->
</template>

<script>
export default {
  data() {
    return {
      // 选择
      selectIndex: 0,
      // 选择值
      selectVal: "",
    };
  },
  props: {
    // 菜单列表
    classifyList: {
      typeof: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    // 选择
    selectListVal(id, hierarchy = 1) {
      if (hierarchy == 1) {
        this.selectVal = id;
      } else {
        let _str = "" + this.selectVal;
        let strArr = _str.split("|");
        let arr = strArr.slice(0,hierarchy-1);
        this.selectVal = '';
        arr.push(id);
        for (let i = 0; i < arr.length; i++) {
            if(i == 0){
                this.selectVal += arr[i]
            }else{
                this.selectVal += ('|'+arr[i])
            }
        }
      }
      this.selectIndex = id;
    },
    // 选择
    verifySelectListVal(id) {
      let str = "" + this.selectVal;
      if (str == "") {
        return false;
      }
      let strArr = str.split("|");
      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == id) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style lang="less" scoped>
.classify {
  width: 100%;
  height: 100%;
  display: flex;
  .classify-menu {
    width: 160rpx;
    height: 100%;
    background: #efefef;
    box-shadow: inset 0 -2rpx 0 0 rgba(229, 229, 229, 0.5);
    .classify-menu-list {
      .select-vessel {
        color: #c78125 !important;
        background: #ffffff;
      }
      .list-vessel {
        width: 100%;
        height: 80rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
        .classify-menu-list-icon {
          margin-left: 10rpx;
          width: 14rpx;
          height: 10rpx;
        }
      }
      .children-vessel {
        .children-vessel-list {
          width: 100%;
          height: 80rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28rpx;
          font-weight: 400;
          color: #333333;
          background: #ffffff;
          opacity: 0.68;
        }
        .select-children-vessel-list {
          color: #c78125 !important;
        }
      }
    }
  }
  .classify-content{
    flex: 1;
    padding: 0 30rpx;
    box-sizing: border-box;
  }
}
</style>
