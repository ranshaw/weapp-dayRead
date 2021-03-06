function getCurrentTime() {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  // var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
  return keep;
}

function _formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(_formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(_formatNumber).join(':')
  );
}

function objLength(input) {
  var type = toString(input);
  var length = 0;
  if (type !== '[object Object]') {
    // throw "输入必须为对象{}！"
  } else {
    for (var key in input) {
      if (key !== 'number') {
        length++;
      }
    }
  }
  return length;
}
// 浮点型除法
function div(a, b) {
  let c;
  let d;
  let e = 0;
  let f = 0;
  try {
    e = a.toString().split('.')[1].length;
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length;
  } catch (g) {}
  return (
    (c = Number(a.toString().replace('.', ''))),
    (d = Number(b.toString().replace('.', ''))),
    mul(c / d, Math.pow(10, f - e))
  );
}
// 浮点型加法函数
function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((arg1 * m + arg2 * m) / m).toFixed(2);
}
// 浮点型乘法
function mul(a, b) {
  var c = 0;
  var d = a.toString();
  var e = b.toString();
  try {
    c += d.split('.')[1].length;
  } catch (f) {}
  try {
    c += e.split('.')[1].length;
  } catch (f) {}
  return (Number(d.replace('.', '')) * Number(e.replace('.', ''))) / Math.pow(10, c);
}

// 遍历对象属性和值
function displayProp(obj) {
  var names = '';
  for (var name in obj) {
    names += name + obj[name];
  }
  return names;
}
// 去除字符串所有空格
function sTrim(text) {
  return text.replace(/\s/gi, '');
}
// 去除所有:
function replaceMaohao(txt) {
  return txt.replace(/:/gi, '');
}
// 转换星星分数
function convertStarArray(score) {
  // 1 全星,0 空星,2半星
  var arr = [];
  for (var i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1);
    } else if (score > i - 1 && score < i + 1) {
      arr.push(2);
    } else {
      arr.push(0);
    }
  }
  return arr;
}
// 函数节流
function throttle(fn, me, gapTime) {
  if (gapTime === null || gapTime === undefined) {
    gapTime = 2000;
  }

  let _lastTime = null;

  return function() {
    let _nowTime = +new Date();
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments);
      _lastTime = _nowTime;
    }
  };
}
module.exports = {
  getCurrentTime,
  objLength,
  displayProp,
  sTrim,
  replaceMaohao,
  div,
  mul,
  accAdd,
  convertStarArray,
  formatTime,
  throttle,
};
