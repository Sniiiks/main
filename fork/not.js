function createToDoItem() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let button = document.createElement('button');
    let buttonWrapper = document.createElement('div');

    form.classList.add('input-group', 'ab-3')
    input.classList.add('form-control')
    input.placeholder = 'Ведите значение '
    button.classList.add('btn', 'btn-primary')
    button.innerHTML = 'Добавить'
    buttonWrapper.classList.add('input-group-append')

    buttonWrapper.append(button)
    form.append(input)
    form.append(buttonWrapper)

    return{
        form,
        input,
        button
    }
}

function createAppTitle (title){
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
}

function createToDoList(){
    let list = document.createElement('ul')
    list.classList.add('list-group')

    return list;
}
let tasks = []
if (localStorage.getItem('todo')){
    tasks = JSON.parse(localStorage.getItem('todo'))
}
function draw(){
    let container = document.getElementById('todo-app')
    let title = createAppTitle('Список Задач')
    let toDoItem = createToDoItem()
    let toDoList = createToDoList()
    container.append(title)
    container.append(toDoItem.form)
    container.append(toDoList)

    if(tasks.length > 0){
        for (let i in tasks){
            let task =  createToDoListItem(tasks[i].value, tasks[i].status)
            task.doneButton.addEventListener('click', function(){
                let classItems = [...task.item.classList]
                if (classItems.includes('list-group-item-success')){
                    tasks[i].status = 'false'
                }else{
                    tasks[i].status = 'true'
                }
                
                task.item.classList.toggle('list-group-item-success')
                localStorage.setItem('todo', JSON.stringify(tasks))
            })
            task.deleteButton.addEventListener('click', function(){
                if(confirm('Are you sure you want to delete')){
                    tasks.splice(i, 1)
                    task.item.remove()

                    localStorage.setItem('todo', JSON.stringify(tasks))
                }
            })
            toDoList.append(task.item)
        }
    }

    toDoItem.form.addEventListener('submit', function(e){
        e.preventDefault()
    
        if(!toDoItem.input.value){
            return;
        }
        tasks.push({value : toDoItem.input.value , status : false })
        let taskId = tasks.length - 1
        let task = createToDoListItem(toDoItem.input.value, false)
    
        task.doneButton.addEventListener('click', function(){
            let classItems = [...task.item.classList]
            if (classItems.includes('list-group-item-success')){
                tasks[taskId].status = 'false'
            }else{
                tasks[taskId].status = 'true'
            }
            task.item.classList.toggle('list-group-item-success')
            localStorage.setItem('todo', JSON.stringify(tasks))
        })
        task.deleteButton.addEventListener('click', function(){
            if(confirm('Are you sure you want to delete')){
                task.item.remove()
                tasks.splice(taskId, 1)
                localStorage.setItem('todo', JSON.stringify(tasks))
            }
        })


        toDoList.append(task.item)
        localStorage.setItem('todo', JSON.stringify(tasks))
        toDoItem.input.value = "" 
    })
}

function createToDoListItem(name, status){
    let item = document.createElement('li')
    let buttonGroup = document.createElement('div')
    let doneButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center' )
    if (JSON.parse(status) == true) {
        item.classList.add('list-group-item-success')
    }
    item.textContent = name

    buttonGroup.classList.add('btn-group', 'btn-group-sm')
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Done'
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'Delete'

    buttonGroup.append(doneButton)
    buttonGroup.append(deleteButton)
    item.append(buttonGroup)

    return {
        item,
        doneButton,
        deleteButton
    }
}

draw()