// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 3.0.2 导入路由规则对应的组件对象
import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';



// 3.0.2 定义路由规则
var router1 = new vueRouter({
	linkActiveClass:"mui-active",
	routes:[
		//进入时默认跳转到主页
		{path:'/',redirect:'/home '}, 
		//主页
		{path:'/home',component:home}, 
		//购物车
		{path:'/shopcar',component:shopcar},
		//新闻资讯列表
		{path:'/news/newslist',component:newslist},
		//新闻资讯详情
		{path:'/news/newsinfo/:id',component:newsinfo},
	]
	});

// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';

// 6.0 导入一个当前系统的全局基本样式
import '../statics/css/site.css';

//导入vue-resource
import vueresource from 'vue-resource'
Vue.use(vueresource);

//定义全局日期过滤器
import moment from 'moment'
Vue.filter('datafmt',function(input,fmtstring){
	return moment(input).format(fmtstring);
})

// 7.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});