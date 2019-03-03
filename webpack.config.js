const path = require('path')
const webpack=require('webpack')//启动热更新的第二步
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        open:true,
        contentBase:'src',
        hot:true,//启动热更新的第一步
        port:3000
    },
    plugins:[//配置插件的节点
       new webpack.HotModuleReplacementPlugin(),////启动热更新的第三步
        new htmlWebpackPlugin({
        template:path.join(__dirname,'./src/index.html'),//指定模板路径
        filename:'index.html'//指定生成的页面的名称
        })
    ],
    module:{//用于配置所有第三方的加载器
        rules:[//第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
        ]
    }
}