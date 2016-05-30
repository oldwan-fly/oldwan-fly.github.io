function HttpRequert(url,callback){
	this.request=new XMLHttpRequest();
	this.request.open("GET",url);

	var tempRequest=this.request;

	function reqReadyStateChange(){
		if (tempRequest.readyState==4) {
			if (tempRequest.status==200) {
				callback(tempRequest.responseText);
			}else{
				alert("an error occurred trying to contact the server.");
			}
		}
	}
	this.request.onreadystatechange=reqReadyStateChange;
}

HttpRequert.prototype.send=function(){
	this.request.send(null);
}