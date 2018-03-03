<template>
    <div class="aside">
        <!-- <div class="abcd">
            <el-radio-group style="margin-bottom: 20px;">
                <el-radio-button  @click="showisCollapse"><i class="el-icon-menu"></i> </el-radio-button>
            </el-radio-group>
        </div> -->
        <el-row class="tac">
            <el-col :span="12">
                <el-menu default-active="1-4-1" background-color="#267bc7" text-color="#fff" active-text-color="#fff" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="false">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span>学员问题汇总</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">内容管理</el-menu-item>
                            <el-menu-item index="1-2">类别管理</el-menu-item>
                            <el-menu-item index="1-3">评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span>前端常用功能</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">内容管理</el-menu-item>
                            <el-menu-item index="1-2">类别管理</el-menu-item>
                            <el-menu-item index="1-3">评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span>重难点专区</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">内容管理</el-menu-item>
                            <el-menu-item index="1-2">类别管理</el-menu-item>
                            <el-menu-item index="1-3">评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span>资源下载</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">内容管理</el-menu-item>
                            <el-menu-item index="1-2">类别管理</el-menu-item>
                            <el-menu-item index="1-3">评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span>购物商城</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">内容管理</el-menu-item>
                            <el-menu-item index="1-2">类别管理</el-menu-item>
                            <el-menu-item index="1-3">评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span>订单管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">订单列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
        // showisCollapse(){
        //     console.log(123);
            
        //     this.isCollapse = !this.isCollapse
        // },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
.aside {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .tac {
    width: 100%;
    height: 100%;
    .el-col {
      width: 100%;
      height: 100%;
      .el-menu {
        height: 100%;
      }
    }

  }
  .el-submenu__title i {
    color: #fff;
}
}
i{
    color:#fff;
}
.abcd{
    position: absolute;
    top:60px;
    left:0;
    .el-radio-group{
        position: absolute;
        top:-50px;
        left:0;
        z-index: 9;
    }
}
</style>