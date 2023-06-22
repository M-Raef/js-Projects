console.log("object");
const arrimg = [
    `<img src= "C:\\Users\\ısc\\Downloads\\goku.jpg" class="img-slider" >`,
    `<img src="C:\\Users\\ısc\\Downloads\\goku 2.jpg" class="img-slider"  >`,
    `<img src= "C:\\Users\\ısc\\Downloads\\vegeta.jpg" class="img-slider">`,
    `<img src= "C:\\Users\\ısc\\Downloads\\vegeta 2.jpeg" class="img-slider">`,
    `<img src= "C:\\Users\\ısc\\Downloads\\goku 1.jpg" class="img-slider">`
]
//هذه الاكواد مسؤلة عن تغيير الصور
let i= 0;
slidercontainer.innerHTML += arrimg[i]
pre.setAttribute("disabled","")

slidercontainer.innerHTML += `<p style="background-color: rgba(135, 145, 231, 0.856);">Slide #${i+1} of ${arrimg.length}</p>`


next.addEventListener("click", (eo) => {
  
    pre.removeAttribute("disabled");
    i++
    slidercontainer.innerHTML += arrimg[i]
    slidercontainer.innerHTML += `<p style="background-color: rgba(135, 145, 231, 0.856);">Slide #${i+1} of ${arrimg.length}</p>`

   
    if (i+1 == arrimg.length) {
        next.setAttribute("disabled","")   
    }
    parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")  
    parentNumbers.getElementsByTagName("button")[i].classList.add("active-num")

})

pre.addEventListener("click", (eo) => {
    next.removeAttribute("disabled");
    i--;
    slidercontainer.innerHTML += arrimg[i]
    slidercontainer.innerHTML += `<p style="background-color: rgba(135, 145, 231, 0.856);">Slide #${i+1} of ${arrimg.length}</p>`
    
    if (i==0) {
        pre.setAttribute("disabled","")
    }
    parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")  
    parentNumbers.getElementsByTagName("button")[i].classList.add("active-num")

})

//رح ننادي الازرار من خلال كويري سلكتر اول مشان نقدر نحطهم ب فور اتش 
const allButtons = document.querySelectorAll(".mynumber")
const parentNumbers = document.getElementsByClassName("numbers")[0]

//عند الضغط على الازرار 1 2 3 4 5 رح يقوم بتغير الصور
allButtons.forEach((item,index)=> {

    item.addEventListener("click",(eo) => {
        //remove the current "active-num" => add "active-num" to target element
        parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
        item.classList.add("active-num")

        slidercontainer.innerHTML += arrimg[index]
        slidercontainer.innerHTML += `<p style="background-color: rgba(135, 145, 231, 0.856);">Slide #${index+1} of ${arrimg.length}</p>`
        
        i=index;
        
        //last index
        if (index == arrimg.length-1 ) {
            next.setAttribute("disabled","")   
            pre.removeAttribute("disabled")
            //first index
        }else if(index == 0){
            next.removeAttribute("disabled")
            pre.setAttribute("disabled","")   
        }else{
            next.removeAttribute("disabled")
            pre.removeAttribute("disabled")
        }
    })
});