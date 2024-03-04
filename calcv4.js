function abriremv4(){

	window.open("emv4.html", "Esquema montaje")

	

}

function abriremv34(){

	window.open("emv34.html", "Esquema montaje")

	

}

function abriremv35(){

	window.open("emv35.html", "Esquema montaje")

	

}


function abriremv2(){

	window.open("emv2.html", "Esquema montaje")

	

}

function abriremv6(){

	window.open("emv6.html", "Esquema montaje")

	

}


 function show(bloq,bloq1) {

	 document.getElementById("imagen").style.display = "none"; 

	  document.getElementById("resultado").style.display = "block";

	 // obj = document.getElementById(bloq);

	 // obj.style.display = 'block';

	 // obj1 = document.getElementById(bloq1);

	 // obj1.style.display = 'none' ;

}

 function show1(bloq,bloq1) {

	 obj = document.getElementById(bloq);

	 obj.style.display == (obj.style.display=='none');

	 obj1 = document.getElementById(bloq1);

	 obj1.style.display == (obj.style.display=='block') ;

}

 

function validateDecimal(valor) {

    var RE = /^\d*\.?\d*$/;

    if (RE.test(valor)) {

        return true;

    } else {

		 return false;

    }

}



function resetear() {

    location.reload();

        return true;

  

}



function iniciar(){

	openFrecuencia(event, 'x');

	// calcular1();

	// calcular2();

	// calcular3();	

}



function calcularv4(){



	if(diametro.value.length == 0 || grosor.value.length == 0)

	{

		

		

	}else

	{

	

		calcular1();

		

	}

	

	

	

}



function calcularv34(){



	if(diametro31.value.length == 0 || grosor31.value.length == 0)

	{

		

		

	}else

	{

	

		calcular2();

	}

	

	

	

}



function calcularv35(){



	if(diametro32.value.length == 0 || grosor32.value.length == 0)

	{

		

		

	}else

	{

	

		calcular3();

	}

	

	

	

}


function calcularv2(){



	if(diametrov2.value.length == 0 || grosorv2.value.length == 0)

	{

		
		alert ("Debes introducir un diametro y un grosor si quieres calcular tu domo")
		

	}else

	{

	

		calcular4();

	}

	

	

	

}




