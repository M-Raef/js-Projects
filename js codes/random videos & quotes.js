//level 3 lesson 4 video#2
//random youtube video

let i = 0;
randomvideo.addEventListener("click", (eo) => {
  const videoArr = [
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/Swo4AcHRlLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/n7g6T6HNymo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/L2bq4eD3y_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/j3kKG3ARBPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/dNVZ0ZPfE8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/Cbk980jV7Ao"title="YouTube video player" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>`,
  ];

  // containeriframe.innerHTML = videoArr[Math.floor(Math.random () * videoArr.length)]
  containeriframe.innerHTML = videoArr[i];
  i++;
  if (i > videoArr.length - 1) {
    i = 0;
  }
});



//level 3 lesson 4 video#2
//random youtube video

let index = 0;
randomquote.addEventListener("click", (eo) => {
  const quoteArr = [
    `<blockquote lang="ar" dir="rtl" class="sidekick">
        لا تياس من الحياة يا صديقي 
    اجعلها تياس منك
    <br>
    <cite> Ali Hasan</cite>
    </blockquote>`,

    `<blockquote lang="ar" dir="rtl" class="sidekick">
        لا تبرز اخطائك بل اجلطهم بالمزيد &#128514; &#128514;
    <br>
    <cite> شخص عادي </cite>
    </blockquote>`,

    `<blockquote lang="ar" dir="rtl" class="sidekick">
        اي شي ياعم
    <br>
    <cite> مش عارف</cite>
    </blockquote>`,
  ];

  parentquote.innerHTML = quoteArr[index];
  index++;
  if (index == quoteArr.length) {
    index = 0;
  }
});
