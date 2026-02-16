window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
	    document.getElementById("navbar").style.height = "100px";
	    document.getElementById("break").style.top = "100px";
	    document.getElementById("h1_title").style.fontSize = "40px";
	    document.getElementById("h1_title").style.textShadow = "2px 2px rgba(0, 0, 0, 0.8)";
	    document.getElementById("h2_title").style.fontSize = "16px";
	    document.getElementById("burger").style.fontSize = "30px";
	    document.getElementById("burger").style.top = "20%";
	    document.getElementById("burger").style.textShadow = "1px 1px rgba(0, 0, 0, 0.8)";
	    document.getElementById("nav_menu").style.margin = "24px 20px";
	    document.getElementById("nav_menu").style.height = "50px";
	    document.getElementById("nav_item1").style.padding = "15px 19px"
	    document.getElementById("nav_item2").style.padding = "15px 19px"
	    document.getElementById("nav_item3").style.padding = "15px 19px"
	    document.getElementById("logo").style.height = "80px"
	    document.getElementById("logo").style.width = "70px"

	  } else {
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
	    document.getElementById("nav_item1").style.padding = "18px 19px"
	    document.getElementById("nav_item2").style.padding = "18px 19px"
	    document.getElementById("nav_item3").style.padding = "18px 19px"
	    document.getElementById("logo").style.height = "120px"
	    document.getElementById("logo").style.width = "100px"
	  }
	}