<template>
  <div class="container" @click="click">
        <div class="title">
            <p class="p1">{{title}}</p>
        </div>


        <div class="Time">
            <div class="uploadTime">
                <p class="p2">upload: {{uploadTime}}</p>
            </div>

            <div class="updateTime">
                <p class="p3">update: {{updateTime}}</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props:{
        articleId:Number,
        title:String,
        uploadTime:String,
        updateTime:String
    },
    methods:{
        click(){
            this.$router.push({
                path:'/Article',
                query: {
                  articleId: this.articleId
                }
            })
        }
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        height:100px;
        display: inline-flex;
        flex-direction: row;
        align-items: left;
        background-color: rgb(184, 183, 182);
        border-radius: 50px;
        box-shadow: 0px 5px 10px #888888;
    }

    .title{
        width: 60%;
        margin-left:5%;
        align-items: left;
        justify-content: left;
        display: inline-flex;
    }

    .p1{
        font-size: 20px;
        color: rgb(241, 163, 29);
        margin: 0;
        align-self: left;
        margin: 5%;
    }

    .Time{
        width: 40%;
        display: inline-flex;
        flex-direction: column;
        align-items: right;
        color: #efefef;
    }


</style>