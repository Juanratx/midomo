function openFrecuencia(evt, cityName) {

  // Declare all variables

  var i, tabcontent, tablinks;



  // Get all elements with class="tabcontent" and hide them

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

	// tabcontent[i].style.display = "block";

	  }

  // Show the current tab, and add an "active" class to the button that opened the tab

  

  // eval("document.getElementById(" & cityName & ").style.display = "block"");
 
	
	if(cityName =="x"){

		// entrada visible
		document.getElementById("tab0").src="img1/entrada2.jpg";
		
		document.getElementById("V4").src="img1/tabv4.jpg";

		document.getElementById("V34").src="img1/tbv34.jpg";

		document.getElementById("V35").src="img1/tbv35.jpg";
		document.getElementById("V2").src="img1/tbv2.jpg";
		document.getElementById("V6").src="img1/tbv6.jpg";	

	}	  

		  

	if(cityName =="V4"){

		document.getElementById("entrada").style.display = "none";

		//document.getElementById("tbV4").style.display = "block";

		document.getElementById("V4").src="img1/tabv4S.jpg";

		document.getElementById("V34").src="img1/tbv34.jpg"	;

		document.getElementById("V35").src="img1/tbv35.jpg"	;
		document.getElementById("V2").src="img1/tbv6.jpg";
		document.getElementById("V6").src="img1/tbv2.jpg";

		// calcular();	

	}

	if(cityName == "V34"){

		document.getElementById("entrada").style.display = "none";	

		//document.getElementById("tbV34").style.display = "block";

		document.getElementById("V4").src="img1/tabv4.jpg";

		document.getElementById("V34").src="img1/tbv34S.jpg";	

		document.getElementById("V35").src="img1/tbv35.jpg"	;
		document.getElementById("V2").src="img1/tbv2.jpg";
		document.getElementById("V6").src="img1/tbv6.jpg";

		// calcular();	

	}

	if(cityName =="V35"){

		document.getElementById("entrada").style.display = "none";	

		//document.getElementById("tbV35").style.display = "block";

		document.getElementById("V4").src="img1/tabv4.jpg";

		document.getElementById("V34").src="img1/tbv34.jpg";

		document.getElementById("V35").src="img1/tbv35S.jpg";
		document.getElementById("V2").src="img1/tbv2.jpg";
		document.getElementById("V6").src="img1/tbv6.jpg";

		// calcular();	

	}
	if(cityName =="V2"){

		document.getElementById("entrada").style.display = "none";

		//document.getElementById("tbV2").style.display = "block";

		document.getElementById("V4").src="img1/tabv4.jpg";

		document.getElementById("V34").src="img1/tbv34.jpg";

		document.getElementById("V35").src="img1/tbv35.jpg";
		document.getElementById("V2").src="img1/tbv2S.jpg";
		document.getElementById("V6").src="img1/tbv6.jpg";

		// calcular();	

	}
	if(cityName =="V6"){

		document.getElementById("entrada").style.display = "none";	

		//document.getElementById("tbV6").style.display = "block";

		document.getElementById("V4").src="img1/tabv4.jpg";

		document.getElementById("V34").src="img1/tbv34.jpg";

		document.getElementById("V35").src="img1/tbv35.jpg";
		document.getElementById("V2").src="img1/tbv2.jpg";
		document.getElementById("V6").src="img1/tbv6S.jpg";

		// calcular();	

	}



   evt.currentTarget.className += " active";



} 


