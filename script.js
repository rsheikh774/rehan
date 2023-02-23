let arr2 = [
    {
        name: 'gautam',
        empId: 5435,
        mailId: "gautam@gmail.com",
    },
    {
        name: 'rehan',
        empId: 5435,
        mailId: "rehan@gmail.com",
    },
    {
        name: 'shekh',
        empId: 5435,
        mailId: "shekh@gmail.com",
    },
    {
        name: 'akshay',
        empId: 5435,
        mailId: "akshay@gmail.com",
    },
    {
        name: 'pandey',
        empId: 5435,
        mailId: "pandey@gmail.com",
    },
];

const mainbox =document.querySelector('.mainbox');
const nb = document.querySelector('.nb');
const nbBox = document.querySelector('.nb-box');
const logoBox = document.querySelector('.logo-box');
const bodyBox = document.querySelector('.bodybox');

logoBox.addEventListener('click', () => {
     console.log('Logo box');
});
nbBox.addEventListener('click' , () =>{
    console.log('nb box');
});
nb.addEventListener('click', ()=>{
   console.log('nb');
});
mainbox.addEventListener('click', ()=>{
    console.log('Main box');
});


arr2.map((item) =>{
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerHTML = item.name;
    const h3 = document.createElement('h3');
    h3.innerHTML = item.empId;
    const p = document.createElement('p');
    p.innerHTML = item.mailId;
   const button = document.createElement('button');
    button.innerHTML = document.createElement('button');
    button.innerHTML = 'Delete';
    button.className = 'delete-emp';
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);
    div.style.padding = '0.5rem';
    div.style.border = '2px solid green';
    bodyBox.appendChild(div);
})

bodyBox.addEventListener('click' , (e) => {
    if(e.target.className == 'delete-emp'){
        e.target.parentNode.remove(); // parentNode or parentElement
    }
    
});
