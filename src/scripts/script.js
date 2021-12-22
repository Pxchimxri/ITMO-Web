;(() => {
	window.addEventListener('load', function () {
		document.getElementById('load-time').innerHTML = `Load time: ${Math.round(window.performance.now())}ms`
	})
})()
