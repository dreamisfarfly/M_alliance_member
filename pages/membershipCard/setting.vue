<template>
  <!-- start setting -->
  <view class="setting">
    <Menu :menuList="menuList" spaceBetween="34rpx" :iconSize="iconSize" :separator="true"></Menu>
  </view>
  <!-- end setting -->
</template>

<script>
import Menu from "../../components/menu/menu.vue";
export default {
  components: { Menu },
  data() {
    return {
        menuList: [
            {
                icon: '/static/images/lock-on-icon.png',
                name: '密码管理',
                path: '/pages/membershipCard/settingPassword'
            },
            {
                icon: '/static/images/mobile-icon.png',
                name: '手机绑定',
                path: '/pages/membershipCard/mobilePhoneBinding'
            }
        ],
        iconSize: {
            width: '40rpx',
            height: '40rpx'
        }
    };
  },
  mounted() {
    var a = document.getElementsByClassName("uni-page-head-hd")[0];
    a.style.opacity = 0;
  },
};
</script>

<style scoped lang="scss">
.setting {
  padding: 0 30rpx;
  padding-top: 20rpx;
  box-sizing: border-box;
}
</style>
