
function openGame(){
	console.log("GAME");
	// targeting container
	$('.game-container').show();
	$('.highscore-container').hide();
	$('#but-game').addClass("tab-active");
	$('#but-highscore').removeClass("tab-active");
}

function openHighscore(){
	console.log("HIGHSCORE");
	$('.game-container').hide();
	$('.highscore-container').show();
	$('#but-game').removeClass("tab-active");
	$('#but-highscore').addClass("tab-active");
}

function closeIntroPopin(){
	$(".intro-popin-container").fadeOut();
	initialise();
}

function initialise(){

	for(var i=0;i<20;i++){
		var card="<div class='flip-card'><div class='flip-card-inner' id='card"+i+"' onclick='selectCard("+i+")'><div class='flip-card-front'></div><div class='flip-card-back'></div></div></div>";
		$(".card-container").append(card);

	}
}

function selectCard(id){
	console.log("card id ", id);
	var cardID = "#card"+id;

	if(!$(cardID).hasClass('rotate180')){
		$(cardID).addClass('rotate180');
	}
}