
window.onload = function () {
  document.getElementById('imgs').addEventListener('click', 
  function () {
    document.getElementById('hidFilePath').click();
  });
  console.log('~~');
};

// 上传文件
function uploadImg(fileDOM) {
  var file = fileDOM.files[0], // 获取文件
    imageType = /^image\//,
    reader = '';
  // 获取图片DOM
  var img = document.getElementById('imgs');
  var msgs = document.getElementById('msgs');

  // 文件是否为图片
  if (!imageType.test(file.type)) {
    alert('我们需要的是您失物的照片哦！');
    return;
  }

  // 判断是否支持FileReader
  if (window.FileReader) {
    reader = new FileReader();
  } else {
    // IE9及以下不支持FileReader
    alert('很抱歉！您的浏览器不支持图片预览功能，如需该功能请升级您的浏览器！');
    return;
  }

  // 读取完成
  reader.onload = function (event) {
    // 图片路径设置为读取的图片
    img.src = event.target.result;
  };
  
  reader.readAsDataURL(file);
  img.alt = msgs.getAttribute('alt');
}

function submitForm() {
  var name = document.getElementById('name');
  var place = document.getElementById('place');
  var msgs = document.getElementById('msgs');
  var imgs = document.getElementById('imgs');
  if (name.value.trim() == '' || name.value.length == 0) {
    alert('物品名称不能为空！');
  } else if (place.value.trim() == '' || place.value.length == 0) {
    alert('丢失地点不能为空！');
  } else if (msgs.value.trim() == '' || msgs.value.length == 0) {
    alert('物品描述不能为空！');
  } else if (msgs.value.length > 10) {
    alert('物品描述请不要超过10个字！');
  } else if (imgs.src == './addPhoto.png' || imgs.alt == '请添加图片') {
    alert('图片不能为空！');
  } else {
    token = getTokenFromCookie("token");
    jsonString = parsetoken(token);
    info = JSON.parse(jsonString);
    userid = info.userid;
    var formData = new FormData();
    var files = $("#hidFilePath").prop("files");
    formData.append("userid", userid);
    formData.append("name", $("#name").val());
    formData.append("place", $("#place").val());
    formData.append("detail", $("#msgs").val());
    formData.append("file", files[0]);
    $.ajax({
      url: "/lost_item/submit",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      dataType: "JSON",
      success: function (json) {
        if (json.state == 200) {
          alert("提交成功！");
        } else {
          alert(json.message);
        }
      },
      error: function (xhr) {
        alert("提交信息时产生异常！" + xhr.message);
      }
    })
  }
}

function isEmpty(obj) {
  if (obj.value.trim() == '' || obj.value.length == 0) {
    return false;
  }
}

