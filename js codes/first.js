// toggle the light & dark mode
{const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
  //toggle methods when i click in change mode in web he will transfer the color
});};

// const hiddenul = document.getElementById("hiddenul")
// const changecolor = document.getElementById("changecolor")  //in a new apdate we can call the id by write his name only

//when hover on change color
{changecolor.addEventListener("mousemove",(eo) => {
hiddenul.style.display="block"
})
changecolor.addEventListener("mouseout",(eo) => {
hiddenul.style.display="none"
});};

//change HEADER background color when click on "header BG"
headerbg.addEventListener("click", (eo) => {
  const random = Math.round(Math.random()*360)
  header.style.backgroundColor = `hsl(${random},  99%, 66%)`

  const websiteTitle = document.querySelector("#header > h1")
  websiteTitle.style.backgroundColor = `hsl(${random},  99%, 66%)`
})

//change Title background color when click on "Title BG"
titlebg.addEventListener("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#header > h1)")
  allTitle.forEach(item => {
    const random = Math.round(Math.random()*360)
    item.style.backgroundColor=`hsl(${random},  99%, 66%)`
  });
})

//chanfge TITLE color when click on "Title color"
{const changeColor = () => {
  return Math.round(Math.random()*360)
  
}
titlecolor.addEventListener("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#header > h1)")
  allTitle.forEach(item => {
    item.style.color = `hsl(${changeColor()},  99%, 66%)`
  });
})}