function calcular1(){



	//obtengo valores

	d = document.getElementById("diametro").value;

	d = d.replace(",",".");

	an= document.getElementById("ancho").value;

	an= an.replace(",",".");

	g= document.getElementById("grosor").value;

	g = g.replace(",",".");

	

		

	//calculos

	altura = d/2;

	document.getElementById("altura").innerHTML = altura + " m" ;	

	area= Math.PI *(d/2)*(d/2);

	area = area.toFixed(1);

	document.getElementById("ab").innerHTML = area + " m&sup2";		

	

	areacubierta =   (4 * Math.PI * ((d/2)*(d/2)))/2

	areacubierta = areacubierta.toFixed(1);

	document.getElementById("ac").innerHTML = areacubierta + " m&sup2";		

	

		

	longitudtotala1aux=(d/2)*(0.25318)*100;

	longitudtotala1= longitudtotala1aux.toFixed(1);

	a=Math.cos(35.5*Math.PI/180);

	diferenciaa1aux=g/a;

	diferenciaa1=diferenciaa1aux.toFixed(6);

	longitudreala1=longitudtotala1aux - diferenciaa1aux

	longitudreala1=longitudreala1.toFixed(1);

	totalessina1=30*longitudtotala1/100;

	totalesa1=longitudreala1*(30/100)

	

	longitudtotala2aux=(d/2)*(0.25318)*(100);

	longitudtotala2= longitudtotala2aux.toFixed(1);

	diferenciaa2aux=g/Math.cos(19 * Math.PI/180)

	diferenciaa2=diferenciaa2aux.toFixed(6);

	longitudreala2=longitudtotala2 - diferenciaa2

	longitudreala2=longitudreala2.toFixed(1);

	totalessina2=30*longitudtotala2/100;

	totalesa2=longitudreala2*30/100

	//b

	longitudtotalb1aux=(d/2)* (0.29524) * 100;

	longitudtotalb1= longitudtotalb1aux.toFixed(1);

	diferenciab1aux=g/Math.cos(35.5 * Math.PI/180)

	diferenciab1=diferenciab1aux.toFixed(6);

	longitudrealb1=longitudtotalb1aux - diferenciab1aux

	longitudrealb1=longitudrealb1.toFixed(1);

	totalessinb1=30*longitudtotalb1/100;

	totalesb1=longitudrealb1*30/100



	longitudtotalb2aux=(d/2)* (0.29524) * 100;

	longitudtotalb2= longitudtotalb2aux.toFixed(1);

	diferenciab2aux=g/Math.cos(30 * Math.PI/180)

	diferenciab2=diferenciab2aux.toFixed(6);

	longitudrealb2=longitudtotalb2aux - diferenciab2aux

	longitudrealb2=longitudrealb2.toFixed(1);

	totalessinb2=30*longitudtotalb2/100;

	totalesb2=longitudrealb2*30/100	

	//c

	longitudtotalc1aux=(d/2)* (0.29453 )* 100;

	longitudtotalc1= longitudtotalc1aux.toFixed(1);

	diferenciac1aux=g/Math.cos(30 * Math.PI/180)

	diferenciac1=diferenciac1aux.toFixed(6);

	longitudrealc1=longitudtotalc1aux - diferenciac1aux

	longitudrealc1=longitudrealc1.toFixed(1);

	totalessinc1=60*longitudtotalc1/100;

	totalesc1=longitudrealc1*60/100	

	

	longitudtotalc2aux=(d/2)*  (0.29453) * 100;

	longitudtotalc2= longitudtotalc2aux.toFixed(1);

	diferenciac2aux=g/Math.cos(26.5 * Math.PI/180)

	diferenciac2=diferenciac2aux.toFixed(6);

	longitudrealc2=longitudtotalc2aux - diferenciac2aux

	longitudrealc2=longitudrealc2.toFixed(1);

	totalessinc2=30*longitudtotalc2/100;

	totalesc2=longitudrealc2*30/100		



	longitudtotalc3aux=(d/2)* (0.29453) * 100;

	longitudtotalc3= longitudtotalc3aux.toFixed(1);

	diferenciac3aux=g/Math.cos(31 * Math.PI/180)

	diferenciac3=diferenciac3aux.toFixed(6);

	longitudrealc3=longitudtotalc3aux - diferenciac3aux

	longitudrealc3=longitudrealc3.toFixed(1);

	totalessinc3=30*longitudtotalc3/100;

	totalesc3=longitudrealc3*30/100	

//D

	longitudtotald1aux=(d/2)* (0.31287) * 100;

	longitudtotald1= longitudtotald1aux.toFixed(1);

	diferenciad1aux=g/Math.cos(28* Math.PI/180)

	diferenciad1=diferenciad1aux.toFixed(6);

	longitudreald1=longitudtotald1aux - diferenciad1aux

	longitudreald1=longitudreald1.toFixed(1);

	totalessind1=30*longitudtotald1/100;

	totalesd1=longitudreald1*30/100	



	longitudtotald2aux=(d/2)* (0.31287) * 100;

	longitudtotald2= longitudtotald2aux.toFixed(1);

	diferenciad2aux=g/Math.cos(31 * Math.PI/180)

	diferenciad2=diferenciad2aux.toFixed(6);

	longitudreald2=longitudtotald2 - diferenciad2

	longitudreald2=longitudreald2.toFixed(1);

	totalessind2=30*longitudtotald2/100;

	totalesd2=longitudreald2*30/100	



	longitudtotald3aux=(d/2)* (0.31287) * 100;

	longitudtotald3= longitudtotald3aux.toFixed(1);

	diferenciad3aux=g/Math.cos(31* Math.PI/180)

	diferenciad3=diferenciad3aux.toFixed(6);

	longitudreald3=longitudtotald3aux - diferenciac3aux

	longitudreald3=longitudreald3.toFixed(1);

	totalessind3=30*longitudtotald3/100;

	totalesd3=longitudreald3*30/100	



	longitudtotald4aux=(d/2)* (0.31287) * 100;

	longitudtotald4= longitudtotald4aux.toFixed(1);

	diferenciad4aux=g/Math.cos(32.5 * Math.PI/180)

	diferenciad4=diferenciad4aux.toFixed(6);

	longitudreald4=longitudtotald4aux - diferenciad4aux

	longitudreald4=longitudreald4.toFixed(1);

	totalessind4=30*longitudtotald4/100;

	totalesd4=longitudreald4*30/100	

//E

	longitudtotale1aux=(d/2)* (0.32492) * 100;

	longitudtotale1= longitudtotale1aux.toFixed(1);

	diferenciae1aux=g/Math.cos(30 * Math.PI/180)

	diferenciae1=diferenciae1aux.toFixed(6);

	longitudreale1=longitudtotale1aux - diferenciae1aux

	longitudreale1=longitudreale1.toFixed(1);

	totalessine1=30*longitudtotale1/100;

	totalese1=longitudreale1*30/100	



	longitudtotale2aux=(d/2)* (0.32492) * 100;

	longitudtotale2= longitudtotale2aux.toFixed(1);

	diferenciae2aux=g/Math.cos(31 * Math.PI/180)

	diferenciae2=diferenciae2aux.toFixed(6);

	longitudreale2=longitudtotale2aux - diferenciae2aux

	longitudreale2=longitudreale2.toFixed(1);

	totalessine2=30*longitudtotale2/100;

	totalese2=longitudreale2*30/100		

//F	

	longitudtotalf1aux=(d/2)* (0.29859) * 100;

	longitudtotalf1= longitudtotalf1aux.toFixed(1);

	diferenciaf1aux=g/Math.cos(32.5 * Math.PI/180)

	diferenciaf1=diferenciaf1aux.toFixed(6);

	longitudrealf1=longitudtotalf1aux - diferenciaf1aux

	longitudrealf1=longitudrealf1.toFixed(1);

	totalessinf1=30*longitudtotalf1/100;

	totalesf1=longitudrealf1*30/100	



	longitudtotalf2aux=(d/2)* (0.29859) * 100;

	longitudtotalf2= longitudtotalf2aux.toFixed(1);

	diferenciaf2aux=g/Math.cos(26.5 * Math.PI/180)

	diferenciaf2=diferenciaf2aux.toFixed(6);

	longitudrealf2=longitudtotalf2aux - diferenciaf2aux

	longitudrealf2=longitudrealf2.toFixed(1);

	totalessinf2=30*longitudtotalf2/100;

	totalesf2=longitudrealf2*30/100		

	

	//calculo madera

	

	// mliniales= totalesa1 + totalesa2 + totalesb1 + totalesb2 + totalesc1 + totalesc2 + totalesc3 + totalesd1 + totalesd2 + totalesd3 + totalesd4 + totalese1 + totalese2 + totalesf1 + totalesf2;

	mliniales= totalessina1 + totalessina2 + totalessinb1 + totalessinb2 + totalessinc1 + totalessinc2 + totalessinc3 + totalessind1 + totalessind2 + totalessind3 + totalessind4 + totalessine1 + totalessine2 + totalessinf1 + totalessinf2;

	mliniales = mliniales.toFixed(1);

	document.getElementById("tm").innerHTML= mliniales + " m";	

	mcubicos= mliniales*(an/100)*(g/100);

	mcubicos=mcubicos.toFixed(1);

	document.getElementById("cantidad").innerHTML= mcubicos + " m&sup3";

	densidad= document.getElementById("densidad").value;

	kg= (mcubicos) * (densidad);

	kg=kg.toFixed(1);

	document.getElementById("peso").innerHTML= kg + " kg"; ;	

	

	

	document.getElementById("lta").innerHTML=longitudtotala1; 	



	document.getElementById("lca1").innerHTML=longitudreala1;	



	document.getElementById("lca2").innerHTML=longitudreala2;	





	document.getElementById("ltb").innerHTML=longitudtotalb1; 	



	document.getElementById("lcb1").innerHTML=longitudrealb1;	

	

	document.getElementById("lcb2").innerHTML=longitudrealb2;	



	document.getElementById("ltc").innerHTML=longitudtotalc1; 	



	document.getElementById("lcc1").innerHTML=longitudrealc1;	



	document.getElementById("lcc2").innerHTML=longitudrealc2;	



	document.getElementById("lcc3").innerHTML=longitudrealc3;	



	document.getElementById("ltd").innerHTML=longitudtotald1; 	



	document.getElementById("lcd1").innerHTML=longitudreald1;	

	



	document.getElementById("lcd2").innerHTML=longitudreald2;	



	document.getElementById("lcd3").innerHTML=longitudreald3;	



	document.getElementById("lcd4").innerHTML=longitudreald4;	



	document.getElementById("lte").innerHTML=longitudtotale1; 	



	document.getElementById("lce1").innerHTML=longitudreale1;	

	

	document.getElementById("lce2").innerHTML=longitudreale2;	



	document.getElementById("ltf").innerHTML=longitudtotalf1; 	



	document.getElementById("lcf1").innerHTML=longitudrealf1;	



	document.getElementById("lcf2").innerHTML=longitudrealf2;	



	

	

	}



function calcularpor() {

		mtl=document.getElementById("tm").innerHTML;

		por=document.getElementById("des").value;

		por=por.replace(",",".");

		t = parseInt(mtl) + ((por/100) * parseInt(mtl));

	    t = t.toFixed(1);

		document.getElementById("tml").innerHTML= t + "m.";	

		

	}

	

