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
		api.request("users/self", undefined, function(data) {  
        document.getElementById('username').innerHTML = data.data.username;
		document.getElementById('bio').innerHTML = data.data.bio;
        document.getElementById('full_name').innerHTML = data.data.full_name;
		document.getElementById('media').innerHTML = data.data.counts.media;
		document.getElementById('follows').innerHTML = data.data.counts.follows;
		document.getElementById('followed_by').innerHTML = data.data.counts.followed_by;
		
		
		
		obj = data.data.profile_picture;
		myFunction()
    });
  };

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

function myFunction() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', obj, true);
	xhr.responseType = 'blob';
	xhr.onload = function(e) {
	var img = document.getElementById('UserPic');
	  img.src = window.URL.createObjectURL(this.response);
	  
	};

	xhr.send();
}

