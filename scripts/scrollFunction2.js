if (window.innerWidth > 900) {
	window.onscroll = function() {scrollFunctionPC()};
} else {
	window.onscroll = function() {scrollFunctionMobile()};
}

function scrollFunctionPC() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		document.getElementById("goToTopBtn").style.display = "block";

	    document.getElementById("navbar").style.height = "100px";
	    document.getElementById("break").style.top = "100px";

	    document.getElementById("h1_title").style.fontSize = "40px";
	    document.getElementById("h1_title").style.textShadow = "2px 2px rgba(0, 0, 0, 0.8)";
	    document.getElementById("h2_title").style.fontSize = "16px";

	    document.getElementById("burger").style.fontSize = "30px";
	    document.getElementById("burger").style.top = "20%";
	    document.getElementById("burger").style.textShadow = "2px 2px rgba(0, 0, 0, 0.8)";

	    document.getElementById("nav_menu").style.margin = "24px 20px";
	    document.getElementById("nav_menu").style.height = "50px";
	    document.getElementById("nav_item1").style.padding = "15px 19px";
	    document.getElementById("nav_item2").style.padding = "15px 19px";
	    document.getElementById("nav_item3").style.padding = "15px 19px";

	  } else {
	  	document.getElementById("goToTopBtn").style.display = "none";

	    document.getElementById("navbar").style.height = "150px";
	    document.getElementById("break").style.top = "150px";

	    document.getElementById("h1_title").style.fontSize = "50px";
	    document.getElementById("h1_title").style.textShadow = "3px 3px rgba(0, 0, 0, 0.8)";
	    document.getElementById("h2_title").style.fontSize = "24px";

	    document.getElementById("burger").style.fontSize = "40px";
	    document.getElementById("burger").style.top = "25%";
	    document.getElementById("burger").style.textShadow = "2px 2px rgba(0, 0, 0, 0.8)";

	    document.getElementById("nav_menu").style.margin = "45px 20px";
	    document.getElementById("nav_menu").style.height = "58px";
	    document.getElementById("nav_item1").style.padding = "18px 19px";
	    document.getElementById("nav_item2").style.padding = "18px 19px";
	    document.getElementById("nav_item3").style.padding = "18px 19px";
	  }
	}


function scrollFunctionMobile() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		document.getElementById("goToTopBtn").style.display = "block";

	    document.getElementById("navbar").style.height = "80px";
	    document.getElementById("break").style.top = "80px";

	    document.getElementById("h1_title").style.fontSize = "29px";
	    document.getElementById("h1_title").style.textShadow = "2px 2px rgba(0, 0, 0, 0.8)";
	    document.getElementById("h2_title").style.fontSize = "17px";

	    document.getElementById("burger").style.top = "20%";
	    document.getElementById("burger").style.textShadow = "2px 2px rgba(0, 0, 0, 0.8)";

	    
	    document.getElementById("logo").style.marginTop = "5px";

	  } else {
	  	document.getElementById("goToTopBtn").style.display = "none";

	    document.getElementById("navbar").style.height = "120px";
	    document.getElementById("break").style.top = "120px";

	    document.getElementById("h1_title").style.fontSize = "30px";
	    document.getElementById("h1_title").style.textShadow = "2px 2px rgba(0, 0, 0, 0.8)";
	    document.getElementById("h2_title").style.fontSize = "17px";

	    document.getElementById("burger").style.fontSize = "30px";
	    document.getElementById("burger").style.top = "25%";
	    document.getElementById("burger").style.textShadow = "2px 2px rgba(0, 0, 0, 0.8)";

	    document.getElementById("logo").style.marginTop = "20px";
	  }
	}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}