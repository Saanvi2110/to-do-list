function newElement() {
	var ip=document.getElementById('myInput');
	var ul=document.getElementById('myUL');
	var li=document.createElement('li');
	var ans=ip.value;
	li.setAttribute('id','ans');
	var a=document.createTextNode(ans);
	li.appendChild(a);


   var span=document.createElement('span');
   var txt=document.createTextNode("\u00d7");
   span.className='close';
   span.appendChild(txt);
   span.addEventListener('click',function(){
   	li.remove();
 });
 if(ans === ''){
 	alert("INVALID INPUT");
 }
  else
{
   li.appendChild(span);
   ul.appendChild(li);
}
}