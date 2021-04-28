var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var turno = 0;
var suma;
var punto;
var turno_ninja = 0;
var disputa = false;




window.onload = init;

function init(){
	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);

	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
	cerrar.addEventListener("click",cerrarVentana);
}

function tirardado(){
	return Math.floor(Math.random() * 6) + 1 ;
}

function actualizarDado(ref,cara){
	ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
	tiro_1 = tirardado();//Retorna un numero entre 1 y 6
	tiro_2 = tirardado();
	actualizarDado(dado1,tiro_1);
	actualizarDado(dado2,tiro_2);

	
	turno = turno+1;
	mostrarMensaje("Tienes un turno más...");
	suma = tiro_1+tiro_2; 
	turno_ninja = turno_ninja +1

	
	if (turno = 1 && disputa==false){
		if (suma == 7 || suma == 11)
		{
			mostrarMensaje("Felicidades... sobrevives. Si vuelves a tirar, reiniciarás el juego.");
			turno=0;
			punto=0;
			disputa=false;
		}
		if (suma == 2 || suma == 3 || suma == 12 && disputa==false){
			mostrarMensaje("Mala suerte, no lograste sobrevivir ni siquiera un turno. El Demonio del Dado toma tu alma y te la arrebata, causándote un enorme dolor, lo cual es lo último que sientes. Vuelve a tirar para volver a intentarlo");
			turno=0;
			punto=0;
			disputa=false;
		}
	}
	if (turno !== 1 && disputa == false)
	{

		if(suma == 4 || suma == 5 || suma == 6 || suma == 8 || suma == 9 || suma == 10)
		{
			mostrarMensaje("Has entrado en la zona de disputa, vuelve a sacar " + suma + " antes de sacar 7 y sobrevivirás");
      		punto = suma;
      		turno_ninja =0;
      		disputa = true;
			
		}
	

	}

	if ( turno_ninja !== 0 && punto == suma  )
	{
		mostrarMensaje("Felicidades... sobrevives. Si vuelves a tirar, reiniciarás el juego.");
		turno_ninja= 0;
		turno =0;
		punto = 0;
		disputa = false;
	}	
	if (turno !== 1 && suma == 7 && disputa==true)	
	{
		mostrarMensaje("Mala Suerte... El Demonio del Dado agarra tu cráneo con una fuerza sobrenatural y lo aplasta lentamente, lo último que experimentas es el sonido de tu propio cerebro destripándose.Vuelve a tirar para volver a intentarlo");
		turno_ninja= 0;
		turno =0;
		punto = 0;
		disputa = false;

	}
	
}
function mostrarMensaje (Mensaje){
	mensaje_texto.innerHTML= Mensaje;
	abrirVentana();
}

function abrirVentana(){  
  ventana.className = "ligthbox animate__animated animate__fadeIn";
}

function cerrarVentana(){
  ventana.className = "ligthbox hidden";
}