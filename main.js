
function makeCalculation()
	{
		var n1 = document.getElementById("number1").value;
		var n2 = document.getElementById("number2").value;
		var n3 = document.getElementById("number3").value;

		function compare(tf)
				{    
					if ( tf == 0 ) return res = false;
					return res = ( tf / tf ) ? true : false;										
				}
		var com1 = compare(n1);
		var com2 = compare(n2);
		var com3 = compare(n3);		
		if (com1 == true && com2 == true && com3 == true)
			{
			n1 = parseFloat(n1);
			n2 = parseFloat(n2);
			n3 = parseFloat(n3);
			if (n1<n2+n3 && n2<n1+n3 && n3<n1+n2)
				{
				var halfPer = (n1 + n2 + n3)/2;
				var area =  Math.sqrt(halfPer*((halfPer-n1)*(halfPer-n2)*(halfPer-n3)));
				area = Math.round(area*100)/100;
				var last = document.getElementById("sides");
				var output = document.createElement("span")
				output.innerHTML = "<h2>The area of traingle is "+area+"</h2>";
				last.appendChild(output);
				}
				
			else 
				{
				var last = document.getElementById("sides");
				var output = document.createElement("span")
				output.innerHTML = "<h2>The traingle is impossible with such sides  </h2>";
				last.appendChild(output);
				}
			}
		else 
			{
			var last = document.getElementById("sides");
			var output = document.createElement("span")
			output.innerHTML = "<h2><font color = #FF0000>Error input. Please, enter F5 and try again  </h2>";
			last.appendChild(output);
			}	
	}
	