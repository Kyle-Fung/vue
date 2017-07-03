 <template>
   <div id="tmpl">
       <div class="title" >
           <h4 v-text="info.title"></h4>
           <span>{{info.add_time | datafmt("YYYY-MM-DD")}}  {{info.click}}次浏览</span>
       </div>
       <div class="content" v-html="info.content">
            
       </div>
   </div>
 </template>


 <script>
    import { Toast } from 'mint-ui';

    export default {
        data(){
            return{
                id:0,
                info:{}
            }
        },
        created(){
            this.id = this.$route.params.id
            this.getinfo();
        },
        methods:{
            getinfo(){
                var url = 'http://www.lovegf.cn:8899/api/getnew/'+this.id;
                this.$http.get(url).then(function(res){
                    var body = res.body;
                    if(body.status != 0){
                        Toast(body.message);
                        return;
                    }
                    this.info = body.message[0];
                })
            }
        }
        
    }
 </script>


 <style scoped>
    .title,.content{
        padding: 5px;
    }
    .title h4{
        color: #0094ff;
    }
    .title span{
        color: rgba(0,0,0,0.3);
        font-size: 12px;
    }
 </style>
 
 
     