// const list = document.getElementById("list")
// const state= list.getElementsByTagName("li")
// const distric=list.getElementsByClassName('state')


// function some(params) {
//    for (let i = 0; i < state.length; i++) {
//       const tag = state[i].getElementsByClassName('country');
//     tag[0].style.display='none'
//    }
// }
// for (let i = 0; i < state.length; i++) {
  
//    state[i].addEventListener('click',function(){
//       some()
//    const tag = state[i].getElementsByClassName('country');
//    tag[0].style.display='block'
   
//    })
  
// }

// function doe(params) {
//    for (let i = 0; i < distric.length; i++) {
//       const content = distric[i].getElementsByClassName('distric');
//       content[0].style.display='none'

//    }
// }



// for (let i = 0; i < distric.length; i++) {
//    distric[i].addEventListener('click',function(){
//       doe()
//  const content = distric[i].getElementsByClassName('distric');
// content[0].style.display='block'

// })

// }



const list = document.getElementById("list")
const liArr = list.getElementsByTagName("li")

function hideAllListItems() {
   for (let i = 0; i < liArr.length; i++) {
      const tag = liArr[i].getElementsByClassName('country');
      tag[0].style.display='none'
   }
}

for (let i = 0; i < liArr.length; i++) {
   liArr[i].addEventListener('click',function(){
     hideAllListItems()
     const getCountry = liArr[i].getElementsByClassName('country');
    getCountry[0].style.display='block'
   })
}

const hideAllStates = () => {
  for (let i = 0; i < liArr.length; i++) {
     const getCountry = liArr[i].getElementsByClassName('country');
     const getAllStates = getCountry[0].getElementsByClassName('state')

     if(getAllStates.length > 0) {
       for(let j = 0; j < getAllStates.length; j++) {
         const getDistrict = getAllStates[j].getElementsByClassName('distric')
         if(getDistrict.length > 0) {
           getDistrict[0].style.display='none'
         }
       }
     }
  }
}

for (let i = 0; i < liArr.length; i++) {
   const getCountry = liArr[i].getElementsByClassName('country');
   const getAllStates = getCountry[0].getElementsByClassName('state')

   if(getAllStates.length > 0) {
     for(let j = 0; j < getAllStates.length; j++) {
       getAllStates[j].addEventListener('click', () => {
         hideAllStates();
         const getDistrict = getAllStates[j].getElementsByClassName('distric')
         if(getDistrict.length > 0) {
           getDistrict[0].style.display='block'
         }
       })
     }
   }
}


// function loop(params) {
//    for (let i = 0; i < store.length; i++) {
//       state[i].classList.remove("active");
      
//    }
   
// }

// for (let i = 0; i < state.length; i++) {
//    loop()
//    state[i].addEventListener('click',function(){
//       state[i].classList.add("active");
   
// })
// }
// state[0].addEventListener("click", function() {
//   some()
//    const classname= state[0].getElementsByClassName("state ")
//    classname[0].style.display="block"
 
//     });

//    function wsa(params) {
      
//    for (let i = 0; i < distric.length; i++) {
//       const content= list.getElementsByClassName('distric ')
//       content[0].style.display='none'
//    }



// }
// distric[0].addEventListener("click", function() {
//   wsa()
//     const content= distric[0].getElementsByClassName("distric ")
//     content[0].style.display="block"
//     content[0].style.padding="0 120px"
         
//      });
// distric[1].addEventListener("click", function() {
//   wsa()
//     const content= distric[1].getElementsByClassName("distric ")
//     content[0].style.display="block"
//     content[0].style.padding="0 120px"
         
//      });
     
// //      const bihar=list.getElementsByClassName('br')
//      const ias= list.getElementsByClassName('distric br')
//      ias[0].style.display='none'
     
//      bihar[0].addEventListener('click',function(){
      
//         const ias= list.getElementsByClassName(' distric br')
//         ias[0].style.display='block'
//         ias[0].style.padding="0 120px"

//      })
   
     
     





   //   state[1].addEventListener("click", function() {
   //    some()
   //   const classname= state[1].getElementsByClassName("state")
   //     classname[0].style.display="block"
      
   //       });
         
   //   state[2].addEventListener("click", function() {
   //    some()
   //   const classname= state[2].getElementsByClassName("state")
   //    classname[0].style.display="block"
      
   //       });
   //   state[3].addEventListener("click", function() {
   //    some()
   //   const classname= state[3].getElementsByClassName("state")
   //    classname[0].style.display="block"
      
   //       });
   //   state[4].addEventListener("click", function() {
   //    some()
   //   const classname= state[4].getElementsByClassName("state")
   //    classname[0].style.display="block"
      
   //       });
   
