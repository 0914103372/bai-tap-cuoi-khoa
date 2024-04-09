// khai bao mạngr nhận dạng task phần tử đầu tiên chứa chỉ số xác định status phần tử thứ 2 xác định vị trị trong bảng status
var indexedit =[]
//mang quan ly cac task
if(localStorage.getItem('data')!=null)
{
    var data = JSON.parse(localStorage.getItem('data'))
    reprint()
    
}
else{
var data = []
for(let i =0 ;i<4;i++)
{
    data[i]=[]
}
}
// gan su kien log out
function logout(){
    try{
       localStorage.removeItem('remember');
    }
    finally{
        window.location.href = "index.html";
    }
    console.log('adad')
}
document.querySelector('.logout').addEventListener('click',logout)
//gam su kien closeformedit
document.querySelector('.formfix').querySelector(".buttonclose").addEventListener('click',()=>{
    hiddenFormEdit('none')
})
//gápukiensubmitedit
document.querySelector('.formfix').querySelector(".buttonsubmit").addEventListener('click',()=>{
    let radio = document.querySelector('.formfix_status').querySelectorAll('input')
    let textarea =document.querySelector('.formfix').querySelector('textarea')
    let input = document.querySelector('.formfix').querySelectorAll('input')
    //neu click todo
    if(radio[0].checked)
    {
        if(indexedit[0]==0)
        {
            let taskitem = document.querySelector(".container_body_element_todo").querySelectorAll('.element_task_item')
            taskitem[indexedit[1]].innerHTML = `<div class="element_task_item_header">
            <div class="element_task_item_header_text" >${input[0].value}</div>
            <div class="element_task_item_header_icon" >
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            </div>
            <div class="element_task_item_title">${input[1].value}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${textarea.value}</div>
            <div class="element_task_item_time">
            <i class="fa-regular fa-clock"></i>
                June 30, 2022
            </div>`

        }
        else {
            data[indexedit[0]][indexedit[1]].textheader = input[0].value
            data[indexedit[0]][indexedit[1]].title = input[1].value
            data[indexedit[0]][indexedit[1]].content = textarea.value
            data[indexedit[0]][indexedit[1]].status = "todo"
            data[0].push(data[indexedit[0]][indexedit[1]])
            data[indexedit[0]].splice(indexedit[1],1)
            let taskitem = document.querySelectorAll('.element_task')
            taskitem.forEach((element) => {
                element.innerHTML = ``
            })
            for(let i in data)
            {
        
                data[i].forEach((element)=>{
                    pushdatatohtml(element)
                })
            } 
        }
    }
    else if(radio[1].checked)
    {
        if(indexedit[0]==1)
        {
            let taskitem = document.querySelector(".container_body_element_doing").querySelectorAll('.element_task_item')
            taskitem[indexedit[1]].innerHTML = `<div class="element_task_item_header">
            <div class="element_task_item_header_text" >${input[0].value}</div>
            <div class="element_task_item_header_icon" >
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            </div>
            <div class="element_task_item_title">${input[1].value}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${textarea.value}</div>
            <div class="element_task_item_time">
            <i class="fa-regular fa-clock"></i>
                June 30, 2022
            </div>`

        }
        else {
            data[indexedit[0]][indexedit[1]].textheader = input[0].value
            data[indexedit[0]][indexedit[1]].title = input[1].value
            data[indexedit[0]][indexedit[1]].content = textarea.value
            data[indexedit[0]][indexedit[1]].status = "doing"
            data[1].push(data[indexedit[0]][indexedit[1]])
            console.log(data[indexedit[0]][indexedit[1]])
            data[indexedit[0]].splice(indexedit[1],1)
            // lam rong de in lai toan bo
            reprint()
        }
    }
    else if(radio[2].checked)
    {
        if(indexedit[0]==2)
        {
            let taskitem = document.querySelector(".container_body_element_completed").querySelectorAll('.element_task_item')
            taskitem[indexedit[1]].innerHTML = `<div class="element_task_item_header">
            <div class="element_task_item_header_text" >${input[0].value}</div>
            <div class="element_task_item_header_icon" >
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            </div>
            <div class="element_task_item_title">${input[1].value}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${textarea.value}</div>
            <div class="element_task_item_time">
            <i class="fa-regular fa-clock"></i>
                June 30, 2022
            </div>`

        }
        else {
            data[indexedit[0]][indexedit[1]].textheader = input[0].value
            data[indexedit[0]][indexedit[1]].title = input[1].value
            data[indexedit[0]][indexedit[1]].content = textarea.value
            data[indexedit[0]][indexedit[1]].status = "completed"
            data[2].push(data[indexedit[0]][indexedit[1]])
            data[indexedit[0]].splice(indexedit[1],1)
            reprint()
        }
    }
    else if(radio[3].checked)
    {
        if(indexedit[0]==3)
        {
            let taskitem = document.querySelector(".container_body_element_completed").querySelectorAll('.element_task_item')
            taskitem[indexedit[1]].innerHTML = `<div class="element_task_item_header">
            <div class="element_task_item_header_text" >${input[0].value}</div>
            <div class="element_task_item_header_icon" >
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            </div>
            <div class="element_task_item_title">${input[1].value}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${textarea.value}</div>
            <div class="element_task_item_time">
            <i class="fa-regular fa-clock"></i>
                June 30, 2022
            </div>`

        }
        else {
            data[indexedit[0]][indexedit[1]].textheader = input[0].value
            data[indexedit[0]][indexedit[1]].title = input[1].value
            data[indexedit[0]][indexedit[1]].content = textarea.value
            data[indexedit[0]][indexedit[1]].status = "blocked"
            data[3].push(data[indexedit[0]][indexedit[1]])
            data[indexedit[0]].splice(indexedit[1],1)
            reprint()
        }
    }

    hiddenFormEdit('none')
    alert("Edit data thành công")
      // gán sự kiện pen
    eventpen()

})
//add su kien new task
function hiddenFormAdd(value)
{
    let bGRNewTask = document.querySelector('.background')
    let formNewTask = document.querySelector('.formnewtask')
    bGRNewTask.style.display = `${value}`
    formNewTask.style.display = `${value}`
}
function newTask(){
    hiddenFormAdd('flex')
    //add su kien button close
    document.querySelector('.formnewtask').querySelector('.buttonclose').addEventListener('click',()=>{
            hiddenFormAdd('none')
    })
    //them su kien button submit
    document.querySelector('.formnewtask').querySelector('.buttonsubmit').addEventListener('click',addNewTask)
    
}
document.querySelector('.buttonnewtask').addEventListener('click',newTask)
//ham add task
function addNewTask()
{
    let input = document.querySelector('.formnewtask').querySelectorAll('input')
    let textarea =document.querySelector('.formnewtask').querySelector('textarea')
    let Month = ["January","February","March","April","May","June"]
    let now = new Date()
    var x = {
        textheader: input[0].value,
        title: input[1].value,
        content: textarea.value,
        status: "todo",
        time: ""+(now.getMonth()+1)+" "+now.getDay()+", "+now.getFullYear(),
    }
    data[0].push(x)
    pushdatatohtml(x)
    eventpen()
    eventtrash()
    taskSum()
    hiddenFormAdd('none')
    alert('Submit Thành Công')
    //lamrongonhap
    input[0].value=""
    input[1].value=""
    textarea.value=""
}
//sukiennutsua
function hiddenFormEdit(value){
    let bGRNewTask = document.querySelector('.background')
    let formFix = document.querySelector('.formfix')
    bGRNewTask.style.display = `${value}`
    formFix.style.display = `${value}`
}

