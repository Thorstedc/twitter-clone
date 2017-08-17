$(document).ready(function() {
  $(".button").hide();
  $("#char-count").hide();
  $(".tweet-compose").on("click", function(){
    $(".button").show();
    $("#char-count").show();
    $(".tweet-compose").css("height", "5em");
  })

  $(".tweet-compose").on("keyup", function(){
    var count = $(".tweet-compose").val().length;
    $("#char-count").text(140 - count);

    if (count >=130) {
    $("#char-count").css("color", "red");
  } else {
    $("#char-count").css("color", "black");
  }
  if (count >= 140) {
    $(".button").hide();
    $("#char-count").text("too many characters");
  }
});

  $(".button").on("click", function(){
    var myTweetText = $(".tweet-compose").val();
    $("#stream").prepend(
      '<div class="tweet">' +
				'<div class="content">' +
					'<img class="avatar" src="http://www.todayifoundout.com/wp-content/uploads/2010/10/saltine-crackers.jpg" />' +
					'<strong class="fullname">The Cracker</strong>' +
					'<span class="username">@notcrackbro</span>' +
					'<p class="tweet-text">' + myTweetText + '</p>' +
					'<div class="tweet-actions">' +
						'<ul>' +
							'<li><span class="icon action-reply"></span> Reply</li>' +
							'<li><span class="icon action-retweet"></span> Retweet</li>' +
							'<li><span class="icon action-favorite"></span> Favorite</li>' +
							'<li><span class="icon action-more"></span> More</li>' +
						'</ul>' +
					'</div>' +
					'<div class="stats">' +
						'<div class="retweets">' +
							'<p class="num-retweets">30</p>' +
							'<p>RETWEETS</p>' +
						'</div>' +
						'<div class="favorites">' +
							'<p class="num-favorites">6</p>' +
							'<p>FAVORITES</p>' +
						'</div>' +
						'<div class="users-interact">' +
							'<div>' +
								'<img src="img/jennyshen.jpg" />' +
								'<img src="img/damenleeturks.jpg" />' +
							'</div>' +
						'</div>' +
						'<div class="time">' +
							'1:04 PM - 19 Sep 13' +
						'</div>' +
					'</div>' +
					'<div class="reply">' +
						'<img class="avatar" src="img/alagoon.jpg" />' +
						'<textarea class="tweet-compose" placeholder="Reply to @theonion"/></textarea>' +
					'</div>' +
				'</div>' +
			'</div>'
    );
    $(".tweet-compose").val('');
    var count = $(".tweet-compose").val().length;
    $("#char-count").text(140 - count);



  })





})
