var version = '20170426';
seajs.config({
	base: './js/',
	alias:{
		'jquery':'vendor/jquery.min.js',
		
	},
	// map:[
	// 	['.js','.js?v='+version]
	// ],
	 // 调试模式
  	// debug: true,
	charset: 'utf-8',
	//预加载
	preload: ['jquery'],
});