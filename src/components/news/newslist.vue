<template>
    <div id = "tmpl">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for = "item in list">
					<router-link v-bind="{to:'/news/newsinfo/'+item.id}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis" v-text="item.zhaiyao"></p>
                            <div class="ft">
                                <span>发表时间：{{item.add_time | datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
                                <span class="click">发表时间：{{item.click}}</span>
                            </div>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>


<script>
    import commom from '../../kits/common.js'
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return{    
                list:[
                    
                ]
            }
        },
        created(){
            this.getnewslist();
        },
        methods:{
            //获取api中的新闻咨询数据
            getnewslist(){
                var url = commom.apidomain+ '/api/getnewslist';
                this.$http.get(url).then(function(res){
                    var body = res.body;
                    if(res.status != 0){
                        Toast(body.message);
                    }
                    this.list = body.message;
                })
            }
        }
    
    }
</script>


<style scoped>
    .mui-table-view-cell img{
        height: 80px;
        width: 80px;
    }
    .mui-table-view .mui-media-object{
        line-height: 80px;
        max-width: 80px;
    }
    .ft{
        margin-top: 1.5em;
        color: #0094ff;
        font-size: 14px;
    }
    .ft .click{
        margin-left: 20px;
    }
</style>

