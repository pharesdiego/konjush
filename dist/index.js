if('serviceWorker' in navigator){
	
	navigator.serviceWorker
		.register('sw.js')
			.then(() => {
				console.log('registered sw')
			})
			.catch(err => {
				console.log('error installing sw')
			})

}