function calcular2(){

	//obtengo valores

	d31 = document.getElementById("diametro31").value;

	d31 = d31.replace(",",".");

	ancho31aux= document.getElementById("ancho31").value;

	grosor31aux= document.getElementById("grosor31").value;

	grosor31aux = grosor31aux.replace(",",".");

	

		

	//calculos

	altura31 = d31 * (0.406);

	altura31 = altura31.toFixed(2);

	document.getElementById("altura31").innerHTML = altura31 + " m";	

	area31= Math.PI *(d31/2)*(d31/2);

	area31 = area31.toFixed(1);

	document.getElementById("ab31").innerHTML = area31 + " m&sup2";		

	

	//areacubierta31 =   (4 * Math.PI * ((altura31)*(altura31)))/2

	areacubierta31 = (1.695) * (area31);

	areacubierta31 = areacubierta31.toFixed(1);

	document.getElementById("ac31").innerHTML = areacubierta31 + " m&sup2";		

	



	longitudtotala131aux=(d31/2)*(0.329705454545455)*100;

	longitudtotala131= longitudtotala131aux.toFixed(1);

	a=Math.cos(19*Math.PI/180);

	diferenciaa131aux=grosor31aux/a;

	diferenciaa131=diferenciaa131aux.toFixed(6);

	longitudreala131=longitudtotala131aux - diferenciaa131aux

	longitudreala131=longitudreala131.toFixed(1);

	totalessina131=30*longitudtotala131/100;

	totalesa131=longitudreala131*(30/100)

	

	longitudtotala231aux=(d31/2)*(0.329705454545455)*(100);

	longitudtotala231= longitudtotala231aux.toFixed(1);

	diferenciaa231aux=grosor31aux/Math.cos(35.5 * Math.PI/180)

	diferenciaa231=diferenciaa231aux.toFixed(6);

	longitudreala231=longitudtotala231 - diferenciaa231aux

	longitudreala231=longitudreala231.toFixed(1);

	totalessina231=30*longitudtotala231/100;

	totalesa231=longitudreala231*30/100

	//b

	longitudtotalb131aux=(d31/2)* (0.382290909090909) * 100;

	longitudtotalb131= longitudtotalb131aux.toFixed(1);

	diferenciab131aux=grosor31aux/Math.cos(35.5 * Math.PI/180)

	diferenciab131=diferenciab131aux.toFixed(6);

	longitudrealb131=longitudtotalb131aux - diferenciab131aux

	longitudrealb131=longitudrealb131.toFixed(1);

	totalessinb131=30*longitudtotalb131/100;

	totalesb131=longitudrealb131*30/100



	longitudtotalb231aux=(d31/2)* (0.382290909090909) * 100;

	longitudtotalb231= longitudtotalb231aux.toFixed(1);

	diferenciab231aux=grosor31aux/Math.cos(27 * Math.PI/180)

	diferenciab231=diferenciab231aux.toFixed(6);

	longitudrealb231=longitudtotalb231aux - diferenciab231aux

	longitudrealb231=longitudrealb231.toFixed(1);

	totalessinb231=25*longitudtotalb231/100;

	totalesb231=longitudrealb231*25/100	

	//c

	longitudtotalc131aux=(d31/2)* (0.421487272727273) * 100;

	longitudtotalc131= longitudtotalc131aux.toFixed(1);

	diferenciac131aux=grosor31aux/Math.cos(36 * Math.PI/180)

	diferenciac131=diferenciac131aux.toFixed(6);

	longitudrealc131=longitudtotalc131aux - diferenciac131aux

	longitudrealc131=longitudrealc131.toFixed(1);

	totalessinc131=25*longitudtotalc131/100;

	totalesc131=longitudrealc131*25/100	

	

	longitudtotalc231aux=(d31/2)*  (0.421487272727273) * 100;

	longitudtotalc231= longitudtotalc231aux.toFixed(1);

	diferenciac231aux=grosor31aux/Math.cos(27 * Math.PI/180)

	diferenciac231=diferenciac231aux.toFixed(6);

	longitudrealc231=longitudtotalc231aux - diferenciac231aux

	longitudrealc231=longitudrealc231.toFixed(1);

	totalessinc231=25*longitudtotalc231/100;

	totalesc231=longitudrealc231*25/100		



	longitudtotalc331aux=(d31/2)* (0.421487272727273) * 100;

	longitudtotalc331= longitudtotalc331aux.toFixed(1);

	diferenciac331aux=grosor31aux/Math.cos(27 * Math.PI/180)

	diferenciac331=diferenciac331aux.toFixed(6);

	longitudrealc331=longitudtotalc331aux - diferenciac331aux

	longitudrealc331=longitudrealc331.toFixed(1);

	totalessinc331=20*longitudtotalc331/100;

	totalesc331=longitudrealc331*20/100	

	

	longitudtotalc431aux=(d31/2)*  (0.421487272727273) * 100;

	longitudtotalc431= longitudtotalc431aux.toFixed(1);

	diferenciac431aux=grosor31aux/Math.cos(31.5 * Math.PI/180)

	diferenciac431=diferenciac431aux.toFixed(6);

	longitudrealc431=longitudtotalc431aux - diferenciac431aux

	longitudrealc431=longitudrealc431.toFixed(1);

	totalessinc431=20*longitudtotalc431/100;

	totalesc431=longitudrealc431*20/100		

//D

	longitudtotald131aux=(d31/2)*(0.441054545454545)* 100;

	longitudtotald131= longitudtotald131aux.toFixed(1);

	diferenciad131aux=grosor31aux/Math.cos(31.5* Math.PI/180)

	diferenciad131=diferenciad131aux.toFixed(6);

	longitudreald131=longitudtotald131aux - diferenciad131aux

	longitudreald131=longitudreald131.toFixed(1);

	totalessind131=20*longitudtotald131/100;

	totalesd131=longitudreald131*20/100	



	

	//calculo madera

	

	// mliniales= totalesa1 + totalesa2 + totalesb1 + totalesb2 + totalesc1 + totalesc2 + totalesc3 + totalesd1 + totalesd2 + totalesd3 + totalesd4 + totalese1 + totalese2 + totalesf1 + totalesf2;

	mliniales31= totalessina131 + totalessina231 + totalessinb131 + totalessinb231 + totalessinc131 + totalessinc231 + totalessinc331 + totalessinc431 + totalessind131;

	mliniales31 = mliniales31.toFixed(1);

	document.getElementById("tm31").innerHTML= mliniales31 + " m";	

	mcubicos31= mliniales31*(ancho31aux/100)*(grosor31aux/100);

	mcubicos31=mcubicos31.toFixed(1);

	document.getElementById("cantidad31").innerHTML= mcubicos31 + " m&sup3";

	densidad31= document.getElementById("densidad31").value;

	kg31= (mcubicos31) * (densidad31);

	kg31=kg31.toFixed(1);

	document.getElementById("peso31").innerHTML= kg31 + " kg"; ;	

	

	

	document.getElementById("lta31").innerHTML=longitudtotala131; 	

	document.getElementById("lca131").innerHTML=longitudreala131;

	document.getElementById("lca231").innerHTML=longitudreala231;	

	

	document.getElementById("ltb31").innerHTML=longitudtotalb131; 

	document.getElementById("lcb131").innerHTML=longitudrealb131;	

	document.getElementById("lcb231").innerHTML=longitudrealb231;



	document.getElementById("ltc31").innerHTML=longitudtotalc131; 	

	document.getElementById("lcc131").innerHTML=longitudrealc131;	

	document.getElementById("lcc231").innerHTML=longitudrealc231;	

	document.getElementById("lcc331").innerHTML=longitudrealc331; 	

	document.getElementById("lcc431").innerHTML=longitudrealc431;	



	document.getElementById("ltd31").innerHTML=longitudtotald131; 

	document.getElementById("lcd131").innerHTML=longitudreald131;	



	

	







	

	// show("resultado","imagen");

	//por=document.getElementById("des31").innerHTML= "0.0";

}



