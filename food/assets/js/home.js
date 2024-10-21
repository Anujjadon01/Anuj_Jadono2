document.getElementById("select").addEventListener("click", () => {
    let list = document.getElementById("nav-list2");
    if (list.style.display == "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    }
})