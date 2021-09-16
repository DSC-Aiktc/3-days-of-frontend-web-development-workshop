function submit_form(){
    let title = document.forms["formDiv"]["title"].value
    let desc = document.forms["formDiv"]["description"].value
    console.log(title)
    console.log(desc)

    if(title == "" || desc == ""){
        alert("bhai field khali hai")
        return
    }

    add_div(title,desc)

    document.forms["formDiv"]["title"].value = ""
    document.forms["formDiv"]["description"].value = ""
}

const add_div = (title,desc) => {
    let todo = document.createElement('div')
    todo.classList.add('todo')
    
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    h1.innerHTML = title
    p.innerHTML = desc


    todo.append(h1)
    todo.append(p)

    document.getElementById('todoList').append(todo)
}


