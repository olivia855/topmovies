document.getElementById("deals").addEventListener("mousemove", function () {
    this.style.boxShadow = "0px 4px 10px grey";

    const button = document.getElementById("mybt");
    button.style.backgroundColor = "white";
    button.style.color = "black";
})

document.getElementById("deals").addEventListener("mouseleave", function () {
    this.style.boxShadow = "none";

    const button = document.getElementById("mybt");
    button.style.backgroundColor = "black";
    button.style.color = "white";
})