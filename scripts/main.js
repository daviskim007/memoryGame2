var cardContent = ['1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9','10'];
var cardClicks = 0;

var firstSelection;
var secondSelection;
var previousCard;

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

	cardContent = shuffle(cardContent);

	for(var i=0;i<20;i++){
		var card="<div class='flip-card'><div class='flip-card-inner' id='card"+i+"' onclick='selectCard("+i+","+cardContent[i]+")'><" +
			"div class='flip-card-front'></div><div class='flip-card-back' style='background-image: " +
			"url(img/card"+cardContent[i]+".png)'></div></div></div>";

		$(".card-container").append(card);

	}
}

function selectCard(id,current){
	console.log(id, current);
	var cardID = "#card"+id;

	if(!$(cardID).hasClass('rotate180' && cardClicks!=2) & cardClicks !=2){
		$(cardID).addClass('rotate180');

		cardClicks++;

		if (cardClicks==1){
			firstSelection = current;
			previousCard = cardID;
		}

		if (cardClicks==2){
			secondSelection = current;

			if(firstSelection == secondSelection){
				console.log('Match!!');

				setTimeout(function(){
					cardClicks=0;
				},500)
			}else{
				setTimeout(function(){
					$(cardID).removeClass('rotate180');
					$(previousCard).removeClass('rotate180');
					cardClicks=0;
				},500)

			}

		}
	}

}

function shuffle(arra1) {
	var ctr = arra1.length, temp, index;

// While there are elements in the array
	while (ctr > 0) {
// Pick a random index
		index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
		ctr--;
// And swap the last element with it
		temp = arra1[ctr];
		arra1[ctr] = arra1[index];
		arra1[index] = temp;
	}
	return arra1;
}