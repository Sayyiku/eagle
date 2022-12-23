# EagleUse

把 eagle 变成我的图片（后台）管理系统。

> 如果你也有这样的想法：eagle 修改/管理图片 => 网站上能实时查看。那这个项目非常合适，欢迎体验！

## 介绍

**🚀 高度还原 Eagle**
![](./readme/1.jpg)

**☀️ 可视化数据展示**
![](./readme/2.jpg)

**🐸 更好的数据管理及迁移**
![](./readme/3.jpg)

## 本地安装

```sh
git clone https://github.com/meetqy/eagleuse
pnpm install
```

把 .env.example 改为 .env，正确填写配置信息

```sh
# 初始化 数据库
pnpm run db:init

# 创建静态资源软连接
pnpm run create:symlink

# 启动项目
pnpm run dev
```

## 在线体验

- [rao.pics](https://rao.pics)
