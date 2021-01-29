const cart = [];

document.getElementById("confirm").disabled = true;
function addToCart(name, price)
{
	var o = new Object();
	o.name = name;
	o.price = price;
	cart.push(o);
	redraw();
	console.log(cart);
}
function redraw()
{
	if(cart.length > 0) document.getElementById("confirm").disabled = false;
	$('#subtotal').html('subtotal: ' + subsum())	
	$('#total').html('total: ' + sum())	
	
}
function sum()
{
	let sum = 0;
	for(i = 0; i < cart.length; i++)
	{
		let num = cart[i];
		sum += num.price;
	}
		sum *= 1.1;
	return sum;
}
function subsum()
{
	let sum = 0;
	for(i = 0; i < cart.length; i++)
	{
		let num = cart[i];
		sum += num.price;
	}
	return sum;
}

function goToForm()
{
	 console.log(cart);
	 location.href = "shipping form.html"
}
function log()
{
	console.log(cart);
}
function result()
{
	let o = new object();
	o.Name = document.getElementById("Name");
	o.Surname = document.getElementById("Surname");
	o.Postcode = document.getElementById("Postcode");
	o.PhoneNumber = document.getElementById("Phone number");
	alert(o);
}