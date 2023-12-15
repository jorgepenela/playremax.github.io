let iniciar5 = document.querySelector('#iniciar5')
let n5game = document.querySelector('#n5game')
let n5i = 0

class Globo{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}	
}


function randomX() {
  return Math.random() * (200 - 0) - 10;
}
function randomY() {
  return Math.random() * (400 - 0) + 0;
}

iniciar5.addEventListener('click', function(){		
	
	let globar = setInterval(function(){

		n5game.innerHTML = "";
		iii = 0
		for(n=0 ; n<4 ; n++){
			console.log('soltando globos'+ iii+1)
			iii++
			e = new Globo(randomX(), randomY());
		    n5game.innerHTML += `<img src="img/emoji.png" alt="" style="bottom: -10px ; left: ${e.y}px;" class="n5target globoGameTarget">`;	    

		    if(n5i==3 || n5i==1){
		    	n5game.innerHTML += `<img src="img/bomba.png" alt="" style=" width: 45px; height: auto; bottom: -10px ; left: 75px;" class="globoGameTarget" onclick="error2()">`;	    		    	
		    }

		    let n5target = document.querySelectorAll('.n5target')
		    
		    	
		    for(let n5t of n5target){
		    	n5t.addEventListener('click',function(){
		    		n5i = n5i+1
		    		n5t.classList.add('taped')
		    		//console.log(n5i)

		    		if(n5i >= 10){				
		    			
	    				n5i = 0;				
	    				clearInterval(globar)
	    				exito('#n5')				
	    				return			    		
		    		}
		    	})
		    }
		}
			
	},2000)

})


let n5target = document.querySelectorAll('.n5target')

for(let n5t of n5target){
	n5t.addEventListener('click',function(){
		n5i = n5i+1
		n5t.classList.add('taped')
		//console.log(n5i)

		if(n5i >= 10){				
			
			n5i = 0;							
		}
	})
}