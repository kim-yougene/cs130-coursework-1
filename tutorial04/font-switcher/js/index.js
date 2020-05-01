const makeBigger = () => {
    // go out and find the element that you want to change
    document.querySelector('.content').style.fontSize = '3em';
    document.querySelector('.content').style.backgroundColor = 'hotpink';
};

const makeSmaller = () => {
   document.querySelector('.content').style.fontSize = '1.4em';
   document.querySelector('.content').style.backgroundColor = 'white';
};


/*
  1. What do you want to select
  2. What to you want to modify of the thing you just selected
     (attach a click event)
  3. What do want to assign the thing (the function you want to call)
*/
document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a1').oncontextmenu = makeSmaller;
document.querySelector('.a2').onclick = makeSmaller;
