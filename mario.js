
printPyramid(19, '$');
redraw();
$('#num').change(setNum());
	function setNum()
	{
		$('#res').html($('#num').val());
	}

	function clear()
	{		
		$('#pyramide').children().filter('p').remove();
	}
	function redraw()
	{	
		clear();
		printPyramid($('#num').val(), $('#nodes').val());
		setNum();
	}

	
function printPyramid(height, symbol) 
	{

	
		for(i = 1; i <= height; i++)
		{
			var str = '';
			
			for(i2 = 1; i2 <= (height - i); i2++)
			{
				if(height - i == 0) continue;
				str += " ";
			}
			str += symbol;
			for(i3 = 0; i3 < i; i3++)
			{
				str += symbol;
			}
			$('#pyramide').append(node(str));
		}
		
	}
	function node(text)
	{
		var nd = $('<p>');
		var nd2 = $('<pre>');
		nd2.html(text);
		nd.append(nd2);
		return nd;
	}