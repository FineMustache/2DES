var respFetch = fetch("https://jsonplaceholder.typicode.com/todos")

respFetch.then((response) => {
    return response.json()
})
.then((data) =>{
    data.forEach(todo => {
        let item = document.querySelector('.modelo').cloneNode(true)
        item.querySelector('#userId').innerHTML = todo.userId
        item.querySelector('#title').innerHTML = todo.title
        let cb = item.querySelector('#completed').checked = todo.completed

        item.classList.remove("modelo")

        document.querySelector('.todo').appendChild(item)
    });
})