function calcularpor31() {

		mtl31=document.getElementById("tm31").innerHTML;

		por=document.getElementById("des31").value;

		por=por.replace(",",".");

		t = parseInt(mtl31) + ((por/100) * parseInt(mtl31));

	    t = t.toFixed(1);

		document.getElementById("tml31").innerHTML= t + "m.";	

}


function calcular3(){


	//obtengo valores

	d32 = document.getElementById("diametro32").value;

	d32 = d32.replace(",",".");

	// d32 = parseInt(d32);

	ancho32aux= document.getElementById("ancho32").value;

	grosor32aux= document.getElementById("grosor32").value;

	grosor32aux = grosor32aux.replace(",",".");

	// grosor32aux = parseInt(grosor32aux);

	

		

	//calculos

	altura32 = d32 * (0.594);

	altura32 = altura32.toFixed(2);



	document.getElementById("altura32").innerHTML = altura32 + " m";	

	area32= Math.PI *(d32/2)*(d32/2);

	area32 = area32.toFixed(1);

	document.getElementById("ab32").innerHTML = area32 + " m&sup2";		

	

	//areacubierta32 =   (4 * Math.PI * ((altura32)*(altura32)))/2;

	areacubierta32 = (2.409) * (area32);

	areacubierta32 = areacubierta32.toFixed(1);

	document.getElementById("ac32").innerHTML = areacubierta32 +  " m&sup2";		

	



	longitudtotala132aux=(d32/2)*(0.329705454545455)*100;

	longitudtotala132= longitudtotala132aux.toFixed(1);

	a=Math.cos(19*Math.PI/180);

	diferenciaa132aux=grosor32aux/a;

	diferenciaa132=diferenciaa132aux.toFixed(6);

	longitudreala132=longitudtotala132aux - diferenciaa132aux

	longitudreala132=longitudreala132.toFixed(1);

	totalessina132=30*longitudtotala132/100;

	totalesa132=longitudreala132*(30/100)

	

	longitudtotala232aux=(d32/2)*(0.329705454545455)*(100);

	longitudtotala232= longitudtotala232aux.toFixed(1);

	diferenciaa232aux=grosor32aux/Math.cos(35.5 * Math.PI/180)

	diferenciaa232=diferenciaa232aux.toFixed(6);

	longitudreala232=longitudtotala232 - diferenciaa232aux

	longitudreala232=longitudreala232.toFixed(1);

	totalessina232=30*longitudtotala232/100;

	totalesa232=longitudreala232*30/100

	//b

	longitudtotalb132aux=(d32/2)* (0.382290909090909) * 100;

	longitudtotalb132= longitudtotalb132aux.toFixed(1);

	diferenciab132aux=grosor32aux/Math.cos(35.5 * Math.PI/180)

	diferenciab132=diferenciab132aux.toFixed(6);

	longitudrealb132=longitudtotalb132aux - diferenciab132aux

	longitudrealb132=longitudrealb132.toFixed(1);

	totalessinb132=30*longitudtotalb132/100;

	totalesb132=longitudrealb132*30/100



	longitudtotalb232aux=(d32/2)* (0.382290909090909) * 100;

	longitudtotalb232= longitudtotalb232aux.toFixed(1);

	diferenciab232aux=grosor32aux/Math.cos(27 * Math.PI/180)

	diferenciab232=diferenciab232aux.toFixed(6);

	longitudrealb232=longitudtotalb232aux - diferenciab232aux

	longitudrealb232=longitudrealb232.toFixed(1);

	totalessinb232=35*longitudtotalb232/100;

	totalesb232=longitudrealb232*35/100	

	//c

	longitudtotalc132aux=(d32/2)* (0.421487272727273) * 100;

	longitudtotalc132= longitudtotalc132aux.toFixed(1);

	diferenciac132aux=grosor32aux/Math.cos(36 * Math.PI/180)

	diferenciac132=diferenciac132aux.toFixed(6);

	longitudrealc132=longitudtotalc132aux - diferenciac132aux

	longitudrealc132=longitudrealc132.toFixed(1);

	totalessinc132=35*longitudtotalc132/100;

	totalesc132=longitudrealc132*35/100	

	

	longitudtotalc232aux=(d32/2)*  (0.421487272727273) * 100;

	longitudtotalc232= longitudtotalc232aux.toFixed(1);

	diferenciac232aux=grosor32aux/Math.cos(27 * Math.PI/180)

	diferenciac232=diferenciac232aux.toFixed(6);

	longitudrealc232=longitudtotalc232aux - diferenciac232aux

	longitudrealc232=longitudrealc232.toFixed(1);

	totalessinc232=35*longitudtotalc232/100;

	totalesc232=longitudrealc232*35/100		



	longitudtotalc332aux=(d32/2)* (0.421487272727273) * 100;

	longitudtotalc332= longitudtotalc332aux.toFixed(1);

	diferenciac332aux=grosor32aux/Math.cos(27 * Math.PI/180)

	diferenciac332=diferenciac332aux.toFixed(6);

	longitudrealc332=longitudtotalc332aux - diferenciac332aux

	longitudrealc332=longitudrealc332.toFixed(1);

	totalessinc332=40*longitudtotalc332/100;

	totalesc332=longitudrealc332*40/100	

	

	longitudtotalc432aux=(d32/2)*  (0.421487272727273) * 100;

	longitudtotalc432= longitudtotalc432aux.toFixed(1);

	diferenciac432aux=grosor32aux/Math.cos(31.5 * Math.PI/180)

	diferenciac432=diferenciac432aux.toFixed(6);

	longitudrealc432=longitudtotalc432aux - diferenciac432aux

	longitudrealc432=longitudrealc432.toFixed(1);

	totalessinc432=40*longitudtotalc432/100;

	totalesc432=longitudrealc432*40/100		

//D

	longitudtotald132aux=(d32/2)*(0.441054545454545) * 100;

	longitudtotald132= longitudtotald132aux.toFixed(1);

	diferenciad132aux=grosor32aux/Math.cos(31.5* Math.PI/180)

	diferenciad132=diferenciad132aux.toFixed(6);

	longitudreald132=longitudtotald132aux - diferenciad132aux

	longitudreald132=longitudreald132.toFixed(1);

	totalessind132=40*longitudtotald132/100;

	totalesd132=longitudreald132*40/100	



	

	//calculo madera

	

	// mliniales= totalesa1 + totalesa2 + totalesb1 + totalesb2 + totalesc1 + totalesc2 + totalesc3 + totalesd1 + totalesd2 + totalesd3 + totalesd4 + totalese1 + totalese2 + totalesf1 + totalesf2;

	mliniales32= totalessina132 + totalessina232 + totalessinb132 + totalessinb232 + totalessinc132 + totalessinc232 + totalessinc332 + totalessinc432 + totalessind132;

	mliniales32 = mliniales32.toFixed(1);

	document.getElementById("tm32").innerHTML= mliniales32 + " m";	

	mcubicos32= mliniales32*(ancho32aux/100)*(grosor32aux/100);

	mcubicos32=mcubicos32.toFixed(1);

	document.getElementById("cantidad32").innerHTML= mcubicos32 + " m&sup3";

	densidad32= document.getElementById("densidad32").value;

	kg32= mcubicos32 * densidad32;

	kg32= kg32.toFixed(1);

	document.getElementById("peso32").innerHTML= kg32 + " kg"; ;	

	

	

	document.getElementById("lta32").innerHTML=longitudtotala132; 	

	document.getElementById("lca132").innerHTML=longitudreala132;

	document.getElementById("lca232").innerHTML=longitudreala232;	

	

	document.getElementById("ltb32").innerHTML=longitudtotalb132; 

	document.getElementById("lcb132").innerHTML=longitudrealb132;	

	document.getElementById("lcb232").innerHTML=longitudrealb232;



	document.getElementById("ltc32").innerHTML=longitudtotalc132; 	

	document.getElementById("lcc132").innerHTML=longitudrealc132;	

	document.getElementById("lcc232").innerHTML=longitudrealc232;	

	document.getElementById("lcc332").innerHTML=longitudrealc332; 	

	document.getElementById("lcc432").innerHTML=longitudrealc432;	



	document.getElementById("ltd32").innerHTML=longitudtotald132; 

	document.getElementById("lcd132").innerHTML=longitudreald132;	



	

	







	

	// show("resultado","imagen");

	

	

	

	

}

