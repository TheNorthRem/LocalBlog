<template>
  
  <div class="container">
      <div class="title">
        <p class="t1"> 标题</p>
        <input type="text" v-model="article.title" class="inp"/>
        <img src="../assets/left.png" class="left" @click="left" />
      </div>
     
      <mavon-editor class="editor1" v-model="article.content" ref=md @imgAdd="$imgAdd" html=false @save="$save"></mavon-editor>
      
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      article:{
        articleId:'',
        title:'',
        content:''
      }
    }
  },
  methods:{
     $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           axios({
               url: 'http://localhost:8081/ImageUpload',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data'},

           }).then((res) => {
              let url=res.data.data.url
               this.$refs.md.$img2Url(pos, url);
           })
      },
      $save(res){
        if(this.article.articleId!=''){
              axios({
                url: 'http://localhost:8081/Article/update',
                method: 'post',
                data:{
                    "title":this.article.title,
                    "content":this.article.content,
                    "Id":this.article.articleId
                }
              }).then((res) => {
                  console.log(res)
                  this.$router.push({path:'/'})
              })

        }else{
            axios({
               url: 'http://localhost:8081/Article/upload',
               method: 'post',
               data:{
                  "title":this.article.title,
                  "content":res
               }
            }).then((res) => {
                console.log(res)
                this.$router.push({path:'/'})
            })
        }
        
        
      },
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
        this.$router.push({path:'/'})
      }
     
  },
  created(){
    if(this.$route.query.articleId!=undefined)
        this.update()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.t1{
  font-size: 30px;
  margin: 0;
  margin-bottom: 5%;
  width: 100px;
}

.left{
  width: 50px;
  height: 50px;
}

/deep/
.editor1{
  width: 80%;
  max-width: 1400px;
  max-height: 800px;
  margin-top: 0;
}
.inp{
  width: 70%;
  height: 100%;
  font-size: 10%;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title{
  width: 80%;
  height: 50px;
  margin-bottom: 50px;
  margin-top: 0;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
}
</style>
