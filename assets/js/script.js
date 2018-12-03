$(document).ready(function() {
	$("#navbar").hide();
	$("#navbar-container").hover(function() {
		$("#navbar").slideToggle(300);
	});

	$("#greeting").hide().delay(500).fadeIn(1000);
	$("#introduction").hide().delay(1500).fadeIn(1000);
	$("#description").hide().delay(2500).fadeIn(1000);

	var strawberry = document.getElementById("sff");
    $("#strawberry-field").click(function() {
    	strawberry.paused ? strawberry.play() : strawberry.pause();
    });
    $("#strawberry-field").hover(function() {
        $("#strawberry-field").attr("src", "assets/img/strawberry-fields-forever.gif");
    }, function() {
        $("#strawberry-field").attr("src", "assets/img/strawberry-field.jpg");
    });

    $("#la-la-land").hover(function() {
    	$("#la-la-land").attr("src", "assets/img/la-la-land.gif");
    }, function() {
    	$("#la-la-land").attr("src", "assets/img/la-la-land.jpg");
    });
    $("#interstellar").hover(function() {
    	$("#interstellar").attr("src", "assets/img/interstellar.gif");
    }, function() {
    	$("#interstellar").attr("src", "assets/img/interstellar.jpg");
    });
    $("#himym").hover(function() {
    	$("#himym").attr("src", "assets/img/himym.gif");
    }, function() {
    	$("#himym").attr("src", "assets/img/himym.jpg");
    });
    $("#office").hover(function() {
    	$("#office").attr("src", "assets/img/office.gif");
    }, function() {
    	$("#office").attr("src", "assets/img/office.jpg");
    });

    $("#federer").hover(function() {
    	$("#federer").attr("src", "assets/img/federer.gif");
    }, function() {
    	$("#federer").attr("src", "assets/img/federer.jpg");
    });
    $("#corgi").hover(function() {
    	$("#corgi").attr("src", "assets/img/corgi.gif");
    }, function() {
    	$("#corgi").attr("src", "assets/img/corgi.jpg");
    });
    $("#lfc").hover(function() {
    	$("#lfc").attr("src", "assets/img/istanbul.gif");
    }, function() {
    	$("#lfc").attr("src", "assets/img/lfc.jpg");
    });
    $("#usmnt").hover(function() {
    	$("#usmnt").attr("src", "assets/img/pulisic.gif");
    }, function() {
    	$("#usmnt").attr("src", "assets/img/usmnt.jpg");
    });
    $("#hamster").hover(function() {
    	$("#hamster").attr("src", "assets/img/hamster.gif");
    }, function() {
    	$("#hamster").attr("src", "assets/img/hamster.jpg");
    });
    $("#nature").hover(function() {
    	$("#nature").attr("src", "assets/img/hiking.gif");
    }, function() {
    	$("#nature").attr("src", "assets/img/nature.jpg");
    });
});
