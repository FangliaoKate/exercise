function checkName() {
	var name=document.getElementById("name").value;
	var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    if(reg.test(name)==false){
		document.getElementById("name").placeholder="用户名由4-16位英文字母和数字组成";
		return false;
    } else {
		return true;
	}
}

function checkPwd() {
	var pwd=document.getElementById("pwd").value;
	var reg=/^[a-zA-Z0-9]{4,10}$/;   
    if(reg.test(pwd)==false){
       console.log("用户名由英文字母和数字组成的4-16位字符，以字母开头。。。。密码由英文字母和数字组成的4-10位字符");
    return false;
      }
}

function checkRepwd() {
	var repwd=document.getElementById("repwd").value;
	var pwd=document.getElementById("pwd").value;   
    if(pwd!=repwd){
       console.log("用户名由英文字母和数字组成的4-16位字符，以字母开头。。。。密码由英文字母和数字组成的4-10位字符");
    return false;
      }
}