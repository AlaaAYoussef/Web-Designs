
function HoverBtn()
{
	document.getElementById('btn').style.backgroundColor = '#159676'
}
function Hover()
{
	document.getElementById('btn').style.backgroundColor = '#02b98c'

}

function show()
{
	document.getElementById('ipsum').style.visibility = 'visible';
}
function hide()
{
	document.getElementById('ipsum').style.visibility = 'hidden';
}
var i = 0;
function hovered()
{
	i = i + 1;
	document.getElementById('para').innerHTML = i;
}

function valid()
{
	var x = prompt("Whats Your Name ?");

	if(x == "alaa" || x == "Alaa")
	{
		window.location = "index.html"
	}
	else
	{
		alert('Error !!')
	}
}