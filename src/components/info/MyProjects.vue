<template>
  <div>
    <h2 class="flex items-center mb-2 mt-4">
      <svg-icon :iconName="project.icon" />
      <span class="ml-1">{{ project.title }}</span>
    </h2>
    <!-- <hr /> -->
    <el-collapse>
      <el-collapse-item name="1">
        <template #title>
          🔥基于微服务的短视频社交平台应用
          <el-icon><i-ep-link /></el-icon>
        </template>
        <div>
          👨‍🏫本项目的目标是利用当今先进的互联网微服务信息技术和架构，构建一个为用户提供具有短视频社交相关服务的平台，在功能实现上相似于当前的抖音App应用软件。
          在此基础上实现了该项目的功能模块有：用户业务模块、短视频业务模块、粉丝业务模块、评论业务模块、消息业务模块。
          <br />
          💻本人负责项目的全部开发，维护，测试以及文档的编写。
          <br />
          <p class="font-bold" style="margin-top: 0.2rem; margin-bottom: 0.2rem">
            项目描述：
          </p>
          1、前后端分离，客户端采用 Uniapp 跨平台多端开发，后台采用 Vue 搭建；
          <br />
          2、使用 Spring Cloud Alibaba 微服务生态 ， 如用 Nacos
          进行服务集群和动态配置管理，用 Dubbo 实现微服务模块间的通信；
          <br />
          3、使用腾讯云的短信服务实现手机号码注册登录，并用 Redis
          存储验证码，实现 60s 限制拦截，多端 ip 控制功能；
          <br />
          4、使用 Redis 计数器，统计和缓存用户的粉丝关注数量、
          评论数量，点赞数量；
          <br />
          5、使用 Gateway 网关实现统一鉴权认证，负载均衡等；
          <br />
          6、使用 Minio 分布式对象存储用户头像和背景图， UniCloud
          云存储保存上传的视频；
          <br />
          7、使用 MongoDB 实现消息数据存储，实现对消息的保存，删除与查询；
          <br />
          8、使用 RabbitMQ 消息队列实现异步消息和项目解耦等功能；
          <br />
          9、使用 Docker 容器部署中间件和微服务，通过腾讯云上线项目；
          <!-- <br /> -->
          <!-- 🔔此项目基于本人参加第二届字节跳动青训营实践项目的拓展开发。 -->
        </div>
      </el-collapse-item>

      <el-collapse-item name="2">
        <template #title>
          🔥基于Pytorch的人脸表情识别项目
          <el-icon><i-ep-link /></el-icon>
        </template>
        <div>
          👨‍🏫本项目利用Pytorch设计完成的基于卷积神经网络实现的面部表情识别，研究分析了CNN、VGG和ResNet三种模型的识别算法以及算法的评估，
          最终基于CNN模型算法，实现了人脸表情识别项目，讨论了VGG模型和ResNet模型的优化思路。
          <br />
          💻本人负责项目的开发，文档的编写，以及答辩。
          <br />
          📺讲解视频：<el-link :underline="false" href="https://www.bilibili.com/video/BV1JR4y1W7Vw"
            target="_blank">bilibili.com/video/BV1JR4y1W7Vw</el-link>
          <br />
          📤本项目v2.0正在持续更新！敬请期待🙏
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title>
          🔥本地智能算法系统
          <el-icon><i-ep-link /></el-icon>
        </template>
        <div>
          👨‍🏫本项目的目标是实现一套能够对外提供智能算法接口，比如车牌识别、表情识别、密码学算法等服务的服务器(服务器集群)软件系统。
          项目中的算法来自本地而非再来自互联网上其它的服务器或服务器应用软件系统(即第三方SDK等)。
          在此基础上实现了该系统的主要功能有密码算法、对象识别、人脸识别、手写数字识别，图片处理，车牌识别，证件识别。
          <br />
          💻本人负责项目的全部开发，维护，测试以及文档的编写。
          <br />
          <p class="font-bold" style="margin-top: 0.2rem; margin-bottom: 0.2rem">
            项目描述：
          </p>
          1、基础的权限功能，登录验证功能，文件存储等功能基于RuoYi-Vue-Plus脚手架搭建完成。
          <br />
          2、密码算法功能前端基于CryptoJS生成，后端实现了密码保存增删改查导出等功能。
          <br />
          3、人脸识别的前端基于Tracking.js实现人脸的捕获和截取，后端的人脸信息管理功能待补充。
          <br />
          4、图片处理功能主要就是使用OpenCV官方提供的一些Java版的算法模型进行图片处理。
          <br />
          5、手写数字识别功能让前端提交图片后，后端进行图片反色，缩放处理，特征提取，用deeplearing4j进行模型处理后返回识别结果即可。
          <br />
          6、对象识别功能只需要让SpringBoot应用识别图片中的物体，并在OpenCV集成的DNN模块加载和使用YOLO4模型，将推理结果标注在图片上即可。
          <br />
          7、车牌识别、证件识别基于EasyPR-Java开源代码进行整合实现。
          <br />
          📤本项目v2.0正在更新实现中，新的迭代版本将基于微服务来完善和拓展项目的功能！敬请期待👏
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template #title>
          ⭐其他项目
          <el-icon><i-ep-link /></el-icon>
        </template>
        <div>
          <MyProjectScrollbar />
          查看地址：<el-link :underline="false" href="https://github.com/hexiang10?tab=repositories"
            target="_blank">github.com/hexiang10?tab=repositories</el-link>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
// 项目经验
const project = reactive({
  title: '科研项目',
  icon: 'icon-xiangmujingyan-',
  data: [],
})</script>
