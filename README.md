# Shopping-Mall

## 功能说明：实现购物商城的所有功能
> 项目任务: 
>       （1）注册、登录、退出
>       （2）商品列表展示、商品详情展示、商品搜索
>       （3）购物车模块（付款金额、商品数量的联动变化）、付款接口实现
>       （4）说明文档撰写、答辩PPT


## 环境搭建

### pip源修改为清华源
```bash
$ pip config set global.index-url 'https://pypi.tuna.tsinghua.edu.cn/simple'
$ pip config set install.trusted-host 'pypi.tuna.tsinghua.edu.cn'
```

### 下载依赖包
```bash
$ pip install virtualenv    # 下载虚拟环境创建工具
$ virtualenv venv           # 创建虚拟环境 venv
$ ./venv/Scripts/activate   # 激活虚拟环境
(venv)$ pip install -r requirements.txt   # 从该文件中读取依赖包及版本号并下载
(venv)$ pip list  # 查看已下载包
```

### 启动项目
```bash
(venv)$ ipconfig    # 或 ifconfig 查看自己的 ipv4 地址，用于在浏览器上访问本机或127.0.0.0 或 localhost 访问
(venv)$ python manage.py runserver 0.0.0.0:80
```





