window.onscroll("scroll", closeNav());

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.height = "1000px";
    document.getElementById("s-btn").style.display = "none";
    document.getElementById("body").style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("s-btn").style.display = "inline";
    document.getElementById("body").style.overflow = "auto";
}



