## 日阅

常用网站的集合

## 特性
* 支持 npm 包引入
* 支持 promise, async/await 等最新语法
* 支持多种编译器，如 pug/less/stylus
* 支持 ESlint
* 支持本地 mock 数据
* 支持发布前资源压缩
## Install

安装脚手架工具
```javascript
npm i weapp-start -g
```
安装依赖

```javascript
npm install
```
开启实时编译

```javascript
npm run dev
```
打包生产代码

```javascript
npm run build
```
新建page页面或者组件页面
```javascript
npm run new
```
开启mock服务
```javascript
weapp-start mock
```
 自动格式化代码
```javascript
npm run format
```

## 注意
如果为window开发环境，需要修改依赖weapp-plugin-require中lib文件夹下的index.js，
在118行和197行后面添加如下代码
```javascript
relativeDistPath = relativeDistPath.replace(/\\/g, '/')

