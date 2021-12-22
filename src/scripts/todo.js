;(function () {
	var list = document.querySelector('#myUL'),
		form = document.querySelector('form'),
		item = document.querySelector('#item')

	form.addEventListener('submit', function (e) {
		// if (e.keyCode == 13) {
		e.preventDefault()
		add()
		// }
	})

	form.querySelector('.addBtn').addEventListener('click', function (e) {
		add()
	})

	function add() {
		if (item.value == '') {
			alert('You did not enter any item!')
		} else {
			list.innerHTML += '<li>' + item.value + '</li>'
			store()
			item.value = ''
		}
	}

	list.addEventListener(
		'click',
		function (e) {
			var t = e.target
			if (t.classList.contains('checked')) {
				t.parentNode.removeChild(t)
			} else {
				t.classList.add('checked')
			}
			store()
		},
		false
	)

	function store() {
		window.localStorage.setItem('todo', JSON.stringify(list.innerHTML))
	}

	function getValues() {
		var storedValues = JSON.parse(localStorage.getItem('todo'))
		if (!storedValues) {
			list.innerHTML = '<li>Make a to do list</li>'
		} else {
			list.innerHTML = storedValues
		}
	}

	getValues()
})()
