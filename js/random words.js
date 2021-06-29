		//必须在前面添加<script src="js/jquery.js"><////script>
		//csv编码问题:在excel打开后,需要在"记事本"打开,另存为"utf8"编码
		//html配合<div id="wordlist"></div>即可使用
		$.ajax({
        url: 'docs/GREword.csv',
        dataType: 'text',
      }).done(successFunction); 
		
	  function successFunction(data) {
        var allRows = data.split(/\r?\n|\r/);//全文被分成很多列
        var table = '<div>随机单词推送，可手动刷新<table style="border: 1px solid black; margin: 0 auto;">';
		table += '<thead><tr><th>单词</th><th>中文释义</th></tr></thead>';
		table += '<tbody>';
		
		var pos=new Array();//这几行代码随机生成词汇的位置
		pos.push(0);//排除文件首行
		num=10;//单词数=num
		while(pos.length<=num){
			var ran=Math.floor(Math.random()*allRows.length);
			if(pos.indexOf(ran)==-1){//确定ran不在pos中
			pos.push(ran);
			if (ran === 0) {//ran=0意味着第一行
			    table += '<thead>';
			    table += '<tr>';
			  } else {
			    table += '<tr>';
			  }
			  var rowCells = allRows[ran].split(',');//单行被分成各个td
			  for (var rowCell = 1; rowCell < rowCells.length; rowCell++) {//序号没了
			    if (ran === 0) {
			      table += '<th>';
			      table += rowCells[rowCell];
			      table += '</th>';
			    } else {
			      table += '<td>';
			      table += rowCells[rowCell];
			      table += '</td>';
			    }
			  }
			  if (ran === 0) {
			    table += '</tr>';
			    table += '</thead>';
			    table += '<tbody>';
			  } else {
			    table += '</tr>';
			  }
			}
		}
		
        // for (var singleRow = 0; singleRow < allRows.length; singleRow++) {//遍历输出
        //   if (singleRow === 0) {//singleRow=0意味着第一行
        //     table += '<thead>';
        //     table += '<tr>';
        //   } else {
        //     table += '<tr>';
        //   }
        //   var rowCells = allRows[singleRow].split(',');//单行被分成各个td
        //   for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        //     if (singleRow === 0) {
        //       table += '<th>';
        //       table += rowCells[rowCell];
        //       table += '</th>';
        //     } else {
        //       table += '<td>';
        //       table += rowCells[rowCell];
        //       table += '</td>';
        //     }
        //   }
        //   if (singleRow === 0) {
        //     table += '</tr>';
        //     table += '</thead>';
        //     table += '<tbody>';
        //   } else {
        //     table += '</tr>';
        //   }
        // } 
        table += '</tbody>';
        table += '</table></div>';
		//var wordlist=document.querySelectorAll("div[id='wordlist']");
        document.getElementById('wordlist').innerHTML=table;
      }