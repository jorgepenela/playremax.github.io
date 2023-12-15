self.addEventListener('fetch', event =>{
	//console.log(event)
})

self.addEventListener('install', e=>{
	const cacheProm = caches.open('cache-1.0')	
		.then( cache => {

			return cache.addAll( [
				'/index.html',
				'/css/main.css',
				'/css/bootstrap.min.css',
				'/js/main.js',
				'/js/n1.js',
				'/js/n2.js',
				'/js/n3.js',
				'/js/n4.js',
				'/js/n5.js',
				'/js/n6.js',
				'/js/n7.js',
				'/js/n8.js',
				'/js/n9.js',
				'/js/n10.js',
				'/js/n11.js',
				'/js/n12.js',
				'/js/n13.js',
				'/js/n14.js',
				'/js/n15.js',
				'/js/n16.js',
				'/js/n17.js',
				'/js/n18.js',
				'/js/n19.js',
				'/js/n20.js',
				'/img/heart.svg',
				'/img/playGame.svg',
				'/img/mute-speaker.svg',
				'/img/volume.svg',
				'/img/tuto-leer.png',
				'/img/n4.jpg',
				'/img/bomba.png',
				'/img/tuto-vidas.png',
				'/img/background.jpg',
				'/img/tuto-tiempo.png',
				'/img/coin.svg',
				'/img/n5.jpg',
				'/img/remax.png',
				'/img/home.jpg',
				'/img/choice.gif',
				'/img/lupa.png',
				'/img/emoji.png',
				'/img/n20.jpg',
				'/img/n1.jpg',
				'/img/touch.gif',
				'/img/n11.jpg',
				'/img/n14back.jpg',
				'/img/n9.jpg',
				'/img/adivina-5.JPG',
				'/img/adivina-2.JPG',
				'/img/adivina-1.JPG',			
				'/img/n3.jpg',
				'/img/n7.jpg',
				'/img/n13.jpg',
				'/img/n14.png'				
			])
		})

	e.waitUntil(cacheProm)	
})

