// 请求接口
/**
 *
 * @param {*} url 接口地址 string
 * @param {*} params 参数 object
 * @param {*} success 回调
 * @param {*} error 回调
 * @param {*} option 自定义选项
 */
function httpClient(url, params, success, error, option) {
  url = url;// 拼接请求地址
  option = option ? option : {}
  option.type = option.type ? option.type : 'post'
  option.client = option.client ? option.client : 'm'
  option.dataType = option.dataType ? option.dataType : 'json'
  option.loading = option.loading ? option.loading : 2 // 2 显示loading也是默认值
  var success = arguments[2] ? arguments[2] : function () { };// 成功执行的函数
  var error = arguments[3] ? arguments[3] : function () { };// 失败执行的函数
  // console.log('请求地址', url);
  // console.log('请求参数', params);
  // console.log('请求配置', option)
  try {
    $.ajax({
      url: url,
      type: option.type,
      dataType: option.dataType,
      data: params, // 参数
      // cache:false, // dns缓存清除
      // beforeSend: function(xmlHttp){
      //   xmlHttp.setRequestHeader("If-Modified-Since","0");
      //   xmlHttp.setRequestHeader("Cache-Control","no-cache");
      // },
      success: function (res) {
        // console.log('请求成功', res);
        success(res)
      },
      error: function (res) {
        // console.log('响应失败', res);
        error(res)
      }
    })
  } catch (error) {
    console.error(error);
    alert('加载异常！请稍后再试')
  }
}

// 获取地址栏参数 实例化即可 返回object
function UrlSearch() {
  var name, value;
  var str = location.href;
  var num = str.indexOf("?")
  str = str.substr(num + 1);

  var arr = str.split("&");
  for (var i = 0; i < arr.length; i++) {
    num = arr[i].indexOf("=");
    if (num > 0) {
      name = arr[i].substring(0, num);
      value = arr[i].substr(num + 1);
      this[name] = value;
    }
  }
}

/**
* 动态设置网页TDK title description keywords
* let head =  { t: 123, d: 456, k: 789}
* @param {*} head 传一个对象进来。
*/
function setPageTdk(headinfo) {
  document.title = headinfo.t
  $("meta[name='description']").attr('content', headinfo.d)
  $("meta[name='keywords']").attr('content', headinfo.k)
}
