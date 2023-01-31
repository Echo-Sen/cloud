window.onload = function () {
  var imgs = document.getElementsByTagName('img');
  var ps = document.getElementsByTagName('p');
  var mask = document.getElementById('mask');
  var close = document.getElementById('close');
  var apply = document.getElementById('apply');
  var activityName = document.getElementById('activityName');
  var time = document.getElementById('time');
  var tel = document.getElementById('tel');
  var detail = document.getElementById('detail');
  var activityId = document.getElementById("activityId");
  var per = [
    { tel: 13652342328, time: 227822, place: 'xxxx', activityid: 1 },
    { tel: 15223612345, time: 427242, place: 'sss', activityid: 2 },
    { tel: 17523496688, time: 444, place: 'ddd', activityid: 3 },
    { tel: 13674288899, time: 252527, place: 'fff', activityid: 4 },
    { tel: 17888992323, time: 72727, place: 'zzzz', activityid: 5 },
    { tel: 13629384799, time: 72727, place: 'zzzz', activityid: 6 },
  ];
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].index = i;
    imgs[i].addEventListener('click', function () {
      mask.style.display = 'block';
      activityName.innerHTML = this.alt;
      time.value = per[this.index].time + '' + per[this.index].place;
      tel.value = per[this.index].tel;
      detail.innerHTML = ps[this.index].innerHTML;
      activityId.value = per[this.index].activityid;
    });
  }


  close.addEventListener('click', function () {
    mask.style.display = 'none';
  });

  apply.addEventListener('click', function () {
    applySuc();
  });
};

function applySuc() {
  //报名前提示用户确认
  //返回值是一个布尔类型
  var ok = window.confirm('你确认要报名吗？');
  if (ok) {
    token = getTokenFromCookie("token");
    jsonString = parsetoken(token);
    info = JSON.parse(jsonString);
    document.getElementById("userid").value = info.userid;
    $.ajax({
      url: "/volunteer/join",
      type: "POST",
        data: $("#form-join").serialize(),
        dataType: "JSON",
        success: function (json) {
          if (json.state == 200) {
            alert('报名成功');
            mask.style.display = 'none';
          } else {
            alert('报名失败');
            mask.style.display = 'none';
          }
        },
        error: function (xhr) {
          alert("报名时产生异常！" + xhr.message);
        }
      })
    };
}