function pushdatatohtml(element){
    let localhtmltodo= document.querySelector(".container_body_element_todo").querySelector('.element_task')
    let localhtmldoing=document.querySelector(".container_body_element_doing").querySelector('.element_task')
    let localhtmlcompleted=document.querySelector(".container_body_element_completed").querySelector('.element_task')
    let localhtmlblocked=document.querySelector(".container_body_element_blocked").querySelector('.element_task')
        console.log(element)
        switch(element.status){
            case 'todo':  localhtmltodo.innerHTML+= ` <div class="element_task_item">
            <div class="element_task_item_header">
                <div class="element_task_item_header_text" >${element.textheader}</div>
                <div class="element_task_item_header_icon" >
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="element_task_item_title">${element.title}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${element.content}</div>
            <div class="element_task_item_time">
                <i class="fa-regular fa-clock"></i>
                    June 30, 2022
                </div>
        </div>`  ;break;
            case 'doing' :  localhtmldoing.innerHTML+= ` <div class="element_task_item">
            <div class="element_task_item_header">
                <div class="element_task_item_header_text" >${element.textheader}</div>
                <div class="element_task_item_header_icon" >
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="element_task_item_title">${element.title}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${element.content}</div>
            <div class="element_task_item_time">
                <i class="fa-regular fa-clock"></i>
                    June 30, 2022
                </div>
        </div>` ; break;
            case 'completed':  localhtmlcompleted.innerHTML+= ` <div class="element_task_item">
            <div class="element_task_item_header">
                <div class="element_task_item_header_text" >${element.textheader}</div>
                <div class="element_task_item_header_icon" >
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="element_task_item_title">${element.title}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${element.content}</div>
            <div class="element_task_item_time">
                <i class="fa-regular fa-clock"></i>
                    June 30, 2022
                </div>
        </div>`  ; break;
            case 'blocked':  localhtmlblocked.innerHTML+= ` <div class="element_task_item">
            <div class="element_task_item_header">
                <div class="element_task_item_header_text" >${element.textheader}</div>
                <div class="element_task_item_header_icon" >
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="element_task_item_title">${element.title}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${element.content}</div>
            <div class="element_task_item_time">
                <i class="fa-regular fa-clock"></i>
                    June 30, 2022
                </div>
        </div>` ; break;
        default: break;
        }
}

