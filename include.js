function showMessage() {
  var div = document.getElementById("orgMessage");
  var messages = JSON.parse(this.responseText);
  var today = new Date();

  div.innerHTML = "";
  for (var i = 0; i < messages.length; i++) {
    var dateStart = new Date(messages[i].dateStart);
    var dateEnd = new Date(messages[i].dateEnd + 1);

    if (today > dateStart && today <= dateEnd) {
      div.innerHTML += "<p>" + messages[i].title + "</p>";
      div.innerHTML += "<p>" + messages[i].message + "</p>";
    }
  }
}

function xhrSuccess() {
  this.callback.apply(this, this.arguments);
}

function xhrError() {
  console.error(this.statusText);
}

function loadFile(url, callback) {
  if ("undefined" == typeof url) return false;

  var xhr = new XMLHttpRequest();
  xhr.callback = callback;
  xhr.onload = xhrSuccess;
  xhr.onerror = xhrError;
  xhr.open("GET", url, true);
  xhr.send(null);
}

function foo(response) {
  var div = document.getElementById("orgMessage");
  var messages = JSON.parse(response);
  var today = new Date();

  div.innerHTML = "";
  for (var i = 0; i < messages.length; i++) {
    var dateStart = new Date(messages[i].dateStart);
    var dateEnd = new Date(messages[i].dateEnd + 1);

    if (today > dateStart && today <= dateEnd) {
      div.innerHTML += "<p>" + messages[i].title + "</p>";
      div.innerHTML += "<p>" + messages[i].message + "</p>";
    }
  }
}

var script = document.createElement("script");
script.src = "./jsonp?callback=foo";
