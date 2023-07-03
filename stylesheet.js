const wrapper = document.querySelector(".wrapper")
let selectbtn = wrapper.querySelector(".select-btn")
let selectText = wrapper.querySelector(".selectText")
let option = wrapper.querySelectorAll(".option")

console.log("Hello wlecome to the javascript world");

// let now = document.querySelector(".wrapper").classList.toggle('active')
selectbtn.addEventListener("click", ()=> {
    console.log("this is being clicked")
    wrapper.classList.toggle("active")

})

option.forEach(element => {
    element.addEventListener('click', ()=>{
        let selectedOption = element.querySelector(".span").innerText
        let iconCLass = element.querySelector(".option i").classList.item(1)
        let iconInclude = document.createElement("i")


        iconInclude.classList.add("bx")
        iconInclude.classList.add(iconCLass)

         selectText.innerText = selectedOption
         selectText.prepend(iconInclude)
         
         wrapper.classList.remove("active")
    })
});