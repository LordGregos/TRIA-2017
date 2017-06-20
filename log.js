onload = function() {
	var login = document.getElementById("login");
	var salir = document.getElementById("salir");	
	chrome.app.window.current().fullscreen();
	login.onclick = function(){
	  chrome.app.window.current().close();
	  chrome.app.window.create("/media.html");
	}
	salir.onclick = function() {
	  chrome.app.window.current().close();
	}
};
