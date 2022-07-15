// document.addEventListener("DOMContentLoaded" , mobile);

// function mobile() {
//     let query = window.matchMedia("(max-width: 375px)");
//      if (query.matches) {
//         document.getElementById("product").style.display = "block";
//      }
// }

// let query = window.matchMedia("(max-width: 375px)");

// query.addEventListener("change" , mobile);

// function mobile() {
//     media = document.getElementById("#product");
//     if(media.style.display = "none")  {
//         media.style.display = "block"
//       } else {
//         media.style.display = "none"
//       }

// }


function bar() {
    let visible = document.getElementById("click-list");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    } else {
        visible.style.display = "none";
    }
}



// function productdesktop() {
//     // let visiblemobile = document.getElementById("product")
//     let visibledesktop = document.querySelector("list");
//     if (visibledesktop.style.display === "none") {
//         visibledesktop.style.display = "block";
//     } else {
//         visibledesktop.style.display = "none";
//     }
// }

function product() {
    visibleproduct = document.getElementById("product")
    if (visibleproduct.style.display === "none") {
        visibleproduct.style.display = "block";
    } else {
        visibleproduct.style.display = "none";
    }
}

function company() {
    visibleproduct = document.getElementById("company")
    if (visibleproduct.style.display === "none") {
        visibleproduct.style.display = "block";
    } else {
        visibleproduct.style.display = "none";
    }
}

function connect() {
    visibleproduct = document.getElementById("connect")
    if (visibleproduct.style.display === "none") {
        visibleproduct.style.display = "block";
    } else {
        visibleproduct.style.display = "none";
    }
}