function calcular4(){


	//obtengo valores

	d32 = document.getElementById("diametrov2").value;

	d32 = d32.replace(",",".");

	// d32 = parseInt(d32);
	ancho32aux= document.getElementById("anchov2").value;

	grosor32aux= document.getElementById("grosorv2").value;

	grosor32aux = grosor32aux.replace(",",".");


		

	//calculos

	altura32 = d32 * (0.594);

	altura32 = altura32.toFixed(2);



	document.getElementById("alturav2").innerHTML = altura32 + " m";	

	area32= Math.PI *(d32/2)*(d32/2);

	area32 = area32.toFixed(1);

	document.getElementById("abv2").innerHTML = area32 + " m&sup2";		

	

	//areacubierta32 =   (4 * Math.PI * ((altura32)*(altura32)))/2;

	areacubierta32 = (2.409) * (area32);

	areacubierta32 = areacubierta32.toFixed(1);

	document.getElementById("acv2").innerHTML = areacubierta32 +  " m&sup2";		

	



	longitudtotala132aux=(d32/2)*(0.54653)*100;

	longitudtotala132= longitudtotala132aux.toFixed(1);

	a=Math.cos(19*Math.PI/180);

	diferenciaa132aux=grosor32aux/a;

	diferenciaa132=diferenciaa132aux.toFixed(6);

	longitudreala132=longitudtotala132aux - diferenciaa132aux

	longitudreala132=longitudreala132.toFixed(1);

	totalessina132=30*longitudtotala132/100;

	totalesa132=longitudreala132*(30/100)

	

	longitudtotala232aux=(d32/2)*(0.54653)*(100);

	longitudtotala232= longitudtotala232aux.toFixed(1);

	diferenciaa232aux=grosor32aux/Math.cos(35.5 * Math.PI/180)

	diferenciaa232=diferenciaa232aux.toFixed(6);

	longitudreala232=longitudtotala232 - diferenciaa232aux

	longitudreala232=longitudreala232.toFixed(1);

	totalessina232=30*longitudtotala232/100;

	totalesa232=longitudreala232*30/100

	//b

	longitudtotalb132aux=(d32/2)* (0.61803) * 100;

	longitudtotalb132= longitudtotalb132aux.toFixed(1);

	diferenciab132aux=grosor32aux/Math.cos(35.5 * Math.PI/180)

	diferenciab132=diferenciab132aux.toFixed(6);

	longitudrealb132=longitudtotalb132aux - diferenciab132aux

	longitudrealb132=longitudrealb132.toFixed(1);

	totalessinb132=30*longitudtotalb132/100;

	totalesb132=longitudrealb132*30/100



	longitudtotalb232aux=(d32/2)* (0.61803) * 100;

	longitudtotalb232= longitudtotalb232aux.toFixed(1);

	diferenciab232aux=grosor32aux/Math.cos(27 * Math.PI/180)

	diferenciab232=diferenciab232aux.toFixed(6);

	longitudrealb232=longitudtotalb232aux - diferenciab232aux

	longitudrealb232=longitudrealb232.toFixed(1);

	totalessinb232=35*longitudtotalb232/100;

	totalesb232=longitudrealb232*35/100	

	

	//calculo madera

	

	// mliniales= totalesa1 + totalesa2 + totalesb1 + totalesb2 + totalesc1 + totalesc2 + totalesc3 + totalesd1 + totalesd2 + totalesd3 + totalesd4 + totalese1 + totalese2 + totalesf1 + totalesf2;

	mliniales32= totalessina132 + totalessina232 + totalessinb132 + totalessinb232;

	mliniales32 = mliniales32.toFixed(1);

	document.getElementById("tmv2").innerHTML= mliniales32 + " m";	

	mcubicos32= mliniales32*(grosor32aux/100)*(ancho32aux/100);

	mcubicos32=mcubicos32.toFixed(1);

	document.getElementById("cantidadv2").innerHTML= mcubicos32 + " m&sup3";

	densidad32= document.getElementById("densidadv2").value;

	kg32= mcubicos32 * densidad32;

	kg32= kg32.toFixed(1);

	document.getElementById("pesov2").innerHTML= kg32 + " kg"; ;	

	

	

	document.getElementById("ltav2").innerHTML=longitudtotala132; 	

	document.getElementById("lcav21").innerHTML=longitudreala132;

	document.getElementById("lcav22").innerHTML=longitudreala232;	

	

	document.getElementById("ltbv2").innerHTML=longitudtotalb132; 

	document.getElementById("lcbv21").innerHTML=longitudrealb132;	

	document.getElementById("lcbv22").innerHTML=longitudrealb232;



	document.getElementById("ltc32").innerHTML=longitudtotalc132; 	

	document.getElementById("lcc132").innerHTML=longitudrealc132;	

	document.getElementById("lcc232").innerHTML=longitudrealc232;	

	document.getElementById("lcc332").innerHTML=longitudrealc332; 	

	document.getElementById("lcc432").innerHTML=longitudrealc432;	



	document.getElementById("ltd32").innerHTML=longitudtotald132; 

	document.getElementById("lcd132").innerHTML=longitudreald132;	



	

	







	

	// show("resultado","imagen");

	

	

	

	

}

