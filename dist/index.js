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

var deferredPrompt;

window.addEventListener('beforeinstallprompt', function(e) {

  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  return false;
});

btnSave.addEventListener('click', function() {
  if(deferredPrompt !== undefined) {
    // The user has had a positive interaction with our app and Chrome
    // has tried to prompt previously, so let's show the prompt.
    deferredPrompt.prompt();

    // Follow what the user has done with the prompt.
    deferredPrompt.userChoice.then(function(choiceResult) {

      // We no longer need the prompt.  Clear it up.
      deferredPrompt = null;
    });
  }
});