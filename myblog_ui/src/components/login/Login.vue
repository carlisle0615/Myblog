<template>
  <el-form
    ref="form"
    :rules="rules"
    class="login-container"
    label-position="left"
    label-width="0px"
    v-loading="loading"
  >
    <h3 class="login_title">登录</h3>
    <el-form-item prop="account">
      <el-input
        v-model="loginForm.username"
        auto-complete="off"
        placeholder="账号"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input
        type="password"
        v-model="loginForm.password"
        auto-complete="off"
        placeholder="密码"
        clearable
      ></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" label-position="left" :indeterminate="false"
      >记住密码</el-checkbox
    >
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%" @click="submitClick"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
      return {
          rule: {
              account: [{required: true, message: '请输入用户名', trigger: 'blur'}],
              checkPass: [{required: true, message: '请输入密码', trigger: 'blur'}]
          },
          checked: false,
          loginForm: {
              username: 'admin',
              password: '123'
          },
          loading: false
          
      }
  },

  methods: {
      submitClick: function() {
          var _this = this
          this.loading = true
          this.postRequest('/login', {
              username: this.loginForm.username,
              password: this.loginForm.password 
          }).then((res) => {
              if (res && res.status == 200) {
                  var data = res.data_this.$store.commit('login', data.obj)
                  var path = _this.$route.query.redirect
                  _this.router.replace({path: path == '/' || path == underfined ? '/home' : path})
              }else {
                  _this.loading = false
              }
          })
      }
  }
};
</script>

<style scoped>
.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}

.login_remember {
    margin: 0px 0px 35px 35px;
    text-align: left;
}
</style>
