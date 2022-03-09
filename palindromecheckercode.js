const txtinput = document.querySelector(".inputs input")
checkbtn = document.querySelector(".inputs button")
info = document.querySelector(".info-txt")

let filterinput;

checkbtn.addEventListener("click", () =>{
    if(txtinput.value != "")
    {
let reverseinput = filterinput.split("").reverse().join("")
info.style.display = "block"


if(filterinput != reverseinput)
{
    info.innerHTML = `No,<span>${txtinput.value}</span> is not a palindrome!`
}
else 
info.innerHTML = `Yes,<span>${txtinput.value}</span> is a palindrome!`
}
else window.alert(`You should insert a text!`)
})

txtinput.addEventListener("keyup", ()=> {
  filterinput = txtinput.value.replace(/[^A-Z0-9]/ig,"") // replace space (avoid it).
if(filterinput){
    return checkbtn.classList.add("active")
}
checkbtn.classList.remove("active")


})

