import _ from "lodash";

const arr = Array(100)
    .fill(0)
    .map((i: any) => Math.round(Math.random() * 100))
    .sort((a, b) => a - b);
//chunk
// split array into many "chunks":
// console.log(_.chunk(arr, 16));

//compact
// remove falsey value: (false, null, 0, "", undefined, and NaN are falsey)
// console.log(_.compact([0, null, undefined, 1, "value", ""]))

//different:
// console.log(_.difference([1, 2, 3, 6], [3, 4, 1]));

// Debounce:
// let click = 0;
// const triggerDebounce = _.debounce(() => { console.log("Debounce triggered")}, 1000);

// const intervalId = setInterval(() => {
//     console.log(click);
//     click++;

//     if (click > 10) {
//         clearInterval(intervalId);
//     }

//     triggerDebounce();
// }, 100);


//deburr: 
// remove special charactor:

// console.log(_.deburr('xin chào, tiếng việt có dấu không được cho phép!, déjà vu'))