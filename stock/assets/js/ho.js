document.getElementById("tool-bar")?.addEventListener("click", () => {
    let responsive = document.getElementById("tool-p2");
    // if(!responsive.style.display){
    //     return  responsive.style.display = "block"
    // }
    if (responsive.style.display == "none") {
        responsive.style.display = "block"
    } else {
        responsive.style.display = "none"
    }
})




// // script.js
// document.addEventListener("DOMContentLoaded", () => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('lending');
//           observer.unobserve(entry.target); // Animation complete, observer को हटाएं
//         }
//       });
//     });
  
//     // उन सभी elements को observe करें जिनमें 'fade-in' class है
//     document.querySelectorAll('.fade-in').forEach(element => {
//       observer.observe(element);
//     });
//   });

document.getElementById("bar20")?.addEventListener("click", () => {
  let reserved = document.getElementById("reserved");
  if(!reserved.style.display){
      return  reserved.style.display = "block"
  }
  if (reserved.style.display == "none") {
    reserved.style.display = "block"
  } else {
    reserved.style.display = "none"
  }
})


document.getElementById("tool-bar").addEventListener("click", () => {
  let tool = document.getElementById("tool-p2");
  if(!tool.style.display){
      return  reserved.style.display = "block"
  }
  if (tool.style.display == "none") {
    tool.style.display = "block"
  } else {
    tool.style.display = "none"
  }
})

