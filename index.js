const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")
function clickLike1(){
    let totalLikes1 = parseInt(countLikes1.value) + 1
    countLikes1.textContent = totalLikes1.toString()
}
function clickLike2(){
    let totalLikes2 = parseInt(countLikes2.value) + 1
    countLikes2.textContent = totalLikes2.toString()
    
const btnDislike1 = document.getElementById("btnDislike1")
const countDislike1 = document.getElementById("countDislike1")
const btnDislike2 = document.getElementById("btnDislike2")
const countDislike2 = document.getElementById("countDislike2") 
function clickDislike1(){
   let totalDislike1 = parseInt(countDislike1.value) + 1
   countDislike1.textContent = totalDislike1.toString() 
}
function clickDislike2(){
   let totalDislike2 = parseInt(countDislike2.value) + 1
   countDislike2.textContent = totalDislike2.toString()   
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
    commentbox.textContent += comment.value.toString() + "\n"
    comment.value=""
}
submit.addEventListener("click",submitComment)
