let n3target = document.querySelectorAll('#n3 .juego .target')
let n3i = 0

for(let n3t of n3target){
	n3t.addEventListener('click',function(e){
			
		if (!e.target.classList.contains('descubierto')) {
			n3i++
			//console.log(n3i)
			if(n3i >= 10){				
				setTimeout(function(){
					n3i = 0;				
					n3reset()
					exito('#n3')				
					return	

				}, 1000)
			}
		} 
		e.target.classList.add('descubierto')								
	})	

	function n3reset(){
		console.log(n3i)		
	}
	
}