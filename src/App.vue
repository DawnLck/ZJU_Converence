<template>
    <div id="app">
        <div class="layout">
            <Layout>
                <Header id="header">
                    <div class="title">
                        <h1>2018年浙江大学全国博士生学术论坛</h1>
                        <h2> 环境污染协同治理 </h2>
                        <p> 时间：2018年11月30日 — 12月2日</p>
                        <p> 地点：浙江大学紫金港校区</p>
                    </div>
                </Header>
                <Row>
                    <Col :lg="{span: 18, offset:3}">
                        <Layout :style="{padding: '0 50px'}">
                            <!--<Breadcrumb :style="{margin: '16px 0', textAlign:'left'}">-->
                                <!--<BreadcrumbItem>Home</BreadcrumbItem>-->
                                <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
                                <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
                            <!--</Breadcrumb>-->
                            <Content :style="{textAlign:'center', padding: '24px 0', minHeight: '280px', background: '#fff'}">
                                <Layout>
                                    <Sider breakpoint="sm" collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
                                        <Menu :theme="theme2" active-name="0" width="auto" id="menu" :style="{textAlign:'left'}">
                                            <MenuItem name="0" to="/">
                                                <Icon type="md-document"/>
                                                首页
                                            </MenuItem>
                                            <!--<MenuItem name="1" to="/about">-->
                                            <!--<Icon type="md-document"/>-->
                                            <!--论坛简介-->
                                            <!--</MenuItem>-->
                                            <MenuItem name="2" to="/organiser">
                                                <Icon type="md-school"/>
                                                组委会
                                            </MenuItem>
                                            <MenuItem name="3" to="/locationTime">
                                                <Icon type="md-school"/>
                                                地点时间
                                            </MenuItem>
                                            <MenuItem name="4" to="/content">
                                                <Icon type="md-school"/>
                                                活动内容
                                            </MenuItem>
                                            <MenuItem name="5" to="/schedule">
                                                <Icon type="md-school"/>
                                                日程安排
                                            </MenuItem>
                                            <MenuItem name="6" to="/matters">
                                                <Icon type="md-school"/>
                                                重要事宜
                                            </MenuItem>
                                            <MenuItem name="7" to="/contact">
                                                <Icon type="md-school"/>
                                                联系我们
                                            </MenuItem>
                                        </Menu>
                                    </Sider>
                                    <Content
                                            :style="{padding: '24px', minHeight: '280px', background: '#fff', textAlign: 'left'}">
                                        <router-view/>
                                    </Content>
                                </Layout>
                            </Content>
                            <Footer>
                                <small>浙江大学环境与资源学院</small>
                            </Footer>
                        </Layout>
                    </Col>
                </Row>
            </Layout>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        theme2: 'light',
        isCollapsed: false
      }
    }
  }
</script>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    #header {
        position: relative;
        width: 100%;
        height: 12rem;
        font-size: 1.2rem;
        color: #FFF;
        background: white url('https://pic.huodongjia.com/static/images/hdj_bg/it_7.jpg') no-repeat;
        background-size: 100% 100%;
        /* 实现垂直居中 */
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
            line-height: 2.4rem;
            p {
                line-height: 1.2rem;
            }
        }
    }

    #menu {
        margin-top: 2rem;
    }

    .article {
        padding: 1rem 2rem;
        font-size: 1rem;
        text-align: left;
        line-height: 2rem;
        p {
            text-indent: 2rem;
        }
    }

    .layout {
        /*border: 1px solid #d7dde4;*/
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        .layout-logo {
            width: 100px;
            height: 30px;
            background: #5b6270;
            border-radius: 3px;
            float: left;
            position: relative;
            top: 15px;
            left: 20px;
        }
        .layout-nav {
            width: 420px;
            margin: 0 auto;
            margin-right: 20px;
        }
        .layout-footer-center {
            text-align: center;
        }
    }
</style>
