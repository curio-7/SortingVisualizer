//While Selecting algo Optn ... showing it on screen
let dropdownMenu = document.getElementsByClassName("dropdown-item");
let currAlgo = "Bubble Sort";
for (let i = 0; i < dropdownMenu.length; i++) {
    dropdownMenu[i].addEventListener("click", function () {
        currAlgo = dropdownMenu[i].innerHTML;
        dropdownMenu[i].innerHTML = document.getElementById("navbarDropdownMenuLink").innerHTML;
        document.getElementById("navbarDropdownMenuLink").innerHTML = currAlgo;
    });
}

//Arrays And Bars
let barsHeight = [];
let bars = [];
let n = 30; //no of bars showing initially
let barsCon = document.querySelector(".barsCon");
let upWidth = 2;

//Arrow function(=>)  = The left part denotes the input of a function and the right part the output of that function.
const generateNewArray = () => {
    clearTimeout(); //it clears a timer set with the setTimeout() method.
    document.getElementById("sort-button").disabled = false;
    document.getElementById("size").disabled = false;
    document.getElementById("speed").disabled = false;
    document.getElementById("navbarDropdownMenuLink").disabled = false;
    c = 0;
    document.getElementById("sort-button").innerHTML = "Sort";
    barsCon.innerHTML = "";
    for (let i = 0; i < n; i++) {
        barsHeight[i] = randomNumber(100, 500);
        bars[i] = document.createElement("div");
        bars[i].classList.add("bar");
        barsCon.appendChild(bars[i]);
        bars[i].style.height = barsHeight[i] + "px";
        bars[i].style.width = upWidth + "%";
    }

    //when we refresh the page
    let startingArray = document.createElement("div");
    startingArray.classList.add("startingArray");
    barsCon.appendChild(startingArray);

};

//VISUALIZATION
let speed = 500;
let delay = 10000 / (Math.floor(n / 10) * speed);
let c = 0;

//animation i.e if want to change color and height of that bar.
const animation = (bar, height, color) => {
    setTimeout(() => {
        bar.style.height = height + "px";
        bar.style.backgroundColor = color;
    }, (c += delay)); //This is updated on every bar change so that visualization is visible.

};


//Generate New Array
document.querySelector(".newArray").addEventListener("click", generateNewArray);

//Speed And Size
function updateSpeed() {
    let newSpeed = document.getElementById("speed").value;
    speed = newSpeed;
    delay = 10000 / (Math.floor(n / 10) * speed);
}

function updateSize() {
    let newSize = document.getElementById("size").value;
    n = newSize;
    upWidth = 70 / n;
    generateNewArray();
}

document.getElementById("speed").addEventListener("input", updateSpeed);
document.getElementById("size").addEventListener("input", updateSize);

//changes when clicked on sorting button
let sortBtn = document.getElementById("sort-button");
sortBtn.addEventListener("click", () => {
    document.getElementById("sort-button").disabled = true;
    document.getElementById("size").disabled = true;
    document.getElementById("speed").disabled = true;
    document.getElementById("navbarDropdownMenuLink").disabled = true;
    document.getElementById("sort-button").innerHTML = "Sorting . . .";

    for (let i = 0; i < n; i++) {
        bars[i].style.backgroundColor = "#57cc99";  //initial color of array after producing random array.
    }
    //calling suitable sorting algorithm
    switch (currAlgo) {
        case "Bubble Sort":
            bubbleSort();
            break;
        case "Insertion Sort":
            insertionSort();
            break;
        case "Selection Sort":
            selectionSort();
            break;
        case "Quick Sort":
            quickSort(0, n - 1);
            break;
        case "Merge Sort":
            mergeSort(0, n - 1);
            break;
        case "Heap Sort":
            heapSort();
            break;

        default:
            bubbleSort();   //by default it will be Bubble Sort
    }
    //here array comes in a sorted manner then we change the color of that sorted array to show that it is sorted.

    for (let i = 0; i < n; i++) {
        animation(bars[i], barsHeight[i], "#FF6363");   //first in original color
    }
    for (let i = 0; i < n; i++) {
        animation(bars[i], barsHeight[i], sorted);      //then in sorted color
    }

    //After sorting is completed we enables all the button.
    setTimeout(function () { //it calls a function after a number of milliseconds.
        document.getElementById("sort-button").disabled = false;
        document.getElementById("size").disabled = false;
        document.getElementById("speed").disabled = false;
        document.getElementById("navbarDropdownMenuLink").disabled = false;
        document.getElementById("sort-button").innerHTML = "Sort";
        c = 0;
    }, c);
});

//colors
let cm = "#FF6363"; //in hold
let c1 = "#F8A1D1"; //comparison
let c2 = "#822659"; //comparison
let sorted = "#22577A"; //sorted
let heapcol = "#FF6363"; //color used in heap sort only

// Returns Random Number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

generateNewArray();