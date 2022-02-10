var flexWraper = document.getElementById("flex-wraper");

var flexDirectionSelect = document.querySelector(".flex-direction-select");
var flexWrapSelect = document.querySelector(".flex-wrap-select");
var justifyContentSelect = document.querySelector(".justify-content-select");
var alignItems = document.querySelector(".align-items");
var alignContent = document.querySelector(".align-content");

flexDirectionSelect.addEventListener("change", function () {
    flexWraper.style.flexDirection = flexDirectionSelect.value
})

flexWrapSelect.addEventListener("change", function () {
    flexWraper.style.flexWrap = flexWrapSelect.value
})

justifyContentSelect.addEventListener("change", function () {
    flexWraper.style.justifyContent = justifyContentSelect.value;
})

alignItems.addEventListener("change", function () {
    flexWraper.style.alignItems = alignItems.value;
})

alignContent.addEventListener("change", function () {
    flexWraper.style.alignContent = alignContent.value;
})
// drugi nacin
// function myFunction() {
//     var x = document.getElementById("select").value;
//     flexWraper.style.flexDirection = x;
// }

var boxes = document.getElementsByClassName("box");
var flexWraper = document.getElementById("flex-wraper");
var arr = Array.from(boxes);
console.log("default ", arr);

function plusBox() {
    var div = document.createElement("div");
    var circleDiv = document.createElement("div");
    div.classList.add("box");
    circleDiv.classList.add("circle");
    flexWraper.appendChild(div)
    div.appendChild(circleDiv);
    circleDiv.innerHTML = arr.length + 1;
    arr.push(div)
    console.log("plus ", arr);
}

function deleteBox() {
    arr.pop();
    flexWraper.lastChild.remove();
    console.log("minus ", arr);

}



