// const host = 'https://www.otimes.com/front'
const host = 'https://dbys.otimes.info/front'
// const imgHost = 'https://dbys.otimes.info' // 测试图片地址
const imgHost = 'https://www.otimes.com'
const socketHost = 'wss://www.otimes.com' // websocket地址
// const socketHost = 'wss://dbys.otimes.info'

export const __getApi = {
  host,
  imgHost,
  socketHost,
  baseHrefUrl: 'https://www.otimes.com',

  // code encryptedData iv 换取openid，unionid,session_key
  _getPrivacyToken: `${host}/wxapp/codeei.dbys`,

  // 登录
  _getLogin: `${host}/member/login.dbys`,

  // 授权登录换取 unionID
  _getUnionID: `${host}/wxapp/toAuthorization.dbys`,

  // 注销
  _getLogout: `${host}/wxmember/logout.dbys`,

  // 判断手机号是否已注册   Valid mobile phone number
  _getValidPhoneNumber: `${host}/regist/telvalid.dbys`,

  // 获取手机验证码
  _gettelRegist: `${host}/regist/telRegist.dbys`,

  // 注册提交
  _getRegistSubmit: `${host}/regist/submit.dbys`,

  // 修改密码获取手机验证码
  _getVerifySMSEdit: `${host}/password/telPassword.dbys`,

  // 修改密码找回密码接口
  _getPasswordBack: `${host}/password/validInfo.dbys`,

  // 修改密码接口
  _getEditPassword: `${host}/password/findPassword`,

  // 首页获取成交播报
  _getTradeList: `${host}/tradeBroadcast/tradelist.dbys`,

  // 首页获取供求信息
  _getInfoList: `${host}/supportdata/info/showdatas.dbys`,

  // 首页获取产品列表
  _getSYProductList: `${host}/outsource/syshangpinlist`,

  // 小八塑价最新价格汇总
  _getLastinfo: `${host}/priceIndex/getLastinfo.dbys`,

  // 首页价格名称列表
  _getSheetDataList: `${host}/priceIndex/sheetNamesList.dbys`,

  // 价格趋势图列表数据
  _getSheetNames: `${host}/priceIndex/getSheetNames.dbys`,

  // 价格趋势图名称列表
  getLabel: `${host}/priceIndex/getLabel.dbys`,

  // 价格趋势图数据
  getDatas: `${host}/priceIndex/getDatas.dbys`,

  // 对比价格趋势图名称列表
  _getSameTypeNameList: `${host}/priceIndex/getSameSelected.dbys`,

  // 对比价格趋势图数据
  _getCompareList: `${host}/priceIndex/getCompare.dbys`,

  // 首页价格趋势图名称列表
  _getSheetList: `${host}/priceIndex/getDatas.dbys`,

  // 搜索模块
  _getSearch: `${host}/seek/mistiness.dbys`,

  // 现货商城页获取产品列表
  _getProductList: `${host}/outsource/shangpinlist`,
  // 现货商城页获取产品列表，定向用户拦截
  _getProductList_d: `${host}/outsource/shangpinlist_d.dbys`,

  // 现货商城页获取品名
  _getProductNameList: `${host}/outsource/pinming`,

  // 现货商城页获取高级选项
  _getAdvOptionsList: `${host}/outsource/gaojisx`,
  // 现货商城页获取高级选项
  // _getAdvOptionsList: `${host}/outsource/wx_gaojisx`,

  // 获取城市列表
  _getAreas: `${host}/registup/getareas.dbys`,

  // 现货商城页获取产品详情信息
  _getProductDetails: `${host}/outsource/shangpinxq`,

  // 信息中心供求列表模块
  _getInfromationList: `${host}/supportdata/info/showdatas.dbys`,

  // 信息中心供求详情模块
  _getInfromationDetails: `${host}/supportdata/info/showdata.dbys`,

  // 我的供求列表模块
  _getMyInfroList: `${host}/supportdata/showdatas.dbys`,

  // 修改我的供求信息模块
  _getMyInfroUpdata: `${host}/supportdata/updata.dbys`,

  // 传入我的供求信息模块
  _getMyInfroDetails: `${host}/supportdata/showdata.dbys`,

  // 删除我的供求信息模块
  _getMyInfroDelete: `${host}/supportdata/delete.dbys`,

  // 发布供求 品种列表接口
  _getVarietyList: `${host}/outsource/pinzhong`,

  // 发布供求 图片上传接口
  _uploadImage: `${host}/supportdata/uploadImg.dbys`,

  // 发布供求 品种列表接口
  _infromationUpload: `${host}/supportdata/upload.dbys`,

  // 我的检测报告列表模块
  _getReportList: `${host}/report/getpdf`,

  // 我的订阅模块验证是否绑定手机号
  _getCustomMadetelHasTel: `${host}/customMade/hasTel.dbys`,

  // 我的订阅模块绑定手机号发送验证码
  _getCustomMadetelRegist: `${host}/customMade/telMadeInfo.dbys`,

  // 我的订阅模块绑定手机号
  _getCustomMadetelBind: `${host}/customMade/telMadeInfoSave.dbys`,

  // 我的订阅列表模块
  _getCustomMadeList: `${host}/customMade/seekerMadeInfo.dbys`,

  // 我的订阅详情列表模块
  _getCustomMadeInfoList: `${host}/customMade/getMadeInfo.dbys`,

  // 发布我的订阅信息模块
  _getCustomMadeInfo: `${host}/customMade/madeInfo.dbys`,

  // 修改我的订阅信息模块
  _updateCustomMadeInfo: `${host}/customMade/updateMadeInfo.dbys`,

  // 修改订阅状态
  _updateCustomMadeState: `${host}/customMade/updateMadeState.dbys`,

  // 我的订阅模块详情
  _getCustomMadeInfoDetaile: `${host}/customMade/getMadeInfoDetaile.dbys`,

  // 共享实验室资料下载
  _getDowmloadFile: `${host}/file/down`,

  // 广告位,banner
  _getADList: `${host}/advisement/ad_list`,

  // 材料数据库列表
  _getMaterialList: `${host}/material/search.dbys`,

  // 材料数据库详情页
  _getMaterialDetails: `${host}/material/cxid.dbys`,

  // 信息板块接口,获取信息列表
  _getNewsList: `${host}/news/title.dbys`,

  // 信息板块接口,获取信息列表
  _getNewsDetails: `${host}/news/article.dbys`,

  // 早稻接口
  _getCompanyList: `${host}/enter/enlist.dbys`, // 列表数据
  _getCompanyTop15List: `${host}/enter/enlistFirst.dbys`, // 前15条数据
  _getCompanyDetail: `${host}/enter/particulars.dbys`, // 详情
  _getAllCityList: `${host}/registup/getcitis.dbys`, // 所有城市
  _getAllType: `${host}/enter/getSorts.dbys`, // 全部分类
  _getAllCollection: `${host}/enter/collectList.dbys`, // 收藏列表
  _getCollectionDo: `${host}/enter/collect.dbys`, // 收藏操作
  _getSearchCollection: `${host}/enter/collectSearch.dbys`, // 收藏搜索
  _getFeedBack: `${host}/enter/feedback.dbys`, // 反馈

  // 早稻新接口
  _getRiceList: `${host}/rise/list.dbys`, // 搜索
  _getCollectionList: `${host}/rise/collectList.dbys`,
  _doCollection: `${host}/rise/collect.dbys`,
  _getRiceDetails: `${host}/rise/particulars.dbys`,
  _getRiceNews: `${host}/rise/sentimentList.dbys`,
  _getAnnouncementList:`${host}/rise/announcementList.dbys`, // 获得企业的法院公告列表
  _getAnnualReportList:`${host}//rise/annualReport.dbys.dbys`, // 获得企业年报列表

  // 交易票据物流信息
  _getOrderList: `${host}/orderb/erpddList.dbys`, //订单列表
  _getOrderView: `${host}/orderb/checkht.dbys`, // 合同查看
  _getOrderDownload: `${host}/orderb/downloadht.dbys`, // 合同下载
  _getInvoiceList: `${host}/orderb/erpReceivList.dbys`, // 票据互联票据列表
  _getInvoiceDetails: `${host}/orderb/erpWLlist..dbys`,  // 票据互联物流信息
  _getOrderPositionList: `${host}/customerLogistics/findLogisticsByEntruId.dbys`, // 根据委托单ID获取物流定位信息接口
  _getOrderPositionDetails: `${host}/customerLogistics/findLogisticsByEntruId.dbys`, // 根据委托单ID获取物流定位信息接口

  // 鱼塘历史接口
  _getFishPondList: `${host}/wechat/polist.dbys`,
  _getsocketList: `${socketHost}/weixin_haslogin.dbys`,
  _getFishClass: `${host}/wechat/firstpool.do`,
  _getFishClassSort: `${host}/wechat/secondPoolType.do`,
  _getFishTags: `${host}/wechat/getPoolLabel.do`,
  _createFishTags: `${host}/wechat/creatPoolLabel.do`,
  _delFishTags: `${host}/wechat/deletePoolLabel.do`,

  // 环球资源
  _getOverseasList: `${host}/resourcemap/selectlist.dbys`,
  _getOverseasSingleList: `${host}/resourcemap/selectlistAll.dbys`,
  _getOverseasDetails: `${host}/resourcemap/mapresourceDetail.dbys`,
  _getUserMsg: `${host}/resourcemap/mapresourceUpxuqiu.dbys`,

  _getNewOverseasList: `${host}/resourcemap/selectxllist.dbys`,
  _getNewOverseasDetails: `${host}/resourcemap/xlmapresourceDetail.dbys`,
  _getMessageUp: `${host}/resourcemap/xlmapresourceUpxuqiu.dbys`,

  _getUpdateMsg: `${host}/wx/isNotice.dbys`, // 更新公告

  // 交易功能
  _getTalkList: `${host}/wxtrade/negotiateHistory.dbys`, // 洽谈 获取历史列表
  _getTalk: `${host}/wxtrade/negotiateCreate.dbys`, // 生成洽谈单
  _replyTalk: `${host}/wxtrade/negotiateReply.dbys`, // 回复洽谈单
  _replyTalkReject: `${host}/wxtrade/negotiateReject.dbys`, // 回复拒绝
  _replyTalkCancel: `${host}/wxtrade/negotiateCancel.dbys`, // 取消洽谈单
  _replyTalkAgree: `${host}/wxtrade/negotiateAgree.dbys`, // 同意洽谈单
  _getTalkDetails: `${host}/wxtrade/negotiateDetail.dbys`, // 单条洽谈单

  _getContractHistory: `${host}/wxtrade/contractHistory.dbys`, // 合同历史列表
  _getContractDownload: `${host}/wxtrade/contractDownload.dbys`, // 合同下载列表
  _getContractDetails: `${host}/wxtrade/contractPreview_attach_info.dbys`, // 这个是合同预览中附加的信息

  _getListingList: `${host}/wxtrade/listing_listmanager.dbys`, // 挂牌列表
  _listingUpdate: `${host}/wxtrade/listing_listupdate.dbys`, // 编辑挂牌单
  _listingUp: `${host}/wxtrade/listing_listShelf.dbys`, // 批量上架
  _listingDown: `${host}/wxtrade/listing_listcancels.dbys`, // 批量下架

  _getBuyList: `${host}/wxtrade/orderHistory.dbys`, // 订单列表
  _getBuyDetails: `${host}/wxtrade/orderDetail.dbys`, // 订单详情
  _getBuyDo: `${host}/wxtrade/product_trade_one.dbys`, // 立即购买接口
  _getBuyDoMany: `${host}/wxtrade/product_trade_many.dbys`, // 批量支付接口
  _addDo: `${host}/wxtrade/shopping_car_add.dbys`, // 添加购物车
  _delDo: `${host}/wxtrade/shopping_car_delete.dbys`, // 购物车删除
  _getBuyDoList: `${host}/wxtrade/shopping_car_search.dbys`, // 购物车接口查询
  _getCodeAndCookie: `${host}/wxtrade/volicode__png.dbys`,

  // 物流公司
  _getAllOrderList: `${host}/logist/seek_entrus.dbys`, // 物流
  _getQuotationNum: `${host}/logist/createQuatation_id.dbys`, // 置换单号
  _getOrderDetail: `${host}/logist/seekDetail_logistCompony.dbys`,
  _getDriverName: `${host}/logist/seek_driver.dbys`, // 搜索司机
  _createOrder: `${host}/logist/save_quotation.dbys`,
  _getOrderUpdate: `${host}/logist/updateQuatation_before.dbys`,
  _updateOrder: `${host}/logist/updateQuatation.dbys`,
  _getDriverList: `${host}/logist/get_driverlist.dbys`,
  _updateDirver: `${host}/logist/update_driver.dbys`,
  _addDriver: `${host}/logist/addDriver.dbys`,
  _delDirver: `${host}/logist/delete_driver.dbys`,
  _getCarList: `${host}/logist/getDriverCards.dbys`,
  _updateCar: `${host}/logist/modifyDriverCards.dbys`
}

export default {
  __getApi
}
