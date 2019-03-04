<template>
  <div>
		<towtop></towtop>
		<div class="pswBox">
      <div id="app" class="outBox f-cf">
        <div class="u-op ">
          <div class="m-title">修改密码</div>
          <div class="m-op-box">    
            <div class="m-vfAccount m-center">   
              <!-- 输入手机号 -->
              <div class="u-tip">请输入的手机号</div>     
              <div class="w-ipt">           
                <div class="m-suggest" >
                  <div class="u-ipt ">
                    <div class="ipt_wrap">
                      <input type="text" @blur="phoneBlur" v-model="phone" spellcheck="false" name="" placeholder="手机号码" class="ipt_input ipt_input_large ipt_input-success" maxlength="11" autocomplete="off">
                      <div class="ipt_extend">
                        <i class="i-icon i-icon-delete" style="display: none;"></i>
                      </div>
                    </div>
                    <div class="ipt_tip " v-show="phoneShow">
                      <!-- {{phoneCont}} -->
                      请输入正确的手机号
                    </div>
                  </div>
                </div>         
              </div>
               <!-- 原密码 -->
              <div class="u-tip">请输入原密码</div>     
              <div class="w-ipt">           
                <div class="m-suggest">
                  <div class="u-ipt ">
                    <div class="ipt_wrap">
                      <input type="password"  v-model="oldPassword" spellcheck="false"  placeholder="填入原密码" class="ipt_input ipt_input_large ipt_input-success" maxlength="20" autocomplete="off">
                      <div class="ipt_extend">
                        <i class="i-icon i-icon-delete" style="display: none;"></i>
                      </div>
                    </div>
                    <div class="ipt_tip">
                      
                    </div>
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
                    
                    <div class="ipt_tip" v-show="passwordShow">
                      密码必须含有字母和数字，且长度在8-20之间
                    </div>
                  </div>
                </div>         
              </div>
              <!-- 确认新密码 -->
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
                    
                    <div class="ipt_tip" v-show="password1Show">
                      两次密码不匹配
                    </div>
                  </div>
                </div>         
              </div>

              <div class="w-btn">      
                <div class="u-btn ">
                  <button @click="UpdatePdByPhone" class="">修改密码</button>
                </div>  
                <div class="ipt_tip ipt_tip-success" :class="{successColor:update,failColor:!update}" v-show="updateShow">
                  {{updateMsg}}
                </div>  
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
      oldPassword : "",
      password : "",
      password1: "",
      phoneShow : false,
      passwordShow : false,
      password1Show : false,
      updateShow : true,
      updateMsg : '',
      update : true
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
    // 通过手机号判断密码是否存在和修改密码
    UpdatePdByPhone:function(){
      var that = this;
      if(!(/^1[34578]\d{9}$/.test(that.phone))){
        that.phoneShow = true;
      }else if(!(/^(?=.*[a-z])(?=.*\d)[^]{8,20}$/.test(that.password))){
        that.passwordShow = true;
      }else if(that.password !== that.password1){
        that.password1Show = true;
      }else{
        var data = {
          'phone':that.phone,
          'password':that.oldPassword
        }
        let token = that.$util.getCookie('token')
        that.$request.post('exitPwByPhone',data,token).then(function(res) {
          if(res.data.success == '密码校验成功'){
            var data1 = {
                  phone: that.phone,
                  password: that.password,
                };
            that.$request.post("UpdatePdByPhone",data1,token).then(function(res) {
              if(res.data.success == "密码修改成功") {
                  that.updateShow = true;
                  that.updateMsg = '密码修改成功';
                  that.$router.push({
                    path:'/personInfo',
                  })
                }else{
                  that.updateShow = true;
                  that.updateMsg = '密码修改失败';
                  that.update = false;
                }
            }).catch(function(error) {
              that.updateShow = true;
              that.updateMsg = '密码重置失败'
              that.update = false;
            });
          }else {
            that.updateShow = true;
            that.updateMsg = '原密码校验失败';
            that.update = false;
          }
        }).catch(function(error) {
          that.updateShow = true;
          that.updateMsg = '原密码校验失败';
          that.update = false;
        });
      }
    },
    
  }
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
  color: red;
  word-wrap: break-word;
  word-break: break-all;
}
.ipt_tip-success {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  
}
.successColor{
  color: green
}
.failColor{
  color: red;
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
  width: 102px;
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
  line-height: 44px;
  border: 1px solid #2c82ff;
  border-radius: 2px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  background-color: #2c82ff;
  color: #fff;
}
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

</style>