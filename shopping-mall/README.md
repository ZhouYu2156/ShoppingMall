# Shopping-Mall

## 功能说明：实现购物商城的所有功能
> 项目任务: 
>       （1）注册、登录、退出
>       （2）商品列表展示、商品详情展示、商品搜索
>       （3）购物车模块（付款金额、商品数量的联动变化）、付款接口实现
>       （4）说明文档撰写、答辩PPT

## 技术栈
> `Vue3`、`Vite`、`TypeScript`、`Django`、`爬虫`、`MySQL`



## 项目开发流程

> （1）环境搭建(创建前端和后端工程)

> （2）后端搭建数据库和API接口
>
> - MySQL
>   - 用户表
>   - 订单表
>   - 商品库存表
> - 用爬虫准备数据
> - 创建 API 接口
>   - 用户注册
>   - 用户登录校验
>   - 用户退出清除 session
>   - 商品列表（根据页码返回）
>   - 商品详情返回（根据ID）
>   - 订单

> （3）前端工程搭建
>
> - 用户登录、注册模块
> - 用户购买商品加入购物车
> - 订单付款
> - 个人中心（可查看个人资料和订单详情）
> - 用户退出

> （4）项目开发说明文档、代码提交

> （5）项目开发完成进行测试、部署





### 一、后端环境搭建

#### 下载 `django`

```bash
$ pip install django
```

#### 创建项目

```bash
$ django-admin startproject mall
```



#### pip源修改为清华源
```bash
$ pip config set global.index-url 'https://pypi.tuna.tsinghua.edu.cn/simple'
$ pip config set install.trusted-host 'pypi.tuna.tsinghua.edu.cn'
```

#### 下载依赖包
```bash
$ pip install virtualenv    # 下载虚拟环境创建工具
$ virtualenv venv           # 在项目目录 mall 下创建虚拟环境 venv
$ ./venv/Scripts/activate   # 激活虚拟环境
(venv)$ pip install -r requirements.txt   # 从该文件中读取依赖包及版本号并下载
(venv)$ pip list  # 查看已下载包
```

#### 启动项目
```bash
(venv)$ ipconfig    # 或 ifconfig 查看自己的 ipv4 地址，用于在浏览器上访问本机或127.0.0.0 或 localhost 访问
(venv)$ python manage.py runserver 0.0.0.0:80
```





### 二、前端工程搭建

- 用脚手架创建 `Vue3` 项目工程

```bash
$ npm view vue versions		# 查看现在的vue所有版本号
$ npm create vue@latest		# 创建vue3项目模板
# ....
$ cd 项目
$ npm install		# 下载依赖
$ npm run dev		# 启动项目
```

- 配置 `Pinia`、`Axios`、`Vue-Router`

```bash
$ npm install pinia axios vue-router
```

> 安装完成，进行相应配置



