function calcularv6(){


	//obtengo valores

	d32 = document.getElementById("diametrov6").value;

	d32 = d32.replace(",",".");

	// d32 = parseInt(d32);
	ancho32aux= document.getElementById("anchov6").value;

	grosor32aux= document.getElementById("grosorv6").value;

	grosor32aux = grosor32aux.replace(",",".");



	//calculos

	altura32 = d32 * (0.594);

	altura32 = altura32.toFixed(2);



	document.getElementById("alturav6").innerHTML = altura32 + " m";	

	area32= Math.PI *(d32/2)*(d32/2);

	area32 = area32.toFixed(1);

	document.getElementById("abv6").innerHTML = area32 + " m&sup2";		

	

	//areacubierta32 =   (4 * Math.PI * ((altura32)*(altura32)))/2;

	areacubierta32 = (2.409) * (area32);

	areacubierta32 = areacubierta32.toFixed(1);

	document.getElementById("acv6").innerHTML = areacubierta32 +  " m&sup2";		

	

	//a

	longitudtotala132aux=(d32/2)*(0.16257)*100;

	longitudtotala132= longitudtotala132aux.toFixed(1);

	a=Math.cos(4.7*Math.PI/180);

	diferenciaa132aux=grosor32aux/a;

	diferenciaa132=diferenciaa132aux.toFixed(6);

	longitudreala132=longitudtotala132aux - diferenciaa132aux

	longitudreala132=longitudreala132.toFixed(1);

	totalessina132=30*longitudtotala132/100;

	totalesa132=longitudreala132*(30/100)

	

	longitudtotala232aux=(d32/2)*(0.16257)*(100);

	longitudtotala232= longitudtotala232aux.toFixed(1);

	diferenciaa232aux=grosor32aux/Math.cos(4.7 * Math.PI/180)

	diferenciaa232=diferenciaa232aux.toFixed(6);

	longitudreala232=longitudtotala232 - diferenciaa232aux

	longitudreala232=longitudreala232.toFixed(1);

	totalessina232=30*longitudtotala232/100;

	totalesa232=longitudreala232*30/100

	//b

	longitudtotalb132aux=(d32/2)* (0.19048) * 100;

	longitudtotalb132= longitudtotalb132aux.toFixed(1);

	diferenciab132aux=grosor32aux/Math.cos(5.5 * Math.PI/180)

	diferenciab132=diferenciab132aux.toFixed(6);

	longitudrealb132=longitudtotalb132aux - diferenciab132aux

	longitudrealb132=longitudrealb132.toFixed(1);

	totalessinb132=30*longitudtotalb132/100;

	totalesb132=longitudrealb132*30/100



	longitudtotalb232aux=(d32/2)* (0.19048) * 100;

	longitudtotalb232= longitudtotalb232aux.toFixed(1);

	diferenciab232aux=grosor32aux/Math.cos(5.5 * Math.PI/180)

	diferenciab232=diferenciab232aux.toFixed(6);

	longitudrealb232=longitudtotalb232aux - diferenciab232aux

	longitudrealb232=longitudrealb232.toFixed(1);

	totalessinb232=35*longitudtotalb232/100;

	totalesb232=longitudrealb232*35/100	

	//c

	longitudtotalc132aux=(d32/2)* (0.18191) * 100;

	longitudtotalc132= longitudtotalb132aux.toFixed(1);

	diferenciac132aux=grosor32aux/Math.cos(5.2 * Math.PI/180)

	diferenciac132=diferenciac132aux.toFixed(6);

	longitudrealc132=longitudtotalc132aux - diferenciac132aux

	longitudrealc132=longitudrealc132.toFixed(1);

	totalessinc132=30*longitudtotalc132/100;

	totalesc132=longitudrealc132*30/100

	

	longitudtotalc232aux=(d32/2)* (0.18191) * 100;

	longitudtotalc232= longitudtotalc232aux.toFixed(1);

	diferenciac232aux=grosor32aux/Math.cos(5.2 * Math.PI/180)

	diferenciac232=diferenciac232aux.toFixed(6);

	longitudrealc232=longitudtotalc232aux - diferenciac232aux

	longitudrealc232=longitudrealc232.toFixed(1);

	totalessinc232=30*longitudtotalc232/100;

	totalesc232=longitudrealc232*30/100	





	longitudtotalc332aux=(d32/2)* (0.18191) * 100;

	longitudtotalc332= longitudtotalc332aux.toFixed(1);

	diferenciac332aux=grosor32aux/Math.cos(5.2 * Math.PI/180)

	diferenciac332=diferenciac332aux.toFixed(6);

	longitudrealc332=longitudtotalc332aux - diferenciac232aux

	longitudrealc332=longitudrealc332.toFixed(1);

	totalessinc332=35*longitudtotalc332/100;

	totalesc332=longitudrealc332*30/100	


	longitudtotalc432aux=(d32/2)* (0.18191) * 100;

	longitudtotalc432= longitudtotalc432aux.toFixed(1);

	diferenciac432aux=grosor32aux/Math.cos(5.2 * Math.PI/180)

	diferenciac432=diferenciac432aux.toFixed(6);

	longitudrealc432=longitudtotalc432aux - diferenciac432aux

	longitudrealc432=longitudrealc432.toFixed(1);

	totalessinc432=35*longitudtotalc432/100;

	totalesc432=longitudrealc432*30/100	

	// d

	longitudtotald132aux=(d32/2)* (0.20282) * 100;

	longitudtotald132= longitudtotald132aux.toFixed(1);

	diferenciad132aux=grosor32aux/Math.cos(5.8 * Math.PI/180)

	diferenciad132=diferenciad132aux.toFixed(6);

	longitudreald132=longitudtotald132aux - diferenciad132aux

	longitudreald132=longitudreald132.toFixed(1);

	totalessind132=60*longitudtotald132/100;

	totalesd132=longitudreald132*60/100



	longitudtotald232aux=(d32/2)* (0.20282) * 100;

	longitudtotald232= longitudtotald232aux.toFixed(1);

	diferenciad232aux=grosor32aux/Math.cos(5.8 * Math.PI/180)

	diferenciad232=diferenciad232aux.toFixed(6);

	longitudreald232=longitudtotald232aux - diferenciad232aux

	longitudreald232=longitudreald232.toFixed(1);

	totalessind232=60*longitudtotald232/100;

	totalesd232=longitudreald232*60/100	

	
	
	
	longitudtotald332aux=(d32/2)* (0.20282) * 100;

	longitudtotald332= longitudtotald332aux.toFixed(1);

	diferenciad332aux=grosor32aux/Math.cos(5.8 * Math.PI/180)

	diferenciad332=diferenciad332aux.toFixed(6);

	longitudreald332=longitudtotald332aux - diferenciad332aux

	longitudreald332=longitudreald332.toFixed(1);

	totalessind332=30*longitudtotald332/100;

	totalesd332=longitudreald332*30/100	

		
	longitudtotald432aux=(d32/2)* (0.20282) * 100;

	longitudtotald432= longitudtotald432aux.toFixed(1);

	diferenciad432aux=grosor32aux/Math.cos(5.8 * Math.PI/180)

	diferenciad432=diferenciad432aux.toFixed(6);

	longitudreald432=longitudtotald432aux - diferenciad432aux

	longitudreald432=longitudreald432.toFixed(1);

	totalessind432=30*longitudtotald432/100;

	totalesd432=longitudreald432*30/100	

	
	// E

	longitudtotale132aux=(d32/2)* (0.18738) * 100;

	longitudtotale132= longitudtotale132aux.toFixed(1);

	diferenciae132aux=grosor32aux/Math.cos(5.4 * Math.PI/180)

	diferenciae132=diferenciae132aux.toFixed(6);

	longitudreale132=longitudtotale132aux - diferenciae132aux

	longitudreale132=longitudreale132.toFixed(1);

	totalessine132=60*longitudtotald132/100;

	totalese132=longitudreale132*30/100


	longitudtotale232aux=(d32/2)* (0.18738) * 100;

	longitudtotale232= longitudtotale232aux.toFixed(1);

	diferenciae232aux=grosor32aux/Math.cos(5.4 * Math.PI/180)

	diferenciae232=diferenciae232aux.toFixed(6);

	longitudreale232=longitudtotale232aux - diferenciae232aux

	longitudreale232=longitudreale232.toFixed(1);

	totalessine232=30*longitudtotale232/100;

	totalese232=longitudreale232*30/100	

//F

	longitudtotalf132aux=(d32/2)* (0.19801) * 100;

	longitudtotalf132= longitudtotalf132aux.toFixed(1);

	diferenciaf132aux=grosor32aux/Math.cos(5.7 * Math.PI/180)

	diferenciaf132=diferenciaf132aux.toFixed(6);

	longitudrealf132=longitudtotalf132aux - diferenciaf132aux

	longitudrealf132=longitudrealf132.toFixed(1);

	totalessinf132=60*longitudtotalf132/100;

	totalesf132=longitudrealf132*60/100



	longitudtotalf232aux=(d32/2)* (0.19801) * 100;

	longitudtotalf232= longitudtotalf232aux.toFixed(1);

	diferenciaf232aux=grosor32aux/Math.cos(5.7 * Math.PI/180)

	diferenciaf232=diferenciaf232aux.toFixed(6);

	longitudrealf232=longitudtotalf232aux - diferenciaf232aux

	longitudrealf232=longitudrealf232.toFixed(1);

	totalessinf232=60*longitudtotalf232/100;

	totalesf232=longitudrealf232*60/100	

	//G

	longitudtotalg132aux=(d32/2)* (0.20591) * 100;

	longitudtotalg132= longitudtotalg132aux.toFixed(1);

	diferenciag132aux=grosor32aux/Math.cos(5.9 * Math.PI/180)

	diferenciag132=diferenciag132aux.toFixed(6);

	longitudrealg132=longitudtotalg132aux - diferenciag132aux

	longitudrealg132=longitudrealg132.toFixed(1);

	totalessing132=60*longitudtotalg132/100;

	totalesg132=longitudrealg132*60/100



	longitudtotalg232aux=(d32/2)* (0.20591) * 100;

	longitudtotalg232= longitudtotalg232aux.toFixed(1);

	diferenciag232aux=grosor32aux/Math.cos(5.9 * Math.PI/180)

	diferenciag232=diferenciag232aux.toFixed(6);

	longitudrealg232=longitudtotalg232aux - diferenciag232aux

	longitudrealg232=longitudrealg232.toFixed(1);

	totalessing232=60*longitudtotalg232/100;

	totalesg232=longitudrealg232*60/100	

	
	longitudtotalg332aux=(d32/2)* (0.20591) * 100;

	longitudtotalg332= longitudtotalg332aux.toFixed(1);

	diferenciag332aux=grosor32aux/Math.cos(5.9 * Math.PI/180)

	diferenciag332=diferenciag332aux.toFixed(6);

	longitudrealg332=longitudtotalg332aux - diferenciag332aux

	longitudrealg332=longitudrealg332.toFixed(1);

	totalessing332=60*longitudtotalg332/100;

	totalesg332=longitudrealg332*60/100	


	longitudtotalg432aux=(d32/2)* (0.20591) * 100;

	longitudtotalg432= longitudtotalg432aux.toFixed(1);

	diferenciag432aux=grosor32aux/Math.cos(5.9 * Math.PI/180)

	diferenciag432=diferenciag432aux.toFixed(6);

	longitudrealg432=longitudtotalg432aux - diferenciag432aux

	longitudrealg432=longitudrealg432.toFixed(1);

	totalessing432=60*longitudtotalg432/100;

	totalesg432=longitudrealg432*60/100	

	// H

	longitudtotalh132aux=(d32/2)* (0.21535) * 100;

	longitudtotalh132= longitudtotalh132aux.toFixed(1);

	diferenciah132aux=grosor32aux/Math.cos(6.2 * Math.PI/180)

	diferenciah132=diferenciah132aux.toFixed(6);

	longitudrealh132=longitudtotalh132aux - diferenciah132aux

	longitudrealh132=longitudrealh132.toFixed(1);

	totalessinh132=60*longitudtotalh132/100;

	totalesh132=longitudrealh132*60/100	


	longitudtotalh232aux=(d32/2)* (0.21535) * 100;

	longitudtotalh232= longitudtotalh232aux.toFixed(1);

	diferenciah232aux=grosor32aux/Math.cos(6.2 * Math.PI/180)

	diferenciah232=diferenciah232aux.toFixed(6);

	longitudrealh232=longitudtotalh232aux - diferenciah232aux

	longitudrealh232=longitudrealh232.toFixed(1);

	totalessinh232=60*longitudtotalh232/100;

	totalesh232=longitudrealh232*60/100	

	// I

	longitudtotali132aux=(d32/2)* (0.21535) * 100;

	longitudtotali132= longitudtotali132aux.toFixed(1);

	diferenciai132aux=grosor32aux/Math.cos(6.2 * Math.PI/180)

	diferenciai132=diferenciai132aux.toFixed(6);

	longitudreali132=longitudtotali132aux - diferenciai132aux

	longitudreali132=longitudreali132.toFixed(1);

	totalessini132=60*longitudtotali132/100;

	totalesi132=longitudreali132*60/100	


	longitudtotali232aux=(d32/2)* (0.21535) * 100;

	longitudtotali232= longitudtotali232aux.toFixed(1);

	diferenciai232aux=grosor32aux/Math.cos(6.2 * Math.PI/180)

	diferenciai232=diferenciai232aux.toFixed(6);

	longitudreali232=longitudtotali232aux - diferenciai232aux

	longitudreali232=longitudreali232.toFixed(1);

	totalessini232=60*longitudtotali232/100;

	totalesi232=longitudreali232*60/100	

	
	//calculo madera

	

	// mliniales= totalesa1 + totalesa2 + totalesb1 + totalesb2 + totalesc1 + totalesc2 + totalesc3 + totalesd1 + totalesd2 + totalesd3 + totalesd4 + totalese1 + totalese2 + totalesf1 + totalesf2;

	mliniales32= totalessina132 + totalessina232 + totalessinb132 + totalessinb232 + totalessinc132 + totalessinc232 + totalessinc332 + totalessinc432 + totalessind132 + totalessind232 + totalessind332 + totalessind432 + totalessine132 + totalessine232 + totalessinf132 + totalessinf232 + totalessing132 + totalessing232 + totalessing332 + totalessing432 + totalessinh132 + totalessinh232 + totalessini132 + totalessini232 ;

	mliniales32 = mliniales32.toFixed(1);

	document.getElementById("tmv2").innerHTML= mliniales32 + " m";	

	mcubicos32= mliniales32*(grosor32aux/100)*(ancho32aux/100);

	mcubicos32=mcubicos32.toFixed(1);

	document.getElementById("cantidadv2").innerHTML= mcubicos32 + " m&sup3";

	densidad32= document.getElementById("densidadv6").value;

	kg32= mcubicos32 * densidad32;

	kg32= kg32.toFixed(1);

	document.getElementById("pesov6").innerHTML= kg32 + " kg"; ;	

	

	

	document.getElementById("ltav6").innerHTML=longitudtotala132; 	

	document.getElementById("lca1v6").innerHTML=longitudreala132;

	document.getElementById("lca2v6").innerHTML=longitudreala232;	

	

	document.getElementById("ltbv6").innerHTML=longitudtotalb132; 

	document.getElementById("lcb1v6").innerHTML=longitudrealb132;	

	//document.getElementById("lcb2v6").innerHTML=longitudrealb232;



	document.getElementById("ltcv6").innerHTML=longitudtotalc132; 	
	document.getElementById("lcc1v6").innerHTML=longitudrealc132;	
	document.getElementById("lcc2v6").innerHTML=longitudrealc232;	
	document.getElementById("lcc3v6").innerHTML=longitudrealc332; 	
	document.getElementById("lcc4v6").innerHTML=longitudrealc432;	




	document.getElementById("ltdv6").innerHTML=longitudtotald132; 	
	document.getElementById("lcd1v6").innerHTML=longitudreald132;	
	document.getElementById("lcd2v6").innerHTML=longitudreald232;
	document.getElementById("lcd3v6").innerHTML=longitudreald332;
	document.getElementById("lcd4v6").innerHTML=longitudreald432;



	document.getElementById("ltev6").innerHTML=longitudtotale132; 	
	document.getElementById("lce1v6").innerHTML=longitudreale132;	
	document.getElementById("lce2v6").innerHTML=longitudreale232;

	document.getElementById("ltfv6").innerHTML=longitudtotalf132; 	
	document.getElementById("lcf1v6").innerHTML=longitudrealf132;	
	document.getElementById("lcf2v6").innerHTML=longitudrealf232;


	document.getElementById("ltgv6").innerHTML=longitudtotalg132; 	
	document.getElementById("lcg1v6").innerHTML=longitudrealg132;	
	document.getElementById("lcg2v6").innerHTML=longitudrealg232;
	document.getElementById("lcg3v6").innerHTML=longitudrealg332;
	document.getElementById("lcg4v6").innerHTML=longitudrealg432;

	document.getElementById("lthv6").innerHTML=longitudtotalh132; 	
	document.getElementById("lch1v6").innerHTML=longitudrealh132;	
	document.getElementById("lch2v6").innerHTML=longitudrealh232;

	document.getElementById("ltiv6").innerHTML=longitudtotali132; 	
	document.getElementById("lci1v6").innerHTML=longitudreali132;	
	document.getElementById("lci2v6").innerHTML=longitudreali232;

	// show("resultado","imagen");

	

	

}

