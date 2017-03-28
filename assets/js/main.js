// 
var endOfIntro = 0;
var done = 1;
var showText = function (target, message, index, interval) {   
	done = 0;
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
	if (index === message.length) {
		done = 1;
	}
};

function setUpOptions() {
	$( '#introHelper' ).animate({
		opacity: 0
	}, 500, function() {
		$( "#CenterText" ).animate({
		height: "40vh"
	}, 2000, function(){});
	$( '#introText' ).animate({
		fontSize: '75px'
	}, 2000, function(){});
	});
	
	
}

function nextText() {
	var curText = $('#introtext');
	var nexText = $('#TextForSite .active');
	var newText = $('#TextForSite .active').next();
	if (newText.length < 1 ) {
		endOfIntro = 1;
		setUpOptions();
		return;
	}
	/*curText.css('display', 'none');
	curText.text(nexText.text());
	console.log(curText.text());
	curText.css('display', 'block');*/
	curText.text('');
	showText(curText, nexText.text(), 0, 100);
	nexText.removeClass('active');
	newText.addClass('active');
	done = 0;
	console.log(newText);
}

$( document ).ready(function() {
	document.body.onkeyup = function(e){
		if(e.keyCode === 32){
			if ( endOfIntro === 0 && done === 1 ) {
				nextText();
			}
		}
	};
	$( '#CenterText' ).on('touchstart', function(){
		if ( endOfIntro === 0 && done === 1) {
				nextText();
		}
	});
});