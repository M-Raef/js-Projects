

const activeReg = () => {
    if (username.classList.contains("success") && email.classList.contains("success") && psw.classList.contains("success") && pswrepeat.classList.contains("success")) {
        regbtn.removeAttribute("disabled")
    }else{
        regbtn.setAttribute("disabled","")
    }
}


username.addEventListener("keyup", (eo) => {
    username.classList.add("error")
    usermessage.style.display = "block"

    if (username.value.length >= 3) {
        username.classList.remove("error")
        usermessage.style.display = "none"

        username.classList.add("success")
        username.nextElementSibling.style.opacity = "1"  //nextElementSibling = رح يجيب العنصر الذي يليه في هتشمل وهي طريقة اخرى لحتى نغير ستايل

        
    }else{
        username.classList.add("error")
        username.classList.remove("success")
        usermessage.style.display = "block"
        username.nextElementSibling.style.opacity = "0" 
    }
    activeReg()
})


email.addEventListener("keyup", (eo) => {
    email.classList.add("error")
    emailmessage.style.display="block"

    const regEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regEmail.test(email.value)){
        email.classList.remove("error")
        emailmessage.style.display = "none"

        email.classList.add("success")
        email.nextElementSibling.style.opacity = "1"
    }else{
        email.classList.add("error")
        email.classList.remove("success")
        emailmessage.style.display = "block"
        email.nextElementSibling.style.opacity = "0"
    }
    activeReg()
})


psw.addEventListener("keyup", (eo) => {
    psw.classList.add("error")
    pswmessage.style.display="block"

    const regPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    if(regPassword.test(psw.value)){
        psw.classList.remove("error")
        pswmessage.style.display = "none"

        psw.classList.add("success")
        psw.nextElementSibling.style.opacity = "1"
    }else{
        psw.classList.add("error")
        psw.classList.remove("success")
        pswmessage.style.display = "block"
        psw.nextElementSibling.style.opacity = "0"
    }
    activeReg()
})
//wqrdfsZ@1

pswrepeat.addEventListener("keyup",(eo) => {
    pswrepeat.classList.add("error")
    pswrepeatmessage.style.display="block"

    if (pswrepeat.value == psw.value) {
        pswrepeat.classList.remove("error")
        pswrepeatmessage.style.display = "none"

        pswrepeat.classList.add("success")
        pswrepeat.nextElementSibling.style.opacity = "1"
    }else{
        pswrepeat.classList.add("error")
        pswrepeat.classList.remove("success")
        pswrepeatmessage.style.display = "block"
        pswrepeat.nextElementSibling.style.opacity = "0"
    }
    activeReg()
})


// zoom effect
//explain : متل ما قلنا لما بدنا نحول ال ديسبلاي من نون الى فليكس رح يصيرو فورا بدون الانصات الى الوقت المعطي لهم فحطينا ال ترانسيشن يتحقق بعد وقت قصير من تحويله الى فليكس
createAccount.addEventListener("click", (eo) => {
    papaForm.style.display = "flex"
    
    setTimeout(() => {
        form.style.transform = "scale(1)"
    }, 50);
})
//explain : مشان نحول ال فورم الى  ديسبلاي نان اول الشي رح نخفيه من خلال ال سكيل بعدين رح نحوله الى ديسبلاي نان
const close = document.getElementById("close") //يفضل دائما تحضير العناصر مشان ما نواجه اي مشاكل
close.addEventListener("click", (eo) => {
    form.style.transform = "scale(0)"

    setTimeout(() => {
        papaForm.style.display = "none"
    }, 600);
})

