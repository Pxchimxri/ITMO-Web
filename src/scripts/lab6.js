var btn = document.getElementById('btn').addEventListener('click', getPost)
var con = 1

var div = document.getElementById('CardDiv')

async function getPost() {
	var pre = document.querySelector('.preloader')
	pre.setAttribute('class', 'active')
	console.log(pre)
	await sleep(1500)
	// pre.setAttribute('class', 'preloader')
	let a = Math.round(FilterFunc(con))
	console.log(a)
	fetch(`https://jsonplaceholder.typicode.com/photos/${a}`) //получить ресурсы по сети асинхронно
		.then(res => {
			if (res.ok) {
				return res.json() //принимает Response поток и считывает его
			} else {
				throw new Error(res.status)
			}
		})
		.then(post => {
			pre.remove()
			for (let index = 0; index < 1; index++) {
				div.innerHTML += `
    
           <div class = "card">
           <img class="card-img" src="${post.thumbnailUrl}">
           <div class="card-body">
           <h5 class="card-title">${post.id}</h5>
           <p class="card-text">${post.title}</p>
           </div>
           </div>
           <div class="preloader"><img src="src/images/preloader.gif" /></div>`

				con = con + 1
			}
		})
		.catch(error => {
			alert('Что-то пошло не так')
			console.log('Error: ' + error)
		})
}
function FilterFunc(num) {
	let max = num * 100
	let min = num * 100 - 100
	return Math.random() * (max - min) + min
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
