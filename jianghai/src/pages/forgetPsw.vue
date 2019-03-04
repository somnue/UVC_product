<template>
  <div>
		<towtop></towtop>
		<div class="pswBox">
      <div id="app" class="outBox f-cf">
        <div class="u-op ">
          <div class="m-title">忘记密码</div>
          <div class="m-op-box">    
            <div class="m-vfAccount m-center">      
              <div class="u-tip">请输入要重置密码的手机号</div>     
              <div class="w-ipt">           
                <div class="m-suggest" >
                  <div class="u-ipt ">
                    <div class="ipt_wrap">
                      <input type="text" @blur="phoneBlur" v-model="phone" spellcheck="false" name="" placeholder="手机号码" class="ipt_input ipt_input_large ipt_input-success" maxlength="11" autocomplete="off">
                      <div class="ipt_extend">
                        <i class="i-icon i-icon-delete" style="display: none;"></i>
                      </div>
                    </div>
                    
                    <div class="ipt_tip tipFailed"  v-show="phoneShow">
                      <!-- {{phoneCont}} -->
                      请输入正确的手机号
                    </div>
                  </div>
                </div>         
              </div>
              <!-- 短信验证码 -->
              <div class="u-tip">点击获取验证码，短信将发送至您的手机</div>
              <div class="m-suggest">     
                <div class="u-ipt ipt-sms">        
                  <div class="u-ipt ">
                    <div class="ipt_wrap">
                      <input type="text" v-model="code" spellcheck="false" name="" placeholder="输入短信验证码" class="ipt_input ipt_input_small ipt_input-" maxlength="6" autocomplete="off">
                      <div class="ipt_extend">
                        <i class="i-icon i-icon-delete" style="display: none;"></i>
                      </div>
                    </div>
                    <div class="u-btn-sms">
                      <button v-show="sendAuthCode" @click.stop='sendSms'>获取验证码</button>
                      <button v-show="!sendAuthCode" type="button" >{{auth_time}}秒后重新发送验证码</button>
                    </div>
                    <div class="ipt_tip "  v-bind:class = "{tipSuccess:msgColor , tipFailed:!msgColor}" >{{codeMsg}}</div>
                  </div>           
                </div>                   
              </div>
              <!-- 新密码 -->
              <div class="u-tip">请输入新密码</div>     
              <div class="w-ipt">           
                <div class="m-suggest">
                  <div class="u-ipt ">
                    <div class="ipt_wrap">
                      <input type="password" @blur="pswBlur" v-model="password" spellcheck="false" name="" placeholder="填入新密码" class="ipt_input ipt_input_large ipt_input-success" maxlength="20" autocomplete="off">
                      <div class="ipt_extend">
                        <i class="i-icon i-icon-delete" style="display: none;"></i>
                      </div>
                    </div>
                    
                    <div class="ipt_tip tipFailed" v-show="passwordShow">
                      密码必须含有字母和数字，且长度在8-20之间
                    </div>
                  </div>
                </div>         
              </div>
              <!-- 新密码 -->
              <div class="u-tip">请再次输入新密码</div>     
              <div class="w-ipt">           
                <div class="m-suggest">
                  <div class="u-ipt ">
                    <div class="ipt_wrap">
                      <input type="password" @blur="psw1Blur" v-model="password1" spellcheck="false" name="" placeholder="再次填入新密码" class="ipt_input ipt_input_large ipt_input-success" maxlength="20" autocomplete="off">
                      <div class="ipt_extend">
                        <i class="i-icon i-icon-delete" style="display: none;"></i>
                      </div>
                    </div>
                    <div class="ipt_tip tipFailed" v-show="password1Show">
                      两次密码不匹配
                    </div>
                  </div>
                </div>         
              </div>
              <div class="u-btn ">
                <button @click="forgrtPsw" class="btn btn-primary" :disabled="btnDis" :class="{disStyle:btnDis,canStyle:!btnDis}">提交</button>
              </div>    
              <div v-show="SubmitShow" class="btnTip"  :class = "{tipSuccess:tipColor , tipFailed:!tipColor}">      
                  {{SubmitMsg}} 
              </div> 
            </div>
          </div>
        </div>
      </div>
		</div>
    
		<towbottom></towbottom>
  </div>
