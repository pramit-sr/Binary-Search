// Function to process input and display array
function processInput() {
    var input = document.getElementById("inputField").value;
    var array = input.split(",").map(function(item) {
        return parseInt(item.trim(), 10); 
    });
    displayArray(array);
}

// Function to display array in visualization area
function displayArray(array) {
    var visualizationDiv = document.getElementById("visualization");

    visualizationDiv.innerHTML = "";

    var paragraph = document.createElement("p");
    paragraph.textContent = "The array is: " + array.join(", ");

    visualizationDiv.appendChild(paragraph);
}

// Function to sort the array and display sorted array
function sorting() {
    var input = document.getElementById("inputField").value;
    var array = input.split(",").map(function(item) {
        return parseInt(item.trim(), 10); 
    });

    array.sort(function(a, b) {
        return a - b; // Sort numbers in ascending order
    });

    displayArray(array);
}

// Function to find an element using binary search
// Function to find an element using binary search
function element() {
    var input = document.getElementById("inputField2").value;
    var elementToFind = parseInt(input);

    var inputArray = document.getElementById("inputField").value;
    var array = inputArray.split(",").map(function(item) {
        return parseInt(item.trim(), 10); 
    });

    // Sort the array before binary search
    array.sort(function(a, b) {
        return a - b; // Sort numbers in ascending order
    });

    if (binarySearch(array, elementToFind)) {
        displayElement(elementToFind + " Found in array!");
    } else {
        displayElement(elementToFind + " Not found in the array!");
    }
}


// Binary search function
function binarySearch(array, x) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if x is present at mid
        if (array[mid] === x) {
            return true;
        } else if (array[mid] < x) {
            // If x greater, ignore left half
            left = mid + 1;
        } else {
            // If x is smaller, ignore right half
            right = mid - 1;
        }
    }

    // If element is not present in array
    return false;
}

// Function to display element finding result
function displayElement(message) {
    var elementTo = document.getElementById("elementTo");

    // Clear previous content
    elementTo.innerHTML = "";

    var paragraph = document.createElement("p");
    paragraph.textContent = message;

    elementTo.appendChild(paragraph);
}
