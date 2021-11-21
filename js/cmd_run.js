function cmd_execute(cmd){
	
	if(cmd=="help"){
		cmd_print(cmd_result_dict['help']);
		return(1)
	}
	if(cmd=="lib"){
		window.location.href="study.html";
		return(1)
	}
	if(cmd=="old"){
		window.location.href="first_ver.html";
		return(1)
	}
	if(cmd=="asoul"){
		cmd_print(cmd_result_dict['asoul']);
		return(1)
	}
	return(0)
}

var cmd_result_dict={/* 反斜杠用于多行字符串 */
	"help":"<table>\
				<thead><tr><th>Command</th><th>Description</th></tr></thead>\
				<tbody>\
					<tr><td>help</td><td>show the menu (command manual) of the site</td></tr>\
					<tr><td>lib</td><td>visit Isaac's personal library (chinese)</td></tr>\
					<tr><td>old</td><td>visit Isaac's old-version site (chinese)</td></tr>\
					<tr><td>asoul</td><td>know more about Isaac's favorite idols</td></tr>\
				</tbody>\
			</table>",
	"asoul":"<p>A-SOUL is a Virtual Idol group produced by Yuehua Entertainment. \
			The project is initially released on 11/23/2020,\
			and mainly streams on Bilibili and tiktok.</p>\
			<div>Members<br/>\
			<b style='color:#9ac8e2'>Ava</b><br/>\
			Ava is the gamer of this group, a typical tsundere twintail girl.<a href='https://space.bilibili.com/672346917/'>Visit her Bilibili homepage</a><br/>\
			<b style='color:#bd7d74'>Bella</b><br/>\
			Bella is the leader and key dancer of the group. She is very strict about other members' dance skills.<a href='https://space.bilibili.com/672353429/'>Visit her Bilibili homepage</a><br/>\
			<b style='color:#b8a6d9'>Carol</b><br/>\
			Carol is a cool short-hair girl. Singer of the group.<a href='https://space.bilibili.com/351609538/'>Visit her Bilibili homepage</a><br/>\
			<b style='color:#e799b0'>Diana</b><br/>\
			Diana is the sweetie beloved by all group members. She wants to become an idol only to eat delicious food all over the world.<a href='https://space.bilibili.com/672328094/'>Visit her Bilibili homepage</a><br/>\
			<b style='color:#576690'>Eileen</b><br/>\
			Eileen is knowledgeable and mature, she is like an elder-sister of the group.<a href='https://space.bilibili.com/672342685/'>Visit her Bilibili homepage</a><br/>\
			</div><br/>\
			<div>Group mascot (& staff)<br/>\
			<b>Acao</b>\
			A cute alpaca, the operations staff of the group, runs the official account of the A-SOUL.<a href='https://space.bilibili.com/703007996'>Visit his Bilibili homepage</a>\
			</div>\
			"
}

function cmd_print(text){
	var cmd_output=document.getElementById("cmd_output");
	cmd_output.innerHTML+="<div>"+"<br/>"+">>"+text+"</div>"+"<br/>";
}