function calcularpor32() {

		mtl32=document.getElementById("tm32").innerHTML;

		por=document.getElementById("des32").value;

		por=por.replace(",",".");

		t = parseInt(mtl32) + ((por/100) * parseInt(mtl32));

	    t = t.toFixed(1);

		document.getElementById("tml32").innerHTML= t + "m.";	

}





function densi32(){

	cantidad32= document.getElementById("cantidad32").innerHTML;

	cantidad32=cantidad32.substring(0,cantidad32.indexOf(" m"));	

    densidad32= document.getElementById("densidad32").value;

	kg32=cantidad32 * densidad32;

	kg32=kg32.toFixed(1);

	document.getElementById("peso32").innerHTML= kg32 + " kg"; ;		

	

}





function densi31(){

	cantidad31= document.getElementById("cantidad31").innerHTML;

	cantidad31=cantidad31.substring(0,cantidad31.indexOf(" m"));	

    densidad31= document.getElementById("densidad31").value;

	kg31=cantidad31 * densidad31;

	kg31=kg31.toFixed(1);

	document.getElementById("peso31").innerHTML= kg31 + " kg"; ;		

	

}



function densi(){



	cantidad= document.getElementById("cantidad").innerHTML;

	cantidad=cantidad.substring(0,cantidad.indexOf(" m"));

	densidad= document.getElementById("densidad").value;

	kg=cantidad * densidad;

	kg=kg.toFixed(1);

	document.getElementById("peso").innerHTML= kg + " kg"; ;		

	

}


function densiv2(){



	cantidad= document.getElementById("cantidadv2").innerHTML;

	cantidad=cantidad.substring(0,cantidad.indexOf(" m"));

	densidad= document.getElementById("densidadv2").value;

	kg=cantidad * densidad;

	kg=kg.toFixed(1);

	document.getElementById("pesov2").innerHTML= kg + " kg"; ;		


}


function calcularv22 (){

	cantidad31= document.getElementById("cantidadv2").innerHTML;

	cantidad31=cantidad31.substring(0,cantidad31.indexOf(" m"));	

    densidad31= document.getElementById("densidadv2").value;

	kg31=cantidad31 * densidad31;

	kg31=kg31.toFixed(1);

	document.getElementById("pesov2").innerHTML= kg31 + " kg"; ;		

	

}