//level 3 lesson 3 video #1
//setInterval VS setTimeout

// let i =1;
// const testFun = () => {
//     website.innerText =i;
//     i++
    
// }
// const stopFun = setInterval(testFun,1000);
// //it will stop numbers increase when i click in section
// sec.addEventListener("click", (eo) => {
//     clearInterval(stopFun)
// })



//level 3 lesson 3 video #2
//JavaScript auto writing project
let counter = 1
const autoWriting = () => {
    const title = "Courses4Arab"
    website.innerText = title.slice(0,counter)
    counter++
    if (title.length < counter) {
        clearInterval(autoWriting)
    }
}

const stopAutoFun = setInterval(autoWriting, 200);
