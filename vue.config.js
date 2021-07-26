const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

// 本地环境是否需要使用cdn
const devNeedCdn = false;

const cdn = {
  // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex':'Vuex',
    'NutUI':'@nutui/nutui',
    'axios': 'axios'
  },
  
  // cdn的css链接
  css: [
    'https://cdn.jsdelivr.net/npm/@nutui/nutui@2.2.12/dist/nutui.min.css'
  ],
  
  // cdn的js链接
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/vue-router@3.0.3/dist/vue-router.min.js',
    'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
    'https://cdn.jsdelivr.net/npm/@nutui/nutui@2.2.12/dist/nutui.min.js',
    'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js'
  ]
};

function resolve(dir){
	return path.join(__dirname,'./',dir);
}

module.exports = {
	
    publicPath:'./', // 默认'/'，部署应用包时的基本 URL
	
	outputDir:'dist',
	
	assetsDir:'', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
	
	productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
	
	devServer: { // webpack-dev-server 相关配置
	  port: 8070, // 端口
	},
	
	configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
		if (isProduction) {
			config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true; // 生产环境生效 取消console
			config.mode = 'production';
			config["performance"] = {// 打包文件大小配置
				"maxEntrypointSize":10000000,
				"maxAssetSize":30000000
			}
			// config.plugins.push(new BundleAnalyzerPlugin());
		}
	
		if (isProduction || devNeedCdn) config.externals = cdn.externals;
	},
	
	chainWebpack: config => {
		// image-webpack-loader 图片压缩
		config.module
			.rule('images')
			.test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
			.use('image-webpack-loader')
				.loader('image-webpack-loader')
				.options({
					bypassOnDebug: true
				})
				.end();
				
		// ============注入cdn ============
		config.plugin('html').tap(args => {
	        // 生产环境或本地需要cdn时，才注入cdn
			if (isProduction || devNeedCdn) args[0].cdn = cdn;
			return args;
		});
	}
}