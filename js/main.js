//inicial
let juego, consigna, countDown;
let musica = document.querySelector('#s-fondo').cloneNode()
let musError = document.querySelector('#s-error').cloneNode()
let musAcierto = document.querySelector('#s-acierto').cloneNode()
musica.volume = 0.4;
musica.loop = true
//musica.play()



// indice
let niveles = document.querySelectorAll('#niveles a')

//juego
let juegos = document.querySelectorAll('.juego')
let consignas = document.querySelectorAll('.consigna')


// mensaje
let mensaje = document.querySelector('#mensaje')
let siguiente = document.querySelector('#siguiente')
let recordTag = document.querySelector('#recordTag')

//score
let scoreMenTag = document.querySelector('#scoreMenTag')
let scoreTag = document.querySelector('#score')
let score = 0;

//vidas
let vidasTag = document.querySelector('#vidasTag')
let vidasInicial = 3
let vidas = 3

//reloj
relojT = document.querySelector('#reloj')
relojTag = document.querySelector('#reloj span')
let tiempoInicial = 15
let tiempo = tiempoInicial
//seleccionar dificulad
document.querySelector('#facil').addEventListener('click', function(){
	tiempoInicial = 15	
})
document.querySelector('#medio').addEventListener('click', function(){
	tiempoInicial = 10	
})
document.querySelector('#dificil').addEventListener('click', function(){
	tiempoInicial = 5	
})



//console.log(document.querySelector('#n1').dataset.level)

function test(){
  alert('test')
}

function activarReloj(){	
	relojTag.innerHTML = tiempoInicial
	tiempo = tiempoInicial	

	countDown = setInterval(function(){		
		
		tiempo = tiempo-1
		relojTag.innerHTML = tiempo;
		anchoTiempo = 100/tiempoInicial*tiempo
		relojTag.style.width = anchoTiempo+'%'
		error()
	}, 1000)
}

function play(id){	
	document.querySelector(id+" .consigna").classList.add('hidden')
	document.querySelector(id+" .juego").classList.remove('hidden')	
	document.querySelector(id+" .juego").classList.remove('desactivar')	
	
	// ACTIVAR RELOJ	
	relojT.classList.remove('hidden')
	activarReloj()

}


function exito(id){
	document.querySelector('#s-acierto').cloneNode().play();
	// console.log('se activo exito() con el parametro: '+id)

	score = score+100;
	//console.log('hubo exito en el nivel '+document.querySelector(id).dataset.level)
	scoreTag.innerHTML = score;
	scoreMenTag.innerHTML = score;

	
	document.querySelector(id+" .juego").classList.add('desactivar')
	mensaje.classList.remove('hidden')
	mensaje.classList.add('mensajeDesplegado')

	//siguiente
	suma = parseInt(document.querySelector(id).dataset.level)	
	suma = suma+1;
	siguiente.setAttribute('href','#n'+suma)
	//console.log(suma)

	siguiente.addEventListener('click',function(){
		mensaje.classList.add('hidden')
	})

	//reloj
	relojT.classList.add('hidden')
	tiempo = tiempoInicial
	clearInterval(countDown)
	tiempo = tiempoInicial	
	relojTag.style.width = 100+'%'


	//indice
	for(let niv of niveles){
		//console.log(niv.getAttribute('href') +" | "+id)
		
		if(niv.getAttribute('href') == id){
			//console.log('se habilito un nuevo nivel')
			niv.classList.remove('desactivar')
		}		
	}

	//reset
	let okas = document.querySelectorAll('.oka')
	for(let oka of okas){ oka.classList.remove('oka')}
		let descubiertos = document.querySelectorAll('.descubierto')
	for(let descu of descubiertos){ descu.classList.remove('descubierto')}

}

function error(){

	if(tiempo == 0){
		vidas = vidas-1;
		vidasTag.innerHTML = vidas			
		tiempo = tiempoInicial;
		relojTag.style.width = 100+'%'
		console.log('error')
		document.querySelector('#s-error').cloneNode().play();
		document.querySelector('body').classList.add('error')

		setTimeout(function(){
			document.querySelector('body').classList.remove('error')			
		},1000)

		if(vidas == 0){
			clearInterval(countDown)
			gameOver()			
		}
	}

	
}

