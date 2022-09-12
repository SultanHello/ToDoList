let inputin = document.querySelector('.inputin')
let btn = document.querySelector(".btn")
let ulst = document.querySelector(".ulst")
let ButtonDel = document.querySelector('.btnDel')
let arr = []
// let input = document.createElement('input')
// input.type='radio';
// var input = document.createElement("input");
// input.type = "text";
// input.className = "css-class-name"; // set the CSS class
// container.appendChild(input); // put it into the DOM

let i = 1
btn.addEventListener('click',function(event){
    if(inputin.value !== ''){
        let li = document.createElement('li')
    let LiDel = document.createElement('button')
    let input = document.createElement('input')
    input.type='checkbox';


    LiDel.innerText= 'x'
    let a = inputin.value
    li.textContent = `list ${i++} : ` + a;
    inputin.value = ''
    ulst.append(li)
    ulst.append(LiDel)
    ulst.append(input)
    LiDel.addEventListener('click',function(){
        li.remove()
        LiDel.remove()
        input.remove()
    })
    arr.push(a)
    }
    ButtonDel.addEventListener('click',function(){
        ulst.innerHTML = '';
        i =1
    
    })
    
    
})

console.log(arr)