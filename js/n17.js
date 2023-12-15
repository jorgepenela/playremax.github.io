let iniciar17 = document.querySelector('#iniciar17')
let n17game = document.querySelector('#n17game')
let n17i = 0


function randomX() {
  return Math.random() * (200 - 0) - 10;
}
function randomY() {
  return Math.random() * (400 - 0) + 0;
}

iniciar17.addEventListener('click', function(){		
	
	let globar17 = setInterval(function(){

		n17game.innerHTML = "";

		for(n17=0 ; n17<4 ; n17++){

			e = new Globo(randomX(), randomY());
		    n17game.innerHTML += `<img src="img/emoji.png" alt="" style="bottom: -10px ; left: ${e.y}px;" class="n17target globoGameTarget">`;	    

		    if(n17i==0 || n17i==2 || n17i==6){
		    	n17game.innerHTML += `<img src="img/bomba.png" alt="" style=" width: 45px; height: auto; bottom: -10px ; left: 75px;" class="globoGameTarget" onclick="error2()">`;	    		    	
		    }

		    let n17target = document.querySelectorAll('.n17target')
		    
		    	
		    for(let n17t of n17target){
		    	n17t.addEventListener('click',function(){
		    		n17i = n17i+1
		    		n17t.classList.add('taped')
		    		//console.log(n17i)

		    		if(n17i >= 15){				
		    			
	    				n17i = 0;				
	    				clearInterval(globar17)
	    				exito('#n17')				
	    				return			    		
		    		}
		    	})
		    }
		}
			
	},2000)

})


let n17target = document.querySelectorAll('.n17target')

for(let n17t of n17target){
	n17t.addEventListener('click',function(){
		n17i = n17i+1
		n17t.classList.add('taped')
		//console.log(n17i)

		if(n17i >= 10){				
			
			n17i = 0;							
		}
	})
}

