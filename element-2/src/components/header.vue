<script>
    export default{
      props: ["linkRight1", "linkRight2", "linkRight3", "linkLeft1", "linkLeft2", "linkLeft3"],
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
<template>
  <div>
    <el-header>
      <el-row class="display-2">
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <el-menu mode="horizontal">
            <el-menu-item index="2">
              <span slot="title">{{ linkLeft1 }}</span>
            </el-menu-item>

            <el-menu-item index="3">
              <span slot="title">{{ linkLeft2 }}</span>
            </el-menu-item>

            <el-submenu index="4">
              <template slot="title">
                <span slot="title">Navigator One</span>
              </template>
              <el-menu-item-group>
                <span slot="title">Group One</span>
                <el-menu-item index="4-1">item one</el-menu-item>
                <el-menu-item index="4-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="4-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="4-4">
                <span slot="title">item four</span>
                <el-menu-item index="4-4-1">item one</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>

        <el-col :xs="12" :sm="12" :md="12" :lg="12" class="text-align-end">
          <a href="#">{{ linkRight1 }}</a>
          <a href="#"><i class="el-icon-edit"></i>{{ linkRight2 }}</a>
          <el-dropdown>
                    <span class="el-dropdown-link">
                      <i class="el-icon-more transform-i"></i>
                    </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 8</el-dropdown-item>
              <el-dropdown-item>Action 9</el-dropdown-item>
              <el-dropdown-item>Action 10</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

      </el-row>

      <el-row class="display-1">
        <el-col :xs="18" :sm="18" :md="18" :lg="18">
          <el-menu mode="horizontal">
            <el-menu-item index="2">
              <span slot="title">{{ linkLeft1 }}</span>
            </el-menu-item>

            <el-menu-item index="3">
              <span slot="title">{{ linkLeft2 }}</span>
            </el-menu-item>

            <el-submenu index="4">
              <template slot="title">
                <span slot="title">Navigator One</span>
              </template>
              <el-menu-item-group>
                <span slot="title">Group One</span>
                <el-menu-item index="4-1">item one</el-menu-item>
                <el-menu-item index="4-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="4-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="4-4">
                <span slot="title">item four</span>
                <el-menu-item index="4-4-1">item one</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" class="text-align-end">
          <el-dropdown trigger="click">
                                 <span class="el-dropdown-link">
                      <i class="el-icon-more transform-i"></i>
                    </span>
            <el-dropdown-menu slot="dropdown">
              <div class="display-3">
                <el-dropdown-item>
                  <span>{{ linkLeft1 }}</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span>{{ linkLeft2 }}</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span>{{ linkLeft3 }}</span>
                </el-dropdown-item>
              </div>

              <el-dropdown-item>
                <a href="#">{{ linkRight1 }}</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#"><i class="el-icon-edit"></i>{{ linkRight2 }}</a>
              </el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>

      <el-row class="display-3">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" class="text-align-end">
          <el-dropdown trigger="click">
                                 <span class="el-dropdown-link">
                      <i class="el-icon-more transform-i"></i>
                    </span>
            <el-dropdown-menu slot="dropdown">
              <div class="display-3">
                <el-dropdown-item>
                  <span>{{ linkLeft1 }}</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span>{{ linkLeft2 }}</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span>{{ linkLeft3 }}</span>
                </el-dropdown-item>
              </div>

              <el-dropdown-item>
                <a href="#">{{ linkRight1 }}</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="#"><i class="el-icon-edit"></i>{{ linkRight2 }}</a>
              </el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>


    </el-header>
  </div>
</template>
<style>
  @media (min-width: 349px){
  .display-2 {
    display: none !important;
  }.display-1 {
    display: none !important;
  }
  @media (min-width: 800px){
    .display-3 {
      display: block !important;
    }
  }
}
@media (min-width: 800px){
  .display-3 {
    display: none !important;
  }
  .display-1 {
      display: block !important;
    }
  @media (min-width: 1065px){
    .display-1 {
      display: block !important;
    }
  }
}
@media (min-width: 1065px){
  .display-2 {
    display: block !important;
  }
  @media (min-width: 349px){
    .display-1 {
      display: none !important;
    }
  }
}
</style>
