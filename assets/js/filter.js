let capitalize = (money) => {
  if(!money){
    return '';
  }
  let text = /^([0-9][\d]{0,10}|0)(\.[\d]{1,20})?$/;
  if(!text.test(money)){
    return '数值错误或金额过大';
  }
  money = String(Number(money).toFixed(2));
  //汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  //整型完以后的单位
  var cnIntLast = '元';
  //最大处理的数字
  var maxNum = 9999999999999.99;
  //金额整数部分
  var integerNum;
  //金额小数部分
  var decimalNum;
  //输出的中文金额字符串
  var chineseStr = '';
  //分离金额后用的数组，预定义
  var parts;
  if(money == '') { return ''; }
  money = parseFloat(money);
  if(money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if(money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if(money.indexOf('.') == -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if(parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for(var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if(n == '0') {
        zeroCount++;
      } else {
        if(zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if(m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if(decimalNum != '') {
    var decLen = decimalNum.length;
    for(var i = 0; i < decLen; i++) {
      var n = decimalNum.substr(i, 1);
      if(n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if(chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if(decimalNum == '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}


let moneyFormat = (money) => {
  if (money == ''){
    return '无'
  }else{
    if(money != null && money != 'undefined'){
      money = money.toString().replace(/,/g, "");
    }
    let num = parseFloat(money);
    let strNum = parseFloat("a");
    if (num.toString() != strNum.toString()){
      if(num == 0){
        return "无"
      }else{
        if(num >= 100000000){
          let amount = num/100000000;
          let arr = (num/100000000).toString();
          if (arr.indexOf(".") > 0){
            let strh = arr.substring(arr.indexOf(".") + 1, arr.indexOf(".") + 9);
            let str = parseInt(arr);
            num = '￥' + str.toLocaleString() + '.' + strh + "亿"
          }else{
            num = '￥' + amount.toLocaleString() + "亿"
          }
        }else{
          if(num >= 10000){
            let amount = num/10000;
            let arr = (num/10000).toString();
            if (arr.indexOf(".") > 0){
              let strh = arr.substring(arr.indexOf(".") + 1, arr.indexOf(".") + 5);
              let str = parseInt(arr);
              num = '￥' + str.toLocaleString() + '.' + strh + "万"
            }else{
              num = '￥' + amount.toLocaleString() + "万"
            }
          }else{
            num = '￥' + num.toLocaleString() + "";
          }
        }
        return num
      }
    }else{
      return "无"
    }
  }
}
let moneyForma = (money) => {
  if (money == ''){
    return '无'
  }else{
    if(money != null && money != 'undefined'){
      money = money.toString().replace(/,/g, "");
    }
    let num = parseFloat(money);
    let strNum = parseFloat("a");
    if (num.toString() != strNum.toString()){
      if(num == 0){
        return "无"
      }else{
        if(num >= 100000000){
          let amount = num/100000000;
          let arr = (num/100000000).toString();
          if (arr.indexOf(".") > 0){
            let strh = arr.substring(arr.indexOf(".") + 1, arr.indexOf(".") + 9);
            let str = parseInt(arr);
            num = str.toLocaleString() + '.' + strh + "亿"
          }else{
            num = amount.toLocaleString() + "亿"
          }
        }else{
          if(num >= 10000){
            let amount = num/10000;
            let arr = (num/10000).toString();
            if (arr.indexOf(".") > 0){
              let strh = arr.substring(arr.indexOf(".") + 1, arr.indexOf(".") + 5);
              let str = parseInt(arr);
              num = str.toLocaleString() + '.' + strh + "万"
            }else{
              num = amount.toLocaleString() + "万"
            }
          }else{
            num = num.toLocaleString()
          }
        }
        return num
      }
    }else{
      return "无"
    }
  }
}
let moneyD = (money) => {
  if (money == ''){
    return money
  }else{
    if(money != null && money != 'undefined'){
      money = money.toString().replace(/,/g, "");
    }
    let num = parseFloat(money);
    let strNum = parseFloat("a");
    if (num.toString() != strNum.toString()){
      num = num.toLocaleString()
      return num
    }else{
      return money
    }
  }
}

export {capitalize,moneyFormat,moneyForma,moneyD}
