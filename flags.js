$(function(){

	var br = $('<div/>');
	br.append($('<div/>',{text:'Brazil'}));
	br.append($('<img/>',{src:'file:///C:/worldz/static/flags/br.gif'}));

	var fr = $('<div/>');
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'file:///C:/worldz/static/flags/fr.gif'}));

	var gr = $('<div/>');
	gr.append($('<div/>',{text:'Greece'}));
	gr.append($('<img/>',{src:'file:///C:/worldz/static/flags/gr.gif'}));

	$('body').append(br,fr,gr);
	$('img').css('border','solid 3px gray');
	$('div div').css('text-align','center');
	$('body').css('text-align','center');
	$('img').css('width',200);
	$('img').css('font-family','arial');
	$('img').css('font-size','x-large');
	

	$('body>div').css({
		width:"206",
		border:"2px solid black",
		padding:"24px",
		display:"inline-block",
		margin:"1ex"
	})

var clist=[
	["br","Brazil"],
	["fr","France"],
	["gr","Greece"],
	["za","South Africa"]
	
 ];
 $(function(){
 	createOne();
 })
 function createOne(){
 	var i=Math.floor(clist.length*Math.random());
 	var code = clist[i][0];
 	var name = clist[i][1];
 	var qu=$('<div id="qu"/>');
 	qu.append($('<div/>',{text:name,id:'ans'}));
 	qu.append($('<img/>',{src:code+'.gif'}));
 	$('body').append(qu);
 	
 	qu.append($('<div/>',{text:name,id:'ans'}).hide());
 	qu.append($('<input/>',{id:'response'}));
$('#response').keyup(function(){
 	if($('#response').val()==$('#ans').text()){
 		alert("Well Done");
 	}
 });
}
	});

