onload = function() {
	var inicio = document.getElementById("inicio");
	var exit = document.getElementById("exit");
	var perfil = document.getElementById("perfil");


	chrome.app.window.current().fullscreen();
	inicio.onclick = function() {
	  chrome.app.window.current().close();
	  chrome.app.window.create("/media.html");
	}
	perfil.onclick = function() {
	  chrome.app.window.current().close();
	  chrome.app.window.create("/perfil.html");
	}
	exit.onclick = function() {
	  chrome.app.window.current().close();
	} 


      var accessToken = "5619189465.1677ed0.e3a3f4521b0145d0b820b57cdf6fa007";
      var api = new InstagramAPI(accessToken);
      api.request("users/self/media/recent", undefined, function(data) {  
        for(var i = 0; i < 12; i++){
          obj = data.data[i].images.standard_resolution.url;
          DisplayRecentMedia(i,obj);
        };
      });
}

function DisplayRecentMedia(i,obj) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', obj, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
    var img = document.getElementById('mediaimg' + i);
      img.src = window.URL.createObjectURL(this.response);
    }
    xhr.send();
}

var InstagramAPI = function(accessToken) {
  this.request = function(method, arguments, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      callback(JSON.parse(xhr.response));
    };
    xhr.open("GET", "https://api.instagram.com/v1/" + method + "?access_token=" + accessToken);
    xhr.send();
  };
}
