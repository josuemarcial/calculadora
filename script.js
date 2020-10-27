//Aqui voy a escribir las funciones para mi calculadora 
//Elaboró: Luis Fernando García
// 20 de febrero de 2020


//Esta función retorna en pantalla el digito especificado
function retornar(num)
	{
	var anterior= document.fo.valores.value;
	document.getElementById("valores").value=anterior + num;
	}


//Esta función borra un caracter del recuadro

function eliminar_ultimo()
	{
	var anterior =document.fo.valores.value;
	var nuevovalor=anterior.substring(0,anterior.length-1);
	document.getElementById("valores").value=nuevovalor;
	}

//Esta función borra todo el contenido del input text
function eliminar_todo()
	{
	document.fo.valores.value="";
	}

//Esta función obtiene una aproximación al área en base a una suma de riemann

function suma_riemann(a,b,c)
	{
		var j=parseInt(c);
		var longitud=b-a;
		var longitud_intervalo = longitud/j;	
		var puntomedio;
		var altura;
		var suma_total=0.0;
		var area_actual=0.0
		var matriz=new Array(11);

	for(var i=0; i<11;i++)
	{
		matriz[i]=new Array(5);
		matriz[i][1]=0;//limite inferior 
		matriz[i][2]=0;//limite superior 
		matriz[i][3]=0;//punto medio
		matriz[i][4]=0;//altura
		matriz[i][5]=0;//area rectangulo
	}
//Inicialización de los rectangulos
	
                matriz[1][1]= a;
		matriz[1][2]= a+longitud_intervalo;
		matriz[1][3]= (matriz[1][1]+matriz[1][2])/2;
		matriz[1][4]= elevar_al_cuadrado(matriz[1][3]);
		matriz[1][5]= longitud_intervalo*matriz[1][4];

//Carga de los siguientes rectangulos 
	for(var i=2;i<=j;i++)
	{
		matriz[i][1]=matriz[i-1][2];//limite superior del intervalo 
		matriz[i][2]=matriz[i][1]+longitud_intervalo;
		matriz[i][3]=(matriz[i][1]+matriz[i][2])/2;
		matriz[i][4]=elevar_al_cuadrado(matriz[i][3]);
		matriz[i][5]= longitud_intervalo*matriz[i][4];
	}

//for para obtener las sumas de las areas
	for(var i=0;i<=j;i++)
	{
	area_actual=matriz[i][5];
	suma_total=area_actual+suma_total;
	}
	return suma_total;
	}
//Esta funcion evalua el punto dado al cuadrado
	function elevar_al_cuadrado(num)
	{
	var valor;
	valor = num * num;
	return valor;
	}
	
//Esta funcion me ayuda a probar los resultados

	function visualiza()
	{
	a=parseFloat(obtiene_limiteinferior());
	b=parseFloat(obtiene_limitesuperior());
	c=parseInt(obtiene_n());
	anterior=document.fo.valores.value;
	document.fo.valores.value=anterior + "=>"+suma_riemann(a,b,c);	
	}

//Esta funcion obtiene el limite inferior de la sentencia
	function obtiene_limiteinferior()
	{
	var cadena=document.fo.valores.value;
	var posicioncorcheteapertura=cadena.indexOf("[");
	if(posicioncorcheteapertura!=-1)
	{
	
//document.getElementById("valores").value=posicioncorcheteapertura;
	var posicioncorchetecierre=cadena.indexOf("]");
	if(posicioncorchetecierre!=-1)
	{

	var nuevacadena = cadena.substring(posicioncorcheteapertura+1,posicioncorchetecierre);
	var posicioncomasegunda= nuevacadena.indexOf(",");
	var segundacadena= nuevacadena.substring(0,posicioncomasegunda);
	var limiteinferior=parseFloat(segundacadena);
	}
		else
	{
	document.getElementById("valores").value="Error en el formato";
	}
	}
		else
	{
		document.getElementById("valores").value="Error en el formato";
	}
	return limiteinferior;
	}

//Esta funcion obtiene el límite superior del intervalo 
	function obtiene_limitesuperior()
	{
		var cadena=document.fo.valores.value;
		var posicioncorcheteapertura=cadena.indexOf("[");
	if(posicioncorcheteapertura!=-1)
	{
		var posicioncorchetecierre=cadena.indexOf("]");
		if(posicioncorchetecierre!=-1)
	{
		var nuevacadena= cadena.substring(posicioncorcheteapertura+1,posicioncorchetecierre);
		var posicioncomasegunda=nuevacadena.indexOf(",");
		var segundacadena= nuevacadena.substring(posicioncomasegunda+1,nuevacadena.length);
		var limitesuperior=parseFloat(segundacadena);
	}
		else
	{
		document.getElementById("valores").value="Error en el formato";
	}

	}
		else
	{
		document.getElementById("valores").value="Error en el formato";
	}
		return limitesuperior;
	}

//Esta funcion obtiene el número de n

	function obtiene_n()
	{
		var cadena=document.fo.valores.value;
		var posicion= cadena.indexOf('n');

	if(posicion!=-1)
	{
 		var segundacadena=cadena.substring(posicion + 2,cadena.length);
 		var numero = segundacadena;
	}
		else
	{
		document.getElementById("value").value="Error en el formato";
	}
	return numero;
	}