function error2(){
	
	vidas = vidas-1;
	vidasTag.innerHTML = vidas			
	tiempo = tiempoInicial;
	relojTag.style.width = 100+'%'
	console.log('error')
	document.querySelector('#s-error').cloneNode().play();
	document.querySelector('body').classList.add('error')

	setTimeout(function(){
		document.querySelector('body').classList.remove('error')			
	},1000)

	if(vidas == 0){
		clearInterval(countDown)
		gameOver()
	}
		
}

document.querySelector('#homeBtn').addEventListener('click',function(){
	reset()
})

function gameOver(){
	mensaje.classList.remove('hidden')	
	document.querySelector('#mensaje h3').textContent = '¡Jugá de nuevo!'
	siguiente.classList.add('hidden')
	//document.querySelector('#recordTag').classList.remove('hidden')	
}

function reset(ti){

	console.log('se activo reset()')
	window.location.href = '#home'
	document.querySelector('body').classList.remove('error')	

	for(var con of consignas){
		con.classList.remove('hidden')
	}
	for(var jue of juegos){
		jue.classList.add('hidden')
	}

	// mensaje
	mensaje.classList.add('hidden')
	document.querySelector('#mensaje h3').textContent = '¡Muy bien!'
	siguiente.classList.remove('hidden')
	document.querySelector('#recordTag').classList.add('hidden')



	// score
	score = 0;	
	scoreTag.innerHTML = score;
	scoreMenTag.innerHTML = score;

	// vidas
	vidas = vidasInicial
	vidasTag.innerHTML = vidasInicial


	// reloj
	if (ti) {tiempoInicial = ti}
	tiempo = tiempoInicial
	relojTag.innerHTML = tiempoInicial
	relojT.classList.add('hidden')
	clearInterval(countDown)
	relojTag.style.width = 100+'%'

	
	let juegosDesactivados = document.querySelectorAll('.juego.desactivar')
	for(let d of juegosDesactivados){
		d.classList.remove('desactivar')
	}

	// PENDIENTE: reactivar musica

	/*if(typeof globar !== 'undefined'){
		clearInterval(globar)
	}*/
}

function muteUnmute(){	
	let muteIcon = document.querySelector('#mute img')	
	if (musica.paused) {
		musica.play()
		muteIcon.setAttribute('src','img/volume.svg')		
		


	} else {
		musica.pause()
		muteIcon.setAttribute('src','img/mute-speaker.svg')				
	}
}



// animacion en target
let tarr = document.querySelectorAll('.target')
for(let ta of tarr){
	ta.addEventListener('click',function(e){
		e.target.classList.add('oka')		
	})	
}



addEventListener('load',function(){
	reset()
})


//compartir
const shareButton = document.querySelectorAll('.shareButton')

for(let sb of shareButton){
	sb.addEventListener('click', event => {		
		document.title = 'Obtuve '+score+' en Play RE/MAX! ¿Podrás superarme?'
		document.querySelector('.ogTitle').setAttribute('content','Obtuve '+score+' puntos en Play RE/MAX! ¿Podrás superarme?')
		document.querySelector('.twTitle').setAttribute('content','Obtuve '+score+' puntos en Play RE/MAX! ¿Podrás superarme?')
	  if (navigator.share) {
	    navigator.share({
	      title: 'Obtuve '+score+' puntos en Play RE/MAX! ¿Podrás superarme?',
	      url: 'https://playremax.com/'
	    }).then(() => {
	      //console.log('Gracias por compartir :D');
	    })
	    .catch(console.error);
	  } else {
	    //console.log('sin soporte para compartir')
	    //sb.classList.add('hidden')
	    document.querySelector('#shareFallback').classList.remove('hidden')
	  }
	});


}

// INSTALABLE
let addBtn = document.querySelector('#a2hs')

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    console.log('instalable')
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          //console.log('User accepted the A2HS prompt');
          addBtn.classList.add('hidden')
        } else {
          //console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});


// deshabilitar scroll	
window.addEventListener('resize',function(e){
	if(window.innerHeight < window.innerWidth){
		e.preventDefault()
		alert('Jugá con pantalla vertical')
		//location.reload()
	}	
})