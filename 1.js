window.onload=function(){
	alert("hi");
	var home = document.getElementById("home");
	var history = document.getElementById("history");
	var calendar = document.getElementById("calendar");
	var setting = document.getElementById("setting");
	var like = document.getElementById("like");
	home.onclick = show1;
	history.onclick = show2;
	calendar.onclick = show3;
	setting.onclick = show4;
	like.onclick = show5;
	
}

//div的显示
function show1 (){
	var home = document.getElementById("content_home");
	var history = document.getElementById("content_history");
	var calendar = document.getElementById("content_calendar");
	var setting = document.getElementById("content_setting");
	var like = document.getElementById("content_like");
	like.style.display = "none";
	home.style.display = "block";
	history.style.display = "none";
	calendar.style.display = "none";
	setting.style.display = "none";
}

function show2 (){
	var home = document.getElementById("content_home");
	var history = document.getElementById("content_history");
	var calendar = document.getElementById("content_calendar");
	var setting = document.getElementById("content_setting");
	var like = document.getElementById("content_like");
	like.style.display = "none";
	home.style.display = "none";
	history.style.display = "block";
	calendar.style.display = "none";
	setting.style.display = "none";
}
function show3(){
	var home = document.getElementById("content_home");
	var history = document.getElementById("content_history");
	var calendar = document.getElementById("content_calendar");
	var setting = document.getElementById("content_setting");
	var like = document.getElementById("content_like");
	like.style.display = "none";
	home.style.display = "none";
	history.style.display = "none";
	calendar.style.display = "block";
	setting.style.display = "none";

}
function show4(){
	var home = document.getElementById("content_home");
	var history = document.getElementById("content_history");
	var calendar = document.getElementById("content_calendar");
	var setting = document.getElementById("content_setting");
	var like = document.getElementById("content_like");
	like.style.display = "none";
	home.style.display = "none";
	history.style.display = "none";
	calendar.style.display = "none";
	setting.style.display = "block";
}
function show5(){
	var home = document.getElementById("content_home");
	var history = document.getElementById("content_history");
	var calendar = document.getElementById("content_calendar");
	var setting = document.getElementById("content_setting");
	var like = document.getElementById("content_like");
	like.style.display = "block";
	home.style.display = "none";
	history.style.display = "none";
	calendar.style.display = "none";
	setting.style.display = "none";
}

//div的显示结束。。。。。


//calendar日历  开始。。。。。
	

	//计算闰年
	function leapYear(year){
		return (year%100==0? res=(year%400==0?1:0) : res=(year%4==0?1:0));
	}
	
function printCalendar(){
	document.write ("<table border='1' align='center' width='220' cellspacing='0'><tr><td align='center'>Sun</td><td align='center'>Mon</td><td align='center'>Tus</td><td align='center'>Wed</td><td align='center'>Thu</td><td align='center'>Fir</td><td align='center'>Sat</td></tr>");
	var nowDate = new Date();//获得当前日期
	var year = nowDate.getFullYear();//获得年
	var month = nowDate.getMonth();//获得月
	var date = nowDate.getDate();//获得日
	//获得当月第一天是星期几
	var firstdate = new Date(year, month, 1);
	var firstday = firstdate.getDay();
	
	var m_days = new Array(31, 28+leapYear(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	//月日历数组
	var cal = new Array();
	var counter = 1;
	for(var i=0; i<6; i++){
		
		//往表格添加行
		document.write("<tr>");
		
		cal[i]=new Array();
		if(i==0){
			for(var k = 0; k<7; k++){
				var a =  m_days[month-1]-firstday+1+k;
				(a<=m_days[month-1])?cal[i][k]=a:cal[i][k]= counter++;
				
				//往表格添加列
				if(date<7){
				cal[i][k]==date?document.write ("<td align='center' bgcolor='pink'>" + cal[i][k] + "</td>") : (cal[i][k]>7? document.write ("<td align='center' bgcolor='grey'>" + cal[i][k] + "</td>") : document.write ("<td align='center'>" + cal[i][k] + "</td>"));
				} else{
					cal[i][k]>7? document.write ("<td align='center' bgcolor='grey'>" + cal[i][k] + "</td>") : document.write ("<td align='center'>" + cal[i][k] + "</td>");
				}
			}
		} else if(i<5&&i>0){
			for(var k = 0; k<7; k++){
				cal[i][k]=counter++;
				cal[i][k]==date?document.write ("<td align='center' bgcolor='pink'>" + cal[i][k] + "</td>") : document.write ("<td align='center'>" + cal[i][k] + "</td>");
			}
		} else{
			var b = 1;
			for(var k = 0; k<7; k++){
				(counter<=m_days[month])?cal[i][k]=counter++:cal[i][k]= b++;
				
				//往表格添加列
				if(date>20){
				cal[i][k]==date?document.write ("<td align='center' bgcolor='pink'>" + cal[i][k] + "</td>") : (cal[i][k]<7? document.write ("<td align='center' bgcolor='grey'>" + cal[i][k] + "</td>") : document.write ("<td align='center'>" + cal[i][k] + "</td>"));
				} else{
					cal[i][k]<7? document.write ("<td align='center' bgcolor='grey'>" + cal[i][k] + "</td>") : document.write ("<td align='center'>" + cal[i][k] + "</td>");
				}
			}
		}
	}
	console.log(cal);
}	
printCalendar();








