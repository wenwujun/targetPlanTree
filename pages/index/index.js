//index.js
//获取应用实例
const app = getApp()

var idinfolist = [  
{ "code": "1", "text": '健康锻炼-跑步-3km/天' },  
{ "code": "2", "text": '读书计划-技术-1本/月' },  
{ "code": "3", "text": '读书计划-生活-1本/月' }, 
{ "code": "4", "text": '读书计划-英语-1本/月' }, 
{ "code": "5", "text": '旅游计划-国内-6月西安游' },  
{ "code": "6", "text": '旅游计划-国内-6月成都游' },  
{ "code": "7", "text": '旅游计划-国内-6月重庆游' },  
{ "code": "8", "text": '6月小程序初版V1.0.0发布' },  
{ "code": "9", "text": '6月小程序优化版V1.2.0发布' }
]

Page({
  data: {
    listData: idinfolist,
    inputValue: '', //用于显示输入语句  
    searchinput: '', //用户输入的查询语句
  },
  onLoad: function () {

  }
})
