//配合jquery库
//打开原文时务必通过记事本打开，否则编码将不再是utf8.挽救办法：重新在记事本里打开，另存为中修改编码
$.ajax({
        url: 'docs/名言.txt',
        dataType: 'text',
      }).done(successFunction1); 
	  	
	  function successFunction1(data) {
	    var allRows = data.split(/\r?\n|\r/);
		
		for(var i in allRows){
			var re=/[^\s]+/;//至少含一个非空白字符
			if(re.test(allRows[i])==false)
			allRows.splice(i,1);//删除空白行
		}
		
		var row=Math.floor(Math.random()*allRows.length);
		
		document.getElementById('slogan').innerHTML=allRows[row];
		}
