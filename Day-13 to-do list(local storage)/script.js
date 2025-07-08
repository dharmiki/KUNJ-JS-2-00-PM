const addUserbtn=document.getElementById('addUser');
const btnText=addUserbtn.innerText;
const userNameTextField=document.getElementById('userName');
const recordDisplay=document.getElementById('records');
let userArray=[]
let edit_id=null;

//get value
let objStr=localStorage.getItem('users');
if(objStr!=null){
    userArray=JSON.parse(objStr);
}
// console.log(userArray);

DisplayInfo()


addUserbtn.onclick=()=>{
    const name=userNameTextField.value;
    if(edit_id!=null){
        //edit
        userArray.splice(edit_id,1,{'name':name});
        edit_id=null;
    }else{
        //insert
     
        userArray.push({'name':name});
    }
   
    SaveInfo(userArray);
    userNameTextField.value='';
    addUserbtn.innerText=btnText;
}

function SaveInfo(userArray){
    let str=JSON.stringify(userArray);
    localStorage.setItem('users',str);
    DisplayInfo();
}

function DisplayInfo(){
    let statment='';
    userArray.forEach((user,i)=>{
        statment+=`
     <tr>
      <th scope="row">${i+1}</th>
      <td>${user.name}</td>
      <td><i class="btn fa-regular fa-pen-to-square btn-info text-white mx-2" onclick='EditInfo(${i})'></i>
      <i class="btn fa-solid fa-trash btn-danger text-white" onclick='DeleteInfo(${i})'></i></td>
    </tr>`
    });

    recordDisplay.innerHTML=statment;
    
}

function EditInfo(id){
    edit_id=id;
    userNameTextField.value=userArray[id].name;
    addUserbtn.innerText='Save Changes';
}

function DeleteInfo(id){
    userArray.splice(id,1);
    SaveInfo(userArray);
    // DisplayInfo();
}