//configure RequireJS
require.config({
	// This tells RequireJS where to find Ractive and rv
	paths: {
		ractive: 'js/lib/ractive.min',
		rv: 'js/loaders/rv',
		prgBar :'js/Component/progBarComp'
	},
	waitSeconds: 40,
	name: 'main',
});

var bar1;
var bar2;
var bar3;

var Options = [
  { name: 'Progress Bar 1', idx:'prgBr1'},
  { name: 'Progress Bar 2', idx:'prgBr2'},
  { name: 'Progress Bar 3', idx:'prgBr3'}];
 
var buttonData = [
  { text: '-10'},
  { text: '-25'},
  { text: '+10'},
  { text: '+25'}];

// Load our dependencies and start
require([ 'prgBar', 'ractive', 'rv!js/templates/main' ], function (prgBar, Ractive, mainTemplate ) {

	'use strict';
	
	var ractive = new Ractive({
		el: 'main',
		template: mainTemplate,
		data: {
			Options: Options,
			selectedOptions: Options[0],
			buttonData : buttonData,
			retriveButton : buttonData[0]
		},
		onrender: function () {
			bar1 = new progress_bar(document.getElementById('progress_bar1'));
			bar1.set_percentage(25);
			
			bar2 = new progress_bar(document.getElementById('progress_bar2'));
			bar2.set_percentage(50);
			
			bar3 = new progress_bar(document.getElementById('progress_bar3'));
			bar3.set_percentage(75);
		}
	});
	
	var div = null;
	ractive.observe( 'selectedOptions', function ( options ) {
	   console.log('sssss', options.idx );
	   
	   if(options.idx == 'prgBr1'){
		   div = bar1;
	   }else if(options.idx == 'prgBr2'){
		   div = bar2;
	   }else if(options.idx == 'prgBr3'){
		   div = bar3;
	   }
	});
	
	ractive.on( 'activate', function (event, prgBr) {
		event.original.preventDefault()
		div.set_percentage(parseInt(event.node.innerText));
	});

});