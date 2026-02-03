
const openNav = document.getElementById("open")
const closeNav = document.getElementById("close")
const sideNavBar = document.querySelector(".sidenav")
const mainSection = document.querySelectorAll(".main .section");

closeNav.addEventListener('click', closeSideNavBar)
loginButton.oncklick = showLogin

function showLogin(){
    sideNavBar.style.display = "none";
    mainSection.forEach(function(item){
        item.style.display = "none"
    })
    loginModal.style.display = "block" 
}
document.getElementById("closeBtn").addEventListener('click',hidelogin)
function hidelogin(){
    sideNavBar.style.display = "block";
    mainSection.forEach(function(item){
        item.style.display = "block"
    })
     loginModal.style.display = "none" 
}

function closeSideNavBar() {
    sideNavBar.classList.toggle("mango")
}


const darkTheme = function() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#2E282A"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}

const lightTheme = function() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".dark-theme").textContent = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC"

}

function eleHover(element) {
    element.style.backgroundColor = "yellow";
}

function eleOut(item) {
    item.style.backgroundColor = "#DEE7E7"
}

const changeCompany = function() {
    document.querySelector("#company").textContent = "Sales Force";
};

const normal = function() {
    document.querySelector("#company").textContent = "Company"
}

const keyPressed = function() {
    document.querySelector("body").style.backgroundColor = "white"
}

const keyDown = function() {
    document.querySelector("body").style.backgroundColor = "red"
}
