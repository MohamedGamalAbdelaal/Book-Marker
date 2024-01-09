var nameMark=document.querySelector('#namemark');
var siteMark=document.querySelector('#sitemark');
var btnSubmit=document.querySelector('#btnSubmit');
var arrlist=[]
if(localStorage.getItem('arraylist') != null){
   arrlist=JSON.parse(localStorage.getItem('arraylist'))
   displayItems();
}

btnSubmit.addEventListener('click',function(){
   addSite();
})
function addSite(){
var product={
    siteName:nameMark.value,
    siteUrl:siteMark.value
}
arrlist.push(product);
localStorage.setItem('arraylist',JSON.stringify(arrlist)) 

nameMark.value=''
siteMark.value=''
 console.log(arrlist);
 displayItems();
 
 
}
function displayItems(){
   var cartona=''
 for (let i = 0; i < arrlist.length; i++) {
    
    cartona+=`
    <tr class="text-center">
     <th>${i+1}</th>
    <th>${arrlist[i].siteName}</th>
    <th>${arrlist[i].siteUrl}</th>
     <th><button class="btn btn-primary px-4"> Visit </button></th>
     <th><button onclick="updateSite(${i})" class="btn btn-warning px-4"> Update </button></th>
    <th><button onclick="deletSite(${i})" class="btn btn-danger "> Delete</button></th>
     </tr>
    `

 }
  document.querySelector('#tBody').innerHTML=cartona
 
}

function deletSite(index){
    arrlist.splice(index,1)
    localStorage.removeItem(arrlist[index])
    localStorage.setItem('arraylist',JSON.stringify(arrlist))
    displayItems();
    
}
function updateSite(index){
   nameMark.value=arrlist[index].siteName;
siteMark.value=arrlist[index].siteUrl;
btnSubmit.style.backgroundColor='orange'
btnSubmit.innerHTML='Update'
btnSubmit.addEventListener('click',function(){
   btnSubmit.style.backgroundColor='#dc3545'
btnSubmit.innerHTML='Submit'
})
}
function validate(){
   var regexName=/[a-z](.com)/;
}