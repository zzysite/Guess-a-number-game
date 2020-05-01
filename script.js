//获取按钮对象
var btn = document.getElementById('btn');
//创建1-1000以内的随机数
var number = Math.floor(Math.random()*1000+1);

//创建按钮事件
btn.onclick = function () {
  //获取文本框的值
  var text = document.getElementById('text').value;
  if (text == number) {
    alert("猜对了！");
    number = Math.floor(Math.random()*1000+1)
  }else if (text > number) {
    alert("猜大了");
  }else if (text < number) {
    alert("猜小了");
  }else {
    alert("请输入1-1000以内的数字！")
  }
}
