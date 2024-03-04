





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

function textoyemen(){
	$('#logomidomo').data('powertip', 'FIN A LA GUERRA EN YEMEN.');
	
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

function calcular()
{

	//obtengo valores

	d = document.getElementById("diametro").value;

	ancho= document.getElementById("ancho").value;

	grosor= document.getElementById("grosor").value;

	

	factora1=document.getElementById("factora1").innerHTML;

	gradoa1=document.getElementById("gradoa1").innerHTML;

	cortata1=document.getElementById("cortata1").innerHTML;

	

	factora2=document.getElementById("factora2").innerHTML;

	gradoa2=document.getElementById("gradoa2").innerHTML;

	cortata2=document.getElementById("cortata2").innerHTML;

	

	factorb1=document.getElementById("factorb1").innerHTML;

	gradob1=document.getElementById("gradob1").innerHTML;

	cortatb1=document.getElementById("cortatb1").innerHTML;	

	

	factorb2=document.getElementById("factorb2").innerHTML;

	gradob2=document.getElementById("gradob2").innerHTML;

	cortatb2=document.getElementById("cortatb2").innerHTML;		



	factorc1=document.getElementById("factorc1").innerHTML;

	gradoc1=document.getElementById("gradoc1").innerHTML;

	cortatc1=document.getElementById("cortatc1").innerHTML;		



	factorc2=document.getElementById("factorc2").innerHTML;

	gradoc2=document.getElementById("gradoc2").innerHTML;

	cortatc2=document.getElementById("cortatc2").innerHTML;		



	factorc3=document.getElementById("factorc3").innerHTML;

	gradoc3=document.getElementById("gradoc3").innerHTML;

	cortatc3=document.getElementById("cortatc3").innerHTML;	



	factord1=document.getElementById("factord1").innerHTML;

	gradod1=document.getElementById("gradod1").innerHTML;

	cortatd1=document.getElementById("cortatd1").innerHTML;



	factord2=document.getElementById("factord2").innerHTML;

	gradod2=document.getElementById("gradod2").innerHTML;

	cortatd2=document.getElementById("cortatd2").innerHTML;



	factord3=document.getElementById("factord3").innerHTML;

	gradod3=document.getElementById("gradod3").innerHTML;

	cortatd3=document.getElementById("cortatd3").innerHTML;



	factord4=document.getElementById("factord4").innerHTML;

	gradod4=document.getElementById("gradod4").innerHTML;

	cortatd4=document.getElementById("cortatd4").innerHTML;	

	

	factore1=document.getElementById("factore1").innerHTML;

	gradoe1=document.getElementById("gradoe1").innerHTML;

	cortate1=document.getElementById("cortate1").innerHTML;



	factore2=document.getElementById("factore2").innerHTML;

	gradoe2=document.getElementById("gradoe2").innerHTML;

	cortate2=document.getElementById("cortate2").innerHTML;		

	

	factorf1=document.getElementById("factorf1").innerHTML;

	gradof1=document.getElementById("gradof1").innerHTML;

	cortatf1=document.getElementById("cortatf1").innerHTML;	

	

	factorf2=document.getElementById("factorf2").innerHTML;

	gradof2=document.getElementById("gradof2").innerHTML;

	cortatf2=document.getElementById("cortatf2").innerHTML;		

	

	//calculos

	altura = d/2;

	

	area= Math.PI *(d/2)*(d/2);

	area = area.toFixed(1);

	

	areacubierta =   (4 * Math.PI * ((d/2)*(d/2)))/2

	areacubierta = areacubierta.toFixed(1);

	

		

	longitudtotala1aux=(d/2)*  factora1 * 100;

	longitudtotala1= longitudtotala1aux.toFixed(1);

	diferenciaa1aux=grosor/Math.cos(gradoa1 * Math.PI/180)

	diferenciaa1=diferenciaa1aux.toFixed(6);

	longitudreala1=longitudtotala1aux - diferenciaa1aux

	longitudreala1=longitudreala1.toFixed(1);

	totalessina1=cortata1*longitudtotala1/100;

	totalesa1=longitudreala1*cortata1/100

	

	longitudtotala2aux=(d/2)*  factora2 * 100;

	longitudtotala2= longitudtotala2aux.toFixed(1);

	diferenciaa2aux=grosor/Math.cos(gradoa2 * Math.PI/180)

	diferenciaa2=diferenciaa2aux.toFixed(6);

	longitudreala2=longitudtotala2 - diferenciaa2

	longitudreala2=longitudreala2.toFixed(1);

	totalessina2=cortata2*longitudtotala2/100;

	totalesa2=longitudreala2*cortata2/100

	

	longitudtotalb1aux=(d/2)*  factorb1 * 100;

	longitudtotalb1= longitudtotalb1aux.toFixed(1);

	diferenciab1aux=grosor/Math.cos(gradob1 * Math.PI/180)

	diferenciab1=diferenciab1aux.toFixed(6);

	longitudrealb1=longitudtotalb1aux - diferenciab1aux

	longitudrealb1=longitudrealb1.toFixed(1);

	totalessinb1=cortatb1*longitudtotalb1/100;

	totalesb1=longitudrealb1*cortatb1/100



	longitudtotalb2aux=(d/2)*  factorb2 * 100;

	longitudtotalb2= longitudtotalb2aux.toFixed(1);

	diferenciab2aux=grosor/Math.cos(gradob2 * Math.PI/180)

	diferenciab2=diferenciab2aux.toFixed(6);

	longitudrealb2=longitudtotalb2aux - diferenciab2aux

	longitudrealb2=longitudrealb2.toFixed(1);

	totalessinb2=cortatb2*longitudtotalb2/100;

	totalesb2=longitudrealb2*cortatb2/100	

	

	longitudtotalc1aux=(d/2)*  factorc1 * 100;

	longitudtotalc1= longitudtotalc1aux.toFixed(1);

	diferenciac1aux=grosor/Math.cos(gradoc1 * Math.PI/180)

	diferenciac1=diferenciac1aux.toFixed(6);

	longitudrealc1=longitudtotalc1aux - diferenciac1aux

	longitudrealc1=longitudrealc1.toFixed(1);

	totalessinc1=cortatc1*longitudtotalc1/100;

	totalesc1=longitudrealc1*cortatc1/100	

	

	longitudtotalc2aux=(d/2)*  factorc2 * 100;

	longitudtotalc2= longitudtotalc2aux.toFixed(1);

	diferenciac2aux=grosor/Math.cos(gradoc2 * Math.PI/180)

	diferenciac2=diferenciac2aux.toFixed(6);

	longitudrealc2=longitudtotalc2aux - diferenciac2aux

	longitudrealc2=longitudrealc2.toFixed(1);

	totalessinc2=cortatc2*longitudtotalc2/100;

	totalesc2=longitudrealc2*cortatc2/100		



	longitudtotalc3aux=(d/2)*  factorc3 * 100;

	longitudtotalc3= longitudtotalc3aux.toFixed(1);

	diferenciac3aux=grosor/Math.cos(gradoc3 * Math.PI/180)

	diferenciac3=diferenciac3aux.toFixed(6);

	longitudrealc3=longitudtotalc3aux - diferenciac3aux

	longitudrealc3=longitudrealc3.toFixed(1);

	totalessinc3=cortatc3*longitudtotalc3/100;

	totalesc3=longitudrealc3*cortatc3/100	



	longitudtotald1aux=(d/2)*  factord1 * 100;

	longitudtotald1= longitudtotald1aux.toFixed(1);

	diferenciad1aux=grosor/Math.cos(gradod1 * Math.PI/180)

	diferenciad1=diferenciad1aux.toFixed(6);

	longitudreald1=longitudtotald1aux - diferenciad1aux

	longitudreald1=longitudreald1.toFixed(1);

	totalessind1=cortatd1*longitudtotald1/100;

	totalesd1=longitudreald1*cortatd1/100	



	longitudtotald2aux=(d/2)*  factord2 * 100;

	longitudtotald2= longitudtotald2aux.toFixed(1);

	diferenciad2aux=grosor/Math.cos(gradod2 * Math.PI/180)

	diferenciad2=diferenciad2aux.toFixed(6);

	longitudreald2=longitudtotald2 - diferenciad2

	longitudreald2=longitudreald2.toFixed(1);

	totalessind2=cortatd2*longitudtotald2/100;

	totalesd2=longitudreald2*cortatd2/100	



	longitudtotald3aux=(d/2)*  factord3 * 100;

	longitudtotald3= longitudtotald3aux.toFixed(1);

	diferenciad3aux=grosor/Math.cos(gradod3 * Math.PI/180)

	diferenciad3=diferenciad3aux.toFixed(6);

	longitudreald3=longitudtotald3aux - diferenciac3aux

	longitudreald3=longitudreald3.toFixed(1);

	totalessind3=cortatd3*longitudtotald3/100;

	totalesd3=longitudreald3*cortatd3/100	



	longitudtotald4aux=(d/2)*  factord4 * 100;

	longitudtotald4= longitudtotald4aux.toFixed(1);

	diferenciad4aux=grosor/Math.cos(gradod4 * Math.PI/180)

	diferenciad4=diferenciad4aux.toFixed(6);

	longitudreald4=longitudtotald4aux - diferenciad4aux

	longitudreald4=longitudreald4.toFixed(1);

	totalessind4=cortatd4*longitudtotald4/100;

	totalesd4=longitudreald4*cortatd4/100	



	longitudtotale1aux=(d/2)*  factore1 * 100;

	longitudtotale1= longitudtotale1aux.toFixed(1);

	diferenciae1aux=grosor/Math.cos(gradoe1 * Math.PI/180)

	diferenciae1=diferenciae1aux.toFixed(6);

	longitudreale1=longitudtotale1aux - diferenciae1aux

	longitudreale1=longitudreale1.toFixed(1);

	totalessine1=cortate1*longitudtotale1/100;

	totalese1=longitudreale1*cortate1/100	



	longitudtotale2aux=(d/2)*  factore2 * 100;

	longitudtotale2= longitudtotale2aux.toFixed(1);

	diferenciae2aux=grosor/Math.cos(gradoe2 * Math.PI/180)

	diferenciae2=diferenciae2aux.toFixed(6);

	longitudreale2=longitudtotale2aux - diferenciae2aux

	longitudreale2=longitudreale2.toFixed(1);

	totalessine2=cortate2*longitudtotale2/100;

	totalese2=longitudreale2*cortate2/100		

	

	longitudtotalf1aux=(d/2)*  factorf1 * 100;

	longitudtotalf1= longitudtotalf1aux.toFixed(1);

	diferenciaf1aux=grosor/Math.cos(gradof1 * Math.PI/180)

	diferenciaf1=diferenciaf1aux.toFixed(6);

	longitudrealf1=longitudtotalf1aux - diferenciaf1aux

	longitudrealf1=longitudrealf1.toFixed(1);

	totalessinf1=cortatf1*longitudtotalf1/100;

	totalesf1=longitudrealf1*cortatf1/100	



	longitudtotalf2aux=(d/2)*  factorf2 * 100;

	longitudtotalf2= longitudtotalf2aux.toFixed(1);

	diferenciaf2aux=grosor/Math.cos(gradof2 * Math.PI/180)

	diferenciaf2=diferenciaf2aux.toFixed(6);

	longitudrealf2=longitudtotalf2aux - diferenciaf2aux

	longitudrealf2=longitudrealf2.toFixed(1);

	totalessinf2=cortatf2*longitudtotalf2/100;

	totalesf2=longitudrealf2*cortatf2/100		

	

	//calculo madera

	

	mliniales= totalesa1 + totalesa2 + totalesb1 + totalesb2 + totalesc1 + totalesc2 + totalesc3 + totalesd1 + totalesd2 + totalesd3 + totalesd4 + totalese1 + totalese2 + totalesf1 + totalesf2;

	document.getElementById("mliniales").innerHTML= mliniales;

	mcubicos= mliniales*(ancho/100)*(grosor/100);

	document.getElementById("mcubicos").innerHTML= mcubicos;	

	kg=mcubicos * 480;

	document.getElementById("kg").innerHTML= kg;	

	

	// Pinto

	document.getElementById("altura").innerHTML=altura; 

	document.getElementById("area").innerHTML=area; 

	document.getElementById("areacubierta").innerHTML=areacubierta; 

	

	document.getElementById("longitudtotala1").innerHTML=longitudtotala1; 	

	document.getElementById("diferenciaa1").innerHTML=diferenciaa1; 	

	document.getElementById("longitudreala1").innerHTML=longitudreala1;	

	document.getElementById("totalessina1").innerHTML=totalessina1;		

	document.getElementById("totalesa1").innerHTML=totalesa1;	



	document.getElementById("longitudtotala2").innerHTML=longitudtotala2; 	

	document.getElementById("diferenciaa2").innerHTML=diferenciaa2; 	

	document.getElementById("longitudreala2").innerHTML=longitudreala2;	

	document.getElementById("totalessina2").innerHTML=totalessina2;		

	document.getElementById("totalesa2").innerHTML=totalesa2;



	document.getElementById("longitudtotalb1").innerHTML=longitudtotalb1; 	

	document.getElementById("diferenciab1").innerHTML=diferenciab1; 	

	document.getElementById("longitudrealb1").innerHTML=longitudrealb1;	

	document.getElementById("totalessinb1").innerHTML=totalessinb1;		

	document.getElementById("totalesb1").innerHTML=totalesb1;	

		

	document.getElementById("longitudtotalb2").innerHTML=longitudtotalb2; 	

	document.getElementById("diferenciab2").innerHTML=diferenciab2; 	

	document.getElementById("longitudrealb2").innerHTML=longitudrealb2;	

	document.getElementById("totalessinb2").innerHTML=totalessinb2;		

	document.getElementById("totalesb2").innerHTML=totalesb2;	



	document.getElementById("longitudtotalc1").innerHTML=longitudtotalc1; 	

	document.getElementById("diferenciac1").innerHTML=diferenciac1; 	

	document.getElementById("longitudrealc1").innerHTML=longitudrealc1;	

	document.getElementById("totalessinc1").innerHTML=totalessinc1;		

	document.getElementById("totalesc1").innerHTML=totalesc1;	



	document.getElementById("longitudtotalc2").innerHTML=longitudtotalc2; 	

	document.getElementById("diferenciac2").innerHTML=diferenciac2; 	

	document.getElementById("longitudrealc2").innerHTML=longitudrealc2;	

	document.getElementById("totalessinc2").innerHTML=totalessinc2;		

	document.getElementById("totalesc2").innerHTML=totalesc2;	



	document.getElementById("longitudtotalc3").innerHTML=longitudtotalc3; 	

	document.getElementById("diferenciac3").innerHTML=diferenciac3; 	

	document.getElementById("longitudrealc3").innerHTML=longitudrealc3;	

	document.getElementById("totalessinc3").innerHTML=totalessinc3;		

	document.getElementById("totalesc3").innerHTML=totalesc3;



	document.getElementById("longitudtotald1").innerHTML=longitudtotald1; 	

	document.getElementById("diferenciad1").innerHTML=diferenciad1; 	

	document.getElementById("longitudreald1").innerHTML=longitudreald1;	

	document.getElementById("totalessind1").innerHTML=totalessind1;		

	document.getElementById("totalesd1").innerHTML=totalesd1;



	document.getElementById("longitudtotald2").innerHTML=longitudtotald2; 	

	document.getElementById("diferenciad2").innerHTML=diferenciad2; 	

	document.getElementById("longitudreald2").innerHTML=longitudreald2;	

	document.getElementById("totalessind2").innerHTML=totalessind2;		

	document.getElementById("totalesd2").innerHTML=totalesd2;



	document.getElementById("longitudtotald3").innerHTML=longitudtotald3; 	

	document.getElementById("diferenciad3").innerHTML=diferenciad3; 	

	document.getElementById("longitudreald3").innerHTML=longitudreald3;	

	document.getElementById("totalessind3").innerHTML=totalessind3;		

	document.getElementById("totalesd3").innerHTML=totalesd3;



	document.getElementById("longitudtotald4").innerHTML=longitudtotald4; 	

	document.getElementById("diferenciad4").innerHTML=diferenciad4; 	

	document.getElementById("longitudreald4").innerHTML=longitudreald4;	

	document.getElementById("totalessind4").innerHTML=totalessind4;		

	document.getElementById("totalesd4").innerHTML=totalesd4;



	document.getElementById("longitudtotale1").innerHTML=longitudtotale1; 	

	document.getElementById("diferenciae1").innerHTML=diferenciae1; 	

	document.getElementById("longitudreale1").innerHTML=longitudreale1;	

	document.getElementById("totalessine1").innerHTML=totalessine1;		

	document.getElementById("totalese1").innerHTML=totalese1;



	document.getElementById("longitudtotale2").innerHTML=longitudtotale2; 	

	document.getElementById("diferenciae2").innerHTML=diferenciae2; 	

	document.getElementById("longitudreale2").innerHTML=longitudreale2;	

	document.getElementById("totalessine2").innerHTML=totalessine2;		

	document.getElementById("totalese2").innerHTML=totalese2;	

	

	document.getElementById("longitudtotalf1").innerHTML=longitudtotalf1; 	

	document.getElementById("diferenciaf1").innerHTML=diferenciaf1; 	

	document.getElementById("longitudrealf1").innerHTML=longitudrealf1;	

	document.getElementById("totalessinf1").innerHTML=totalessinf1;		

	document.getElementById("totalesf1").innerHTML=totalesf1;



	document.getElementById("longitudtotalf2").innerHTML=longitudtotalf2; 	

	document.getElementById("diferenciaf2").innerHTML=diferenciaf2; 	

	document.getElementById("longitudrealf2").innerHTML=longitudrealf2;	

	document.getElementById("totalessinf2").innerHTML=totalessinf2;		

	document.getElementById("totalesf2").innerHTML=totalesf2;	

	

	show("resultado","imagen");

	

	}