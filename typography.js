const sideBarButton = document.getElementById("side-bar-button")
const sideBar = document.querySelector(".sidebar")
const closeButton = document.getElementById("close-button");

sideBarButton.addEventListener('click', function(){
    sideBar.classList.add("active");
})

closeButton.addEventListener("click", function(){
    sideBar.classList.remove("active");
})