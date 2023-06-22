const randomHearts = () => {
    const parentheart = document.createElement("div")
    containerheart.append(parentheart)

    const creatRandomHeart = setInterval(() => {
        // const heart = `<div class="heart">&#129505;</div>`; ازا ضفناه بهذه الطريقة رح يصير مشاكل في مع ملف ال سي اس اس فما رح يشتغل بالشكل الذي نريده فرح نعمل الطريقة يلي بالاسفل  
        const heart = document.createElement("div")
        heart.classList.add("heart")
        heart.innerHTML = "&#129505;"
        heart.style.left = `${Math.random()*100}%`
        heart.style.animationDuration = `${ (Math.random()+0.5)   *1.5}s`

        const heart2 = document.createElement("div")
        heart2.classList.add("heart")
        heart2.innerHTML = "&#128156;"

        heart2.style.left = `${Math.random()*100}%`
        heart2.style.animationDuration = `${ (Math.random()+0.5)   *1.5}s`

        parentheart.append(heart)
        parentheart.append(heart2)
    }, 50);

    setTimeout(() => {
        clearInterval(creatRandomHeart)
    }, 3000);


    setTimeout(() => {
        parentheart.remove()
    }, 6000);
}



randomhearts.addEventListener("click", (eo) => {
    randomHearts()
    
});
/* لقد قمنا بعمل حركة من اجل مسح القلوب بعد انشائها لان ازا 
ضل بس عم ينشئ بعد فترى رح يصير اكواد كثير وازا  حد من المستخدمين 
كان لابتبه سيئ ممكن يعلئ معاه الصفحة بسبب هذا الشيئ
 */ 