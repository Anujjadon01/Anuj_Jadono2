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