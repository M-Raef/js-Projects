const allPlus = document.querySelectorAll(".plus")

allPlus.forEach(item => {
    item.addEventListener("click", (eo) => {
        const content = eo.target.parentElement.parentElement.getElementsByClassName("content")[0]
        // content.style.display = "block" 
        // content.style.height = "160px" 
        // content.style.opacity = "1" 
        content.classList.toggle("active-accordion")//toggle = لتبديل عند الضغط مرة اخرى رح يحذف الكلاس
        
        if (content.classList.contains("active-accordion")) {
            content.style.height = ` ${content.scrollHeight+10}px `//scrollHeight = يستخدم من اجل جلب حجم الارتفاع على حسب الكلام الموجود
        }else{
            content.style.height = `0`
        }
        


        // + & -
        item.classList.toggle("hide-plus")
        if(item.classList.contains("hide-plus")){ // contains = I will see if the element exists or not if is existing it will be true
            item.innerText = "_"
            item.style.transform = "translateY(-17px)"
        }else{
            item.innerText = "+"
            item.style.transform = "translateY(0px)"
        }
    
    })
});

