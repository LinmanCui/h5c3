## 购物车宣传（宣传页，活动页,h5宣传页）

####全屏切换效果
插件：fullpage.js
》通过鼠标的滚轮 切换全屏页面
-使用fullpage来完成(http://www.dowebok.com/77.html)
-使用动画（js实现动画，css3显示的动画）
	+一个是帧动画，一个是补间动画
	+什么是帧动画:使用定时器 每隔一段时间 更改当前元素的状态
	+什么是补间动画：过渡（加过渡只要状态发生改变产出动画） 动画（多个节点来控制动画）性能会更好
	+在支持H5C3的浏览器应该尽可能多的使用css3动画（移动端开发）
	+transition animation
	+transition 组合写法（transition：all 1s linear 1s）拆分写法 transition-property transition-duration transition-timeing-function transition-delay

-引用文件
css和js
css3中可以监听动画结束事件
css3的居中{
left: 50%;
transform: translateX(-50%);
}
<!-- transform转换会提高层级 -->
###转换
- 缩放 scale
- 位移 translate
- 旋转 rotate
- 倾斜 skew
以上四种转换方式是比较特殊的，都是由matrix转换来的

###动画速度                            
- ease
- linear 
- ease-in
- ease-out
- ease-in-out
以上五种转换方式是比较特殊的，都是由贝塞尔曲线转换来的

### 3d转换 translate3d rotate3d
2d转换和3d转换的区别：除了多一个参数表示3d
在移动端使用3d转换可以优化性能（如果设备有3d加速引擎，GPU可以提高性能）

###隐藏的几种方法
position:absolute;
opacity:0;

scale(0)

img行内块元素，默认有间距

动画怎么进行的？
1.加now类
2.加leaved类
3，加show类
4.加css属性
5用jquery方法