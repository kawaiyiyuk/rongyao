<template>
    <div id="home">
    	<div id="slideBox" class="slideBox">
				<div class="bd">
					<ul>
							<li>
								<a class="pic" href="#">
                                    <img src="http://rong-yao.oss-cn-shanghai.aliyuncs.com/1498700791.jpg" >
                                </a>
								
							</li>
							<li>
								<a class="pic" href="#">
                                    <img src="http://rong-yao.oss-cn-shanghai.aliyuncs.com/1498788036.jpg">
                                </a>
								
							</li>
							<li>
								<a class="pic" href="#">
                                    <img src="http://rong-yao.oss-cn-shanghai.aliyuncs.com/1498788879.jpg">
                                </a>
								
							</li>
							<li>
								<a class="pic" href="#">
                                    <img src="http://rong-yao.oss-cn-shanghai.aliyuncs.com/1498788939.jpg">
                                </a>
								
							</li>
					</ul>
				</div>

				<div class="hd">
					<ul></ul>
				</div>
		</div>
        <ul id="newslist">
            <li v-for = "(item,index) in req2">
                <div class="newslistwrap">
                    <div class="newsleft">
                        <h4><span class="newstip">{{item.newstip}}</span>{{item.newstitle}}</h4>
                        <div class="newsbottom">
                            <p class="left">
                                <span>{{item.newstype}}</span>
                                <span>{{item.newstime}}</span>
                            </p>
                            <p class="right">
                                <span><span class="iconfont icon-jushoucang"></span>{{item.newsxihuan}}</span>
                                <span><span class="iconfont icon-lianjie"></span>{{item.newsdingyue}}</span>
                            </p>
                        </div>
                    
                    </div>
                    <div class="newsright">
                        <img v-bind:src="item.newssrc">
                    </div>
                </div>
                <div class="disline"></div>
            </li>
           
        </ul>
    </div>
</template>

<script>

import {TouchSlide} from '../assets/js/TouchSlide.1.1.js';      
export default {
    data(){
        return {
            name:'',
            req2:[]
        }
    },
    methods:{

    },
    mounted(){
        TouchSlide({
            slideCell:"#slideBox",
            titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell:".bd ul", 
            effect:"leftLoop", 
            autoPage:true,//自动分页
            autoPlay:true //自动播放
        }),
        this.$http.get('http://rong-yao.oss-cn-shanghai.aliyuncs.com/myjson.json').then((res) => {
          
            this.req2 = res.data.newsList
        })
    },
    computed:{
        
    }
}
</script>

<style>
@import "../assets/css/home.css"
</style>
