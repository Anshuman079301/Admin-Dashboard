function dash()
{
     let a = document.querySelector("#form")
    a.style.display = "none"
      let b = document.querySelector("table")
    b.style.display = "none" 
}
function dash1()
{
    let a = document.querySelector("#form")
    a.style.display = "none"
      let b = document.querySelector("table")
    b.style.display = "none" 
        let c = document.querySelector("#card")
    c.style.display = "grid"
}

function insert()
{
    let a = document.querySelector("#form")
    a.style.display = "grid"
      let b = document.querySelector("table")
    b.style.display = "none"
     let c = document.querySelector("#card")
    c.style.display = "none"
    let d = document.querySelector("#edit")
    d.style.display = "none"
}
function add()
{
    let obj = {
        name : document.querySelector("#name").value,
        age: document.querySelector("#age").value,
        number : document.querySelector("#number").value,
        address : document.querySelector("#address").value,
    }
    fetch("http://localhost:3000/project" , {
        method : "POST",
        body : JSON.stringify(obj)
    })
    .then(res=>alert("Added Successfully.....!!"))
}
// function open()
// {
//     // let b = document.querySelector("#form")
//     // b.style.display = "none" 
// }
async function run()
{
    let c = document.querySelector("#form")
    c.style.display = "none"
    // let b = document.querySelector("#signup")
    // b.style.display = "none"
    let d = document.querySelector("table")
    d.style.display = "inline" 
    let e = document.querySelector("#card")
    e.style.display = "none" 

    let res = await fetch("http://localhost:3000/project")
    let data =await res.json()
    let a = document.querySelector("#table")
    a.innerHTML = data.map((e)=> `
       <tr>
                <td>${e.id}</td>

                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.number}</td>
                <td>${e.address}</td>

                <td><button onclick = "del('${e.id}')">Delete</button></td>
                <td><button onclick = "edit('${e.id}')">Update</button></td>

            </tr>` 
    ).join(" ")
    return false;
}
function del(id)
{
let res = window.confirm("do you want to delete this")
if(res)
{
    fetch(`http://localhost:3000/project/${id}` , {
        method : "DELETE"
    })
}
else { 
    window.alert("Invaid input")
}
return false
}
async function edit(id)
{
    let res = await fetch(`http://localhost:3000/project/${id}`)
    let data =await  res.json()
    let a = document.querySelector("#edit")
    a.innerHTML = 
  `  <input type="text" value ="${data.id}" readonly/> </br>
    <input type="text"value ="${data.name}" id = "name2"/> </br>
    <input type="text" value ="${data.age}" id = "age2" /> </br>
    <input type="text" value ="${data.number}" id = "address2"/> </br>
    <input type="text" value ="${data.address}" id = "number2" /> </br>
    <button onclick = "update('${data.id}')">Update</button>
    `
//    a.style.display = "grid"
}
function update(id)
{
let fdata = {
    name : document.querySelector("#name2").value,
    age : document.querySelector("#age2").value,
    address : document.querySelector("#address2").value,
    number : document.querySelector("#number2").value
}
fetch(`http://localhost:3000/project/${id}` , {
    method : "PUT" , 
    body : JSON.stringify(fdata)
})
.then(res=>alert("Updated Successfully......!!!"))
}