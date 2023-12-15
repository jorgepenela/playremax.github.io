let iniciar20 = document.querySelector('#iniciar20')
let n20game = document.querySelector('#n20game')
let n20i = 0


function randomX() {
  return Math.random() * (200 - 0) - 10;
}
function randomY() {
  return Math.random() * (400 - 0) + 0;
}

iniciar20.addEventListener('click', function(){		
	
	let globar20 = setInterval(function(){

		n20game.innerHTML = "";

		for(n=0 ; n<4 ; n++){

			e = new Globo(randomX(), randomY());
		    n20game.innerHTML += `<img src="img/emoji.png" alt="" style="bottom: -10px ; left: ${e.y}px;" class="n20target globoGameTarget">`;	    

		    if(n20i==0 || n20i==2 || n20i==4 || n20i==6 || n20i==8){
		    	n20game.innerHTML += `<img src="img/bomba.png" alt="" style=" width: 55px; height: auto; bottom: -10px ; left: 75px; padding:5px;" class="globoGameTarget" onclick="error2()">`;	    		    	
		    }

		    let n20target = document.querySelectorAll('.n20target')
		    
		    	
		    for(let n20t of n20target){
		    	n20t.addEventListener('click',function(){
		    		n20i = n20i+1
		    		n20t.classList.add('taped')
		    		//console.log(n20i)

		    		if(n20i >= 15){				
		    			
	    				n20i = 0;				
	    				clearInterval(globar20)
	    				exito('#n20')				
	    				return			    		
		    		}
		    	})
		    }
		}
			
	},2000)
	

})


let n20target = document.querySelectorAll('.n20target')

for(let n20t of n20target){
	n20t.addEventListener('click',function(){
		n20i = n20i+1
		n20t.classList.add('taped')
		console.log(n20i)

		if(n20i >= 10){				
			
			n20i = 0;							
		}
	})
}

