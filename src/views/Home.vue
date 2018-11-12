<template>
    <div class="about article">
        <Content>
            <h1 :style="{textAlign:'center'}">
                2018年浙江大学全国博士生学术论坛欢迎你！
            </h1>
            <Divider/>
            <Row>
                <Col :lg="{span: 18, offset:3}">
                    <Carousel v-model="carousel" autoplay id="carousel_pic">
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../assets/school_1.jpg"/>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../assets/school_2.jpg"/>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../assets/school_3.jpg"/>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </Col>
            </Row>
            <p>
                建设生态文明，是关系人民福祉、关乎民族未来的长远大计。为加快推进生态文明建设，高水平打赢污染防治攻坚战，充分发挥高校和科研院所人才优势，提升协同创新能力，2018年全国博士生学术论坛—“生态文明创新研究”将于2018年11月30日—12月2日在浙江大学紫金港校区举办。论坛组委会诚邀全国环境相关领域内的在读博士研究生于此深秋时节共聚西子湖畔，热情关注并积极参与生态文明建设。
            </p>
            <Divider/>
            <div class="author">
                <p> 论坛组委会</p>
                <p> 浙江大学环境与资源学院</p>
            </div>
        </Content>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        carousel: 0
      }
    }
  }
</script>
<style lang="scss" scoped>
    .author {
        text-align: right;
    }

    #carousel-pic {
        margin-bottom: 2rem;
    }

    .demo-carousel {
        text-align: center;
        img {
            width: 80%;
        }
    }

</style>
