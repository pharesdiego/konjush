var CACHE_NAME = 'conju-v12';

var FILES = [
	'bundle.js',
	'index.html',
	'index.js',
	'https://fonts.googleapis.com/css?family=Roboto'
];

self.addEventListener('install', event => {

	event.waitUntil(

		caches.open(CACHE_NAME)
			.then(
				cache => cache.addAll(FILES)
			)

	)

	// update caches
	caches.keys().then(cachesName => cachesName.map(name => {
		if(name != CACHE_NAME) {
			return caches.delete(name);
		}
	}))

})



// fetch files from cache
self.addEventListener('fetch', event => {

	event.respondWith(
		caches.match(event.request)
			.then(
				response => (response) ? response : fetch(event.request)
			)
	)

})
