<template>
  <div class="showPanel">
      
      <div class="but">
            <img src="../assets/left.png" class="left" @click="left" />
        
            <img src="../assets/edit.png" class="edit" @click="edit" />
      </div>

      <div class="title">
        <p class="t1"> {{article.title}}</p>
      </div>

      <el-divider></el-divider>

      <div class="content">
        <mavon-editor ref=md 
        class="editor"
        :subfield = false
        :value= this.article.content 
        :toolbarsFlag= false
        defaultOpen= "preview"
        :scrollStyle = true 
        ></mavon-editor>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            article:''
        }
    }
    ,
    methods:{
        update(){
           
            axios({
                url: 'http://localhost:8081/Article/getArticle',
                method: 'get',
                params:{
                    Id:this.$route.query.articleId
                }
            }).then((res) => {
                this.article=res.data.data
            })
        },
        left(){
            this.$router.push({
                path:'/'
            })
        },
        edit(){
            this.$router.push({
                path:'/Editor',
                query:{
                    articleId: this.article.articleId
                }
            })
        },
        watch:{
            $route() {
                this.update()
            }
        }
    
    },

    created(){
        this.update()
    }
    
}
</script>

<style scoped>
    
    

   

    .showPanel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .t1{
        font-size: 40px;
    }

    .content{
        display: inline-flex;
        width: 100%;
        border-radius: 50px;
        align-items: center;
        justify-content: center;
    }

    .title{
        width: 100%;
        margin: 0;
        height: 100px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    /deep/
    .editor{
        align-self: center;
        max-width: 1200px;
        width: 80%;
    }

    .but{
        width: 80%;
        height: 50px;
        background-color: antiquewhite;
        border-radius: 50px;
        box-shadow: 0px 5px 10px #888888;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    }

    .left{
        width : 40px;
        height:40px;
        position: absolute;
        left: 15%;
    }

  

    .edit{
        width : 40px;
        height:50px;
        position: absolute;
        right: 15%;
    }

</style>