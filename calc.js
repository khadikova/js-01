var sum="";
var num = document.getElementsByTagName("button");
function Num(){
	sum = sum.concat(this.value);
	document.getElementById("output").innerHTML=sum;
	}
for (var i=0; i<num.length;i++){
	num[i].addEventListener("click", Num, false);
	}

var equal = document.getElementById("equal");
equal.addEventListener("click", function(){
	document.getElementById("output").innerHTML=eval(sum);
	sum="";
	}, false);
var clearInp = document.getElementById("clearInp");
clearInp.addEventListener("click", function(){
	document.getElementById("output").innerHTML=0;
	sum="";
	}, false);