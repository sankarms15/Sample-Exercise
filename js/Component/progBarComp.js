function progress_bar(container){
	var bar = document.createElement('div');
	var text = document.createElement('div');
		
	bar.style.width			= '0px';
	bar.style.height		= '100%';
	//bar.style.background	= '#eef';
	bar.className = 'prg-blue-color';
	
	container.appendChild(bar);
	
	text.style.marginTop	= '-26px';
	text.style.textAlign	= 'center';
	text.style.color		= '#111';
	text.style.textSize		= '15px';
	
	text.appendChild(document.createTextNode('0%'));
	container.appendChild(text);
	
	var displayPrecentVal = 0;
	this.set_percentage =function(percentage){
		var percents = 0;
		var isPercentage = /%$/.test( bar.style.width );
		if(displayPrecentVal >= 100){
			displayPrecentVal += percentage;
		}
		if(displayPrecentVal < 100){
			if(isPercentage){
				percents = parseInt(bar.style.width) + percentage;
				if(percents <= 0){
					percents = 0;
					displayPrecentVal = 0;
				}
				if(percents > 100){
					percents = 100;
					displayPrecentVal += percentage;
				}else{
					displayPrecentVal = percents;
				}
				bar.style.width	= Math.abs(percents) + '%';
				
			}else{
				displayPrecentVal = percentage;
				bar.style.width	= percentage+ '%';
			}
		}
		
		if(displayPrecentVal > 100){
			bar.className = bar.className.replace( /(?:^|\s)prg-blue-color(?!\S)/g , '' );
			bar.className = 'prg-red-color';
			text.style.color = "#fff";
		}else{
			bar.className = bar.className.replace( /(?:^|\s)prg-red-color(?!\S)/g , '' );
			bar.className = 'prg-blue-color';
			text.style.color = "#111";
		}
		
		text.removeChild(text.firstChild);
		text.appendChild(document.createTextNode(displayPrecentVal + '%'))
	}
	
}


function returnPer(per){
	return (per === 25)
}