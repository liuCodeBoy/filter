function getAjax(httpUrl,data,callback){
	var xhr = new XMLHttpRequest()
	xhr.open("GET",httpUrl+parseData(data))
	xhr.send()
	// 监听后台返回数据
	xhr.onreadystatechange = function(){
		if(xhr.status==200&&xhr.readyState==4){
			callback(xhr)
			// var res = xhr.response;
			// var h1 = document.createElement("h1")
			// h1.inn rHTML = res;
			// document.body.appendChild(h1)
		} 	
	}
	
}

function getAjax(httpUrl,callback){
	var xhr = new XMLHttpRequest()
	xhr.open("GET",httpUrl)
	xhr.send()
	// 监听后台返回数据
	xhr.onreadystatechange = function(){
		if(xhr.status==200&&xhr.readyState==4){
			callback(xhr)
			// var res = xhr.response;
			// var h1 = document.createElement("h1")
			// h1.inn rHTML = res;
			// document.body.appendChild(h1)
		} 	
	}
	
}
function parseData(data){
		var str = "?"
		for(var key in data){
			console.log(key)
			str = str + key + "=" + data[key]+"&"
		}
		return str.substr(0,str.length-1)
	}