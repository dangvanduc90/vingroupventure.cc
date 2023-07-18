<template>
  <!-- <h1>{{ msg }}</h1> -->
  <div class="home-theme-wrapper theme-color1">
    <div id="Login">
      <div class="close">
        <i class="iconfont icon-guanbi"></i>
      </div>
      <div class="logoCont">
        <img
          data-v-f9e44c9e=""
          src="../img/loginLogo.6b54121c.png"
          alt=""
          class="logo"
        />
      </div>
      <div class="middle">
        <div class="login-dialog"></div>
        <form class="van-form" autocomplete="off">
          <div class="van-cell van-field">
            <div class="van-field__left-icon">
              <i class="iconfont icon-wode-wode"></i>
            </div>
            <div
              class="van-cell__value van-cell__value--alone van-field__value"
            >
              <div class="van-field__body">
                <input
                  type="text"
                  name="username"
                  placeholder="Vui lòng tên người dùng/số điện thoại"
                  class="van-field__control"
                  v-model="username"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="van-cell van-field">
            <div class="van-field__left-icon">
              <i class="iconfont icon-mima1"></i>
            </div>
            <div
              class="van-cell__value van-cell__value--alone van-field__value"
            >
              <div class="van-field__body">
                <input
                  :type="passwordText"
                  name="password"
                  placeholder="Vui lòng nhập mật khẩu"
                  class="van-field__control"
                  v-model="password"
                />
                <div
                  class="van-field__right-icon"
                  @click="passwordType(passwordText)"
                >
                  <i class="iconfont icon-yincang"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="forget-pwd">
            <a href="#/deflutService" class=""
              >Quên mật khẩu</a
            >
          </div>
          <div data-v-f9e44c9e="">
            <button
              data-v-f9e44c9e=""
              type="submit"
              class="login-btn van-button van-button--info van-button--normal van-button--block van-button--round"
            >
              <div class="van-button__content">
                <span class="van-button__text"
                  >Đăng nhập ngay lập tức</span
                >
              </div>
            </button>
          </div>
        </form>
      </div>
      <div class="regist">
        <div class="link">
          <router-link class="nav-link" to="/mregister">Đăng ký nhanh</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: function() {
    return {
      passwordText: "password",
      username: "",
      password: "",
    }
  },
  methods:{
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
