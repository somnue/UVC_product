import Vue from 'vue'
import axios from 'axios';

//有的请求需要用户认证，视情况而定
const getConfig = function(auth) {
	let config = {}
	if(auth) {
		config.headers = {
			"Authorization": auth,
		}
	}
	return config;
}
// const commonUrl = 'http://192.168.6.63:7005/officialWeb-service/user/'; // 测试环境
// const commonUrl = 'http://192.168.6.62:7005/officialWeb-service/user/'; // 测试环境
const commonUrl = 'http://47.105.89.34:7005/officialWeb-service/user/'; // 生产环境


var request = {
	get: function(url) {
		return axios.get(commonUrl + url)
			.then(function(res) {
				return res
			})
			.catch(function(error) {
				return error
				//this.$message.error('亲，网络错误请刷新页面');
			})
	},
	post: function(oUrl, data,token = '') {
		return axios({
			method: 'post',
			url: commonUrl + oUrl,
			data: data,
			headers: {
				// 'Content-Type': 'application/x-www-form-urlencoded',
				// 'Content-Type': 'multipart/form-data'
				"Content-Type": 'application/json;charset=UTF-8',
				"Token":token
			},
		}).then((res) => {
			return res
		}).catch(function(error) {
			return error
			// this.$message.error('亲，网络错误请刷新页面');
		})
	},
	put: function(url, data, auth, success, fail) {
		return axios.put(url, data, getConfig(auth))
			.then(function(res) {
				success(res);
			})
			.catch(function(error) {
				return error
				// this.$message.error('亲，网络错误请刷新页面');
			})
	}
}
export default request;