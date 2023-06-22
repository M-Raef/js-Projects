//coding for copy button to copy the text


const allcopybtns = document.querySelectorAll(".copy")

allcopybtns.forEach(item => {
    item.addEventListener("click", (eo) => {
        navigator.clipboard.writeText(item.nextElementSibling.innerText)
        
        item.innerText = "copied!"

        setTimeout(() => {
            item.innerText = "copy!"

        }, 3000);
    
    })
});



