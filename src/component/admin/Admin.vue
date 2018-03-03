<template>
     <div class="admin">
        <el-container>
            <!-- 公共头部 -->
            <el-header>
                <app-header></app-header>
            </el-header>
            <el-container>
                <!-- 公共左侧 -->
                <el-aside width="200px">
                    <app-aside></app-aside>
                </el-aside>
                <!-- 可变的内容 -->
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from './subcom/Header.vue'
import Aside from './subcom/Aside.vue'
    export default {
        components:{
            appHeader:Header,
            appAside:Aside
        }
    }
</script>

<style scoped lang="less">
    .admin{
        height:100%;
        .el-container{
            height:100%;
        }
        .el-header{
            height:50px;
            line-height: 50px;
            background: rgb(240, 240, 240);
        }
        .el-container{
            .el-aside{
                height:100%;
                z-index: 9;
            }
        }
    }
</style>