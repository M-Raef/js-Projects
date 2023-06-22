
//=================Section divide ================================
//change Section BG when click on " Section BG  "
//using array & i++ , level 3 lesson 2 video #4..

// const arrColors = ["#A0E7E5","#FBE7C6","#ffafcc"]

// let i = 0
// sectionbg.addEventListener("click", (eo) => {
//   const allSection = document.querySelectorAll("section")

//   allSection.forEach(item => {
//     item.style.backgroundColor = arrColors[i]
   
//   });
//   // i++
//   // if(i > arrColors.length -1){
//   //   i=0;
//   // } //other way
//   i< arrColors.length -1 ? i++ : i=0
// })



//change Section BG when click on " Section BG  "
//using array & Math.round() , level 3 lesson 2 video #5

// const arrColors = ["#A0E7E5","#FBE7C6","#ffafcc"]

// sectionbg.addEventListener("click", (eo) => {
//   const allSection = document.querySelectorAll("section")
//   const random =Math.floor (Math.random()* arrColors.length)

//   allSection.forEach(item => {
//     item.style.backgroundColor = arrColors[random]
   
//   });
// })
// Math.round (Math.random()* (arrColors.length-1))



//change Section BG when click on " Section BG  "
//using rgb & Math.random() & return func , level 3 lesson 2 video #6

// const random255 = () => {
//   return Math.round(Math.random()*255)
// }

// sectionbg.addEventListener("click", (eo) => {
//   const allSection = document.querySelectorAll("section")

//   const rgb1 = random255()
//   const rgb2 = random255()
//   const rgb3 = random255()

//   allSection.forEach(item => {
//     item.style.backgroundColor = `rgb(${rgb1} , ${rgb2} , ${rgb3})`
   
//   });
// })





//change Section BG when click on " Section BG  "
//using hex , level 3 lesson 2 video #7
// const randomhex = () => {
//   return `#${Math.random().toString(16).slice(2,8)}` //toString(16) رح يجيب ارقام hexiel
// }
// sectionbg.addEventListener("click", (eo) => {
//   const allSection = document.querySelectorAll("section")
//   const hex =randomhex() //حطبناها برة مشان السيكشن يكونو نفس اللون

//   allSection.forEach(item => {
//     item.style.backgroundColor =  hex
   
//   });
// })






//change Section BG when click on " Section BG  "
//using hex ,NOT using foreach method, level 3 lesson 2 video #8
// const randomhex = () => {
//   return `#${Math.random().toString(16).slice(2,8)}` //toString(16) رح يجيب ارقام hexiel
// }
// sectionbg.addEventListener("click", (eo) => {
//   const allSection = document.querySelectorAll("section")
//   const hex =randomhex() //حطبناها برة مشان السيكشن يكونو نفس اللون

//   for (let i = 0; i < allSection.length; i++) {
//     const item = allSection[i];
//     item.style.backgroundColor = hex;
//   }
// })





//change Section BG when click on " Section BG  "
//using hex , NOT using foreach method or for loop, level 3 lesson 2 video #9
const randomhex = () => {
  return `#${Math.random().toString(16).slice(2,8)}` //toString(16) رح يجيب ارقام hexiel
}
sectionbg.addEventListener("click", (eo) => {
  const allSection = document.querySelectorAll("section")
  const hex =randomhex() //حطبناها برة مشان السيكشن يكونو نفس اللون

  // for (const i in allSection){ //for in loop
  //   const item = allSection[i]
  //   item.style.backgroundColor = hex
  // }
  // for (const i of allSection){ // for of loop
  //   const item = i
  //   item.style.backgroundColor = hex
  // }

  // let i = 0;
  // while(i < allSection.length){
  //   const item = allSection[i]
  //   item.style.backgroundColor = hex
  //   i++
  // }

  let i =0;
  do {
    const item = allSection[i]
    item.style.backgroundColor = hex
    i++
  } while (i < allSection.length);

})