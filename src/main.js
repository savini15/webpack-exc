//导入Jquery
import $ from 'jquery'
//1.执行 npm i style-loader css-loader -D
//2.在webpack.config.js中增加moudule 节点，他是一个对象
import './css/index.css'//webpack默认只能打包js文件，所以此处报错。需要配手动安装loader 加载器
//const jq=require('jquery')
$(function(){
    $('li:odd').css('background','yellow')
    $('li:even').css('background','#00aaff')
})
class Person{
   static info={
       name:'kk',
       age:'23'
   }
}