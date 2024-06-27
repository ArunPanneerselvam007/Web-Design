i=0;
let si=setInterval(next,3000);
let img1=new Array("pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg");


function next()
{
	let p=document.getElementById('pic');
	p.src=img1[i];
	i++;
	if(i==img1.length)
	{
		i=0;
	}
}
function prev()
{
	
	let p=document.getElementById('pic');
	p.src=img1[i];
	i--;
	if(i==0)
	{
		i=img1.length-1;
	}
}	
