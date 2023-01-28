export const scaleRotate = {
  scale: [10, 1,1,1,10],
  rotate: [0, 0, 270, 270, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "50%"],
  transition:{
    scale: { duration: 12 },
    rotate: { duration: 4 },
    borderRadius: { duration: 8 },
}
};

export const increaseWidth = {
  width:[0,1,2,3,4,5],
  transition:{
    width:{duration:10}
  }
}


export const fadeIn = {
  opacity: [0,0,1,1,0 ],
  transition:{
    opacity:{duration:9}
  }
};

// export const slideUp ={
//   initial: { y: 100 },
//   animate: { y: 0 },
//   transition: { duration: 0.3 } 
// }

export const slideUp={
y:[100,0],
transition:{
  y:{duration:0.3},
}
}

// export const slideUp = {
//   initial: {
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };
