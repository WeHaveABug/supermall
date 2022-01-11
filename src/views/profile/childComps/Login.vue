<template>
  <div id="login">
    <div class="login-top">登录</div>
    <div class="wx">
      <a :href="wx">
        <img src="~assets/img/login/wx.png" alt="" />
        <span>微信登录</span>
      </a>
    </div>
    <div class="line">—</div>
    <div class="other">其他登录方式</div>
    <div class="login-bot">
      <div class="login-bot-item">
        <a :href="qq">
          <img src="~assets/img/login/qq.png" alt="" />
          <div>QQ登录</div>
        </a>
      </div>
      <div class="login-bot-item">
        <a :href="shouji">
          <img src="~assets/img/login/shouji.png" alt="" />
          <div>免密登录</div>
        </a>
      </div>
      <div class="login-bot-item">
        <a :href="user">
          <img src="~assets/img/login/user.png" alt="" />
          <div>账号登录</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      wx: "https://open.weixin.qq.com/sns/explorer_broker?appid=wx4530e35e8a9fc5cd&redirect_uri=https%3A%2F%2Fportal.mogu.com%2Fuser-process%2Ftransition.html%3Fthird%3Dweixin%26platform%3Dwap%26ptp%3D32.LLePO.0.0.9G1yXg2R&response_type=code&scope=snsapi_userinfo&state=TASdpqjt49rysgj&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fitem-detail%2Fnormal.html%3FitemId%3D1k9cg24%26ptp%3D32._mf1_2000_54262.0.0.FasbXoCA%26acm%3D3.mce.1_4_1k9cg24.81644.0-81258-69042.ttmNBsLwRzhZC.sd_119_117-t_ttmNBsLwRzhZC-pos_871-m_8657987-mf_54262_729758-idx_1-mfs_19&connect_redirect=1#wechat_redirect",
      qq: "https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=201293&daid=383&pt_skey_valid=0&style=35&s_url=https%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&sdkp=pcweb&sdkv=v1.0&time=1633950478&loginty=3&h5sig=ynE6SUIr8pdL9hqqaryWjE8VlbBOdfsk7L1vnOzkR28&scope=all&display=mobile&response_type=code&redirect_uri=https%3A%2F%2Fportal.mogu.com%2Fuser-process%2Ftransition.html%3Fthird%3Dqq%26platform%3Dwap%26ptp%3D32.LLePO.0.0.G9VbrAOm&state=TASkikxr5plmf7t&client_id=201293&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fitem-detail%2Fnormal.html%3FitemId%3D1k9cg24%26ptp%3D32._mf1_2000_54262.0.0.FasbXoCA%26acm%3D3.mce.1_4_1k9cg24.81644.0-81258-69042.ttmNBsLwRzhZC.sd_119_117-t_ttmNBsLwRzhZC-pos_871-m_8657987-mf_54262_729758-idx_1-mfs_19",
      shouji:
        "https://h5.mogu.com/user-process/existphone.html?ptp=32.5r0Gvb.0.0.8seD9BAG&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fitem-detail%2Fnormal.html%3FitemId%3D1k9cg24%26ptp%3D32._mf1_2000_54262.0.0.J6OxZviu%26acm%3D3.mce.1_4_1k9cg24.81644.0-81259-69042.1aYwasL8R0Sv8.sd_119_117-t_1aYwasL8R0Sv8-pos_871-m_8657987-mf_54262_729758-idx_1-mfs_19",
      user: "https://h5.mogu.com/user-process/account.html?ptp=32.5r0Gvb.0.0.8seD9BAG&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fitem-detail%2Fnormal.html%3FitemId%3D1k9cg24%26ptp%3D32._mf1_2000_54262.0.0.J6OxZviu%26acm%3D3.mce.1_4_1k9cg24.81644.0-81259-69042.1aYwasL8R0Sv8.sd_119_117-t_1aYwasL8R0Sv8-pos_871-m_8657987-mf_54262_729758-idx_1-mfs_19",
    };
  },
};
</script>

<style>
#login {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.login-top {
  font-size: 25px;
  margin: 80px 0 55px;
}
.wx {
  width: 315px;
  height: 50px;
  line-height: 50px;
  background-color: #09ba07;
  border-radius: 25px;
  margin: 0 auto;
}
.wx img {
  width: 25px;
  height: 20px;
  margin-right: 13px;
}
.wx span {
  color: #fff;
}
.line {
  margin: 75px 0 40px;
}
.other {
  font-size: 12px;
  margin-bottom: 40px;
}
.login-bot {
  display: flex;
  padding: 0 10px;
}
.login-bot-item {
  flex: 1;
}
.login-bot-item img {
  width: 44px;
  height: 44px;
  margin-bottom: 5px;
}
.login-bot-item div {
  font-size: 12px;
}
</style>