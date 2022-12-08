// Created by: Alex Nelson
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ISC2O-UNIT5-04-JS-AND-OR/sw.js", {
    scope: "/ISC2O-UNIT5-04-JS-AND-OR/",
  })
}

/**
 * This function determines whether or not someone is eligible for a discount.
 */
function calculateAgeRating() {
  //inputs
  const age = parseInt(document.getElementById("age").value)
  const day = document.getElementById("days").value
  //Process that determines if you are eligible
  if (age > 12 && age < 21 && (day == "monday" || day == "tuesday")) {
    document.getElementById("output").innerHTML = "Eligible."
  }
  //Shows "Not Eligible" if you are not eligible
  else {
    document.getElementById("output").innerHTML = "Not Eligible"
  }
}