//su kien pen
function eventpen()
{
    let pentodo = document.querySelector('.container_body_element_todo').querySelectorAll('.fa-pen-to-square')
    let radio = document.querySelector('.formfix_status').querySelectorAll('input')
    localStorage.setItem('data',JSON.stringify(data))
    pentodo.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            indexedit[0]=0;
            indexedit[1]=x;
            radio[0].checked =true
            let input = document.querySelector('.formfix').querySelectorAll('input')
            let textarea =document.querySelector('.formfix').querySelector('textarea')
            input[0].value = data[indexedit[0]][indexedit[1]].textheader
            input[1].value = data[indexedit[0]][indexedit[1]].title
            textarea.value =  data[indexedit[0]][indexedit[1]].content
            hiddenFormEdit('flex')
        })
    })
    let pendoing = document.querySelector('.container_body_element_doing').querySelectorAll('.fa-pen-to-square')
    pendoing.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            indexedit[0]=1;
            indexedit[1]=x;
            let input = document.querySelector('.formfix').querySelectorAll('input')
            let textarea =document.querySelector('.formfix').querySelector('textarea')
            input[0].value = data[indexedit[0]][indexedit[1]].textheader
            input[1].value = data[indexedit[0]][indexedit[1]].title
            textarea.value =  data[indexedit[0]][indexedit[1]].content
            hiddenFormEdit('flex')
        })
    })
    let pencompleted = document.querySelector('.container_body_element_completed').querySelectorAll('.fa-pen-to-square')
    pencompleted.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            radio[2].checked=true        
            indexedit[0]=2;
            indexedit[1]=x;
            let input = document.querySelector('.formfix').querySelectorAll('input')
            let textarea =document.querySelector('.formfix').querySelector('textarea')
            input[0].value = data[indexedit[0]][indexedit[1]].textheader
            input[1].value = data[indexedit[0]][indexedit[1]].title
            textarea.value =  data[indexedit[0]][indexedit[1]].content
            hiddenFormEdit('flex')
        })
    })
    let penblocked = document.querySelector('.container_body_element_blocked').querySelectorAll('.fa-pen-to-square')
    penblocked.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            radio[3].checked=true  
            indexedit[0]=3;
            indexedit[1]=x;
            let input = document.querySelector('.formfix').querySelectorAll('input')
            let textarea =document.querySelector('.formfix').querySelector('textarea')
            input[0].value = data[indexedit[0]][indexedit[1]].textheader
            input[1].value = data[indexedit[0]][indexedit[1]].title
            textarea.value =  data[indexedit[0]][indexedit[1]].content
            hiddenFormEdit('flex')
        })
    })
}
function eventtrash()
{
    let trashtodo = document.querySelector('.container_body_element_todo').querySelectorAll(".fa-trash")
    trashtodo.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            data[0].splice(x,1)
            reprint()
        })
    })
    let trashdoing =document.querySelector('.container_body_element_doing').querySelectorAll(".fa-trash")
    trashdoing.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            data[1].splice(x,1)
            reprint()
        })
    })
    let trashcompleted =document.querySelector('.container_body_element_completed').querySelectorAll(".fa-trash")
    trashcompleted.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            data[2].splice(x,1)
            reprint()
        })
    })
    let trashblocked = document.querySelector('.container_body_element_blocked').querySelectorAll(".fa-trash")
    trashblocked.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            data[3].splice(x,1)
            reprint()
        })
    })
}
function reprint()
{
    let taskitem = document.querySelectorAll('.element_task')
            taskitem.forEach((element) => {
                element.innerHTML = ``
            })
            for(let i in data)
            {
        
                data[i].forEach((element)=>{
                    pushdatatohtml(element)
                })
            } 
    eventpen()
    eventtrash()
    taskSum()
}
function taskSum(){
    let todosum = document.querySelector(".container_body_element_todo").querySelector('.element_header_sum')
    todosum.innerHTML = data[0].length
    let doingsum = document.querySelector(".container_body_element_doing").querySelector('.element_header_sum')
    doingsum.innerHTML = data[1].length
    let completedsum = document.querySelector(".container_body_element_completed").querySelector('.element_header_sum')
    completedsum.innerHTML = data[2].length
    let blockedsum = document.querySelector(".container_body_element_blocked").querySelector('.element_header_sum')
    blockedsum.innerHTML = data[3].length
}

