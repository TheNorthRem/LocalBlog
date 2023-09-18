<template>
  <div class="container1">
        <div class="show">
            <span class="show" v-for="i in articles.length" v-bind:key="i" style="padding-bottom: 5%;">
                    
                <TitlePanelVue class="panel" :articleId= articles[i-1].articleId :title= articles[i-1].title
                    :uploadTime= articles[i-1].uploadTime :updateTime= articles[i-1].updateTime />    
            </span>
        </div>

        <img src="../assets/+.png" class="img" @click="click" />

  </div>
</template>

<script>
    import axios from 'axios';
    import TitlePanelVue from '@/components/TitlePanel.vue';
    export default {
        
        data(){
            return{
                articles:[]
         
            }
        },
        components:{
            TitlePanelVue
        },

        methods:{
            update(){
                axios({
                    url: 'http://localhost:8081/Article/search',
                    method: 'get'
                }).then((res) => {
                    this.articles=res.data.data
                })
            },
            click(){
               this.$router.push({path : "/Editor"})
            }
        },
        created(){
           this.update()
         
        },
        watch:{
            $route() {
                this.update()
            }
        }
    }
    
</script>

<style scoped>
    
    .container1{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    
    .panel{
        width: 80%;
        margin: 0px;
    }

    .show{
        width: 100%;
        align-items: center;
        display: inline-flex;
        flex-direction: column;
    }

    .img{
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 5%;
    }
</style>