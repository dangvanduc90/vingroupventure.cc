<template>
  <div class="home-theme-wrapper theme-color1">
    <div id="Register">
      <div class="close"><i class="iconfont icon-guanbi"></i></div>
      <div class="logoCont"><img src="../img/loginLogo.6b54121c.png" alt="" class="logo"></div>
      <div class="middle">
        <div class="login-dialog"></div>
        <form class="van-form">
          <div class="van-cell van-field">
            <div class="van-field__left-icon"><i class="iconfont icon-wode-wode"></i></div>
            <div class="van-cell__value van-cell__value--alone van-field__value">
              <div class="van-field__body">
                <input type="text" name="username" v-model="username"
                  placeholder="Vui lòng nhập kết hợp từ 6-18 chữ số và chữ cái" class="van-field__control">
              </div>
            </div>
          </div>
          <div class="van-cell van-field">
            <div class="van-field__left-icon"><i class="iconfont icon-mima1"></i></div>
            <div class="van-cell__value van-cell__value--alone van-field__value">
              <div class="van-field__body">
                <input :type="passwordText" name="password" placeholder="Vui lòng nhập kết hợp từ 6-18 chữ số và chữ cái"
                  class="van-field__control" v-model="password">
                <div class="van-field__right-icon" @click="passwordType(passwordText)"><i class="iconfont icon-yincang"></i></div>
              </div>
            </div>
          </div>
          <div class="van-cell van-field">
            <div class="van-field__left-icon"><i class="iconfont icon-wode-wode"></i></div>
            <div class="van-cell__value van-cell__value--alone van-field__value">
              <div class="van-field__body">
                <input type="text" name="code" placeholder="Mã mời" class="van-field__control" v-model="code">
              </div>
            </div>
          </div>
          <div data-v-32fa4cd3="">
            <button type="submit"
              class="login-btn van-button van-button--info van-button--normal van-button--block van-button--round">
              <div class="van-button__content"><span class="van-button__text">Đăng ký ngay</span></div>
            </button>
          </div>
        </form>
      </div>
      <div class="regist">
        <router-link class="nav-link" to="/login">Đăng nhập vào tài khoản hiện có</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: function () {
    return {
      passwordText: "password",
      username: "",
      password: "",
      code: "",
    }
  },
  methods: {
    passwordType(passwordText) {
      console.log(passwordText)
      if (passwordText == "password") {
        this.passwordText = "text";
      } else {
        this.passwordText = "password";
      }
    },
  }
};
</script>
