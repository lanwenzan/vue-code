<template>
    <div class="header">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                你好，{{name}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改密码</el-dropdown-item>
                <el-dropdown-item command="b">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:localStorage.getItem("uname")
            }
        },
        methods:{
            logout(){
                this.$http.get(this.$api.logout).then((res)=>{
                    if(res.data.status==0){
                        this.$router.push({name:'login'})
                        
                    }
                })
            },
            handleCommand(command){
                if(command=="b"){
                    this.logout()
                }
            }
        }
    };
</script>

<style scoped lang="less">
    .header{
        text-align:right;
    }
</style>