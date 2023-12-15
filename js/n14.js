let n14target = document.querySelectorAll('#n14 .juego .target')
let n14i = 0

for(let n14t of n14target){
	n14t.addEventListener('click',function(e){
			
		if (!e.target.classList.contains('descubierto')) {
			n14i++
			console.log(n14i)
			if(n14i >= 11){				
				
				setTimeout(function(){
					n14i = 0;				
					n14reset()
					exito('#n14')				
					return	

				}, 1000)
			}
		} 
		e.target.classList.add('descubierto')								
	})	

	function n14reset(){
		console.log(n14i)		
	}
	
}