</template>
<script>
import towtop from "@/components/testTop";
import towbottom from "@/components/testBottom";
export default {
  data() {
    return {
      phone: "",
      code : "",
      password : "",
      password1: "",
      sendAuthCode:true,/* 布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
      auth_time: 0, /* 倒计时 计数器 */
      codeMsg : '',
      msgColor : false, // 短信提示字体颜色
      phoneShow : false,
      passwordShow : false,
      password1Show : false,
      SubmitShow : false,
      SubmitMsg : "密码重置成功",
      dialogVisible: false,
      tipColor : false,// 提交提示字体颜色
      btnDis : false,
    };
  },
  created() {},
  components: {
    towtop,
    towbottom
  },
  methods: {
    phoneBlur:function(){
      if(!(/^1[34578]\d{9}$/.test(this.phone))){
        this.phoneShow = true;
      }else {
        this.phoneShow = false
      }
    },
    pswBlur:function(){
      if(!(/^(?=.*[a-z])(?=.*\d)[^]{8,20}$/.test(this.password))){
        this.passwordShow = true;
      }else {
        this.passwordShow = false;
      }
    },
    psw1Blur:function(){
      if(this.password !== this.password1){
        this.password1Show = true;
      }else{
        this.password1Show = false;
      }
    },
    // 获取短信验证码
    sendSms:function(){
      var that = this;
      if((/^1[34578]\d{9}$/.test(this.phone))){
        that.sendAuthCode = false;
        that.auth_time = 60;
        var auth_timetimer =  setInterval(()=>{
            that.auth_time--;
            if(that.auth_time<=0){
                that.sendAuthCode = true;
                clearInterval(auth_timetimer);
            }
        }, 1000);
        var data = {
          'phone':that.phone
        }
        that.$request.post('sendSms',data).then(function(res) {
          console.log(res)
          if(res.data.success == '发送成功'){
            that.msgColor = true
            that.codeMsg = '短信发送成功';
          }
        }).catch(function(error) {
            that.msgColor = false
            that.codeMsg = '短信发送失败';
        });
      }else{
        that.phoneShow = true;
      }
    },
    // 忘记密码修改
    forgrtPsw: function() {
      var that = this;
      if(!(/^1[34578]\d{9}$/.test(this.phone))){
        this.phoneShow = true;
        return;
      }else {
        this.phoneShow = false
      }
      if(!(/^(?=.*[a-z])(?=.*\d)[^]{8,20}$/.test(this.password))){
        this.passwordShow = true;
        return;
      }else {
        this.passwordShow = false;
      }
      if(this.password !== this.password1){
        this.password1Show = true;
        return;
      }else{
        this.password1Show = false;
      }
      var data = {
        phone: that.phone,
        password: that.password,
        code: that.code
      };
      that.btnDis = true
      that.$request.post("forgotPassword", data).then(function(res) {
        if(res.data.success == "密码重置成功") {
          that.SubmitShow = true;
          that.SubmitMsg = '密码重置成功';
          that.tipColor = true;
          setTimeout(function(){
            that.$router.push({
              path:'/login',
            })
          },2000)
          
        }else {
          that.SubmitShow = true;
          that.SubmitMsg = '密码重置失败';
          that.tipColor = false;
          that.btnDis = false
        }
      }).catch(function(error) {
        that.btnDis = false
        console.log(error);
      });
    }
  },
  
   
};
</script>

<style scoped>
.outBox {
  display: block;
  position: relative;
  margin: 90px auto 89px;
  width: 1100px;
  min-height: 680px;
  /* background-color: #f9f9f9; */
}
.u-op .m-title {
  display: block;
  /* height: 40px; */
  padding: 40px;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  background: #fff;
}
.u-op .m-op-box {
  min-height: 440px;
  padding: 60px 0;
  background: #fff;
}
.m-center {
  width: 340px;
  margin: 0 auto;
}

.m-vfAccount {
  width: 340px;
  margin: 0 auto;
}
.u-tip {
  line-height: 20px;
  padding-bottom: 9px;
  font-size: 14px;
}
.m-suggest {
  position: relative;
  z-index: 89;
}

.m-suggest .u-ipt {
  display: block;
  width: 340px;
  height: 67px;
}

.m-suggest .u-ipt .ipt_wrap {
  display: block;
  height: 42px;
  overflow: hidden;
}
.u-ipt,.u-ipt .ipt_wrap {
  display: inline-block;
  position: relative;
}

.m-suggest .u-ipt .ipt_input_large {
  height: 42px;
  width: 340px;
}
.m-suggest .u-ipt .ipt_input {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.u-ipt .ipt_wrap .ipt_extend {
  top: 11px;
}
.u-ipt .ipt_extend {
  position: absolute;
  top: 12px;
  right: 2px;
  background: #fff;
}
.u-ipt .ipt_tip {
    font-size: 12px;
    line-height: 22px;
    min-height: 24px;
    text-align: left;
    word-wrap: break-word;
    word-break: break-all;
}
.tipSuccess {
  color: rgb(45, 168, 14);
}
.tipFailed {
  color: rgb(224, 43, 11);
}
.u-ipt .ipt_extend>i {
    margin-right: 12px;
    cursor: pointer;
}

.i-icon-delete {
    background-position: 0 -55px;
    width: 20px;
    height: 20px;
}
.i-icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url(/naq/findPassword/pub/img/sprite.adfc74b….png);
}
.u-btn-sms {
  position: initial;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  top: 0;
  right: 0;
}
.u-btn-sms>button{
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
  width: 100px;
  background-color: #48a4ff;
  border: 1px solid #48a4ff;
  color: #fff;
  font-size: 14px;
  height: 42px;
  line-height: 42px;
}

.u-btn>button {
  width: 340px;
  height: 44px;
  /* line-height: 44px; */
  border-radius: 2px;
  text-align: center;
  font-size: 18px;
  /* cursor: pointer; */
  color: #fff;
  border: 1px solid #48a4ff;
  background-color: #48a4ff;
}
/* .canStyle{
  
} */
/* .disStyle{
  border: 1px solid #0c0aa3;
  background-color: #0c0aa3;
} */
.m-verify .m-ipt {
    display: block;
    position: relative;
    width: 340px;
    margin-top: 8px;
}
.m-ipt.ipt-sms .ipt_wrap {
    margin-right: 112px;
}
.m-ipt .u-ipt .ipt_input_small {
    width: 228px;
}
.m-ipt .u-ipt .ipt_input {
    font-size: 12px;
    line-height: 1.8em;
    background-color: #fff;
}

.u-ipt .ipt_input_small {
    width: 212px;
}
.u-ipt .ipt_input {
    width: 228px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding-left: 12px;
}
input {
    width: 225px;
    height: 30px;
    padding-left: 0;
    color: #333;
    border: none;
    font-size: 14px;
    line-height: 30px;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    -webkit-appearance: none;
}
.btnTip{
  line-height: 40px;
  text-align: center;
}
</style>