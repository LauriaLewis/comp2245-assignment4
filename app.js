document.addEventListener("DOMContentLoaded", function () {
  // get search button
  const button = document.querySelector(".search-btn");

  // add click event listener to search button
  button.addEventListener("click", function () {
    // create XMLHttpRequest object to send AJAX request
    const xhr = new XMLHttpRequest();

    // when a response is received from the server
    xhr.onload = function () {
      if (xhr.status === 200) {
        // show server response in alert message
        alert(this.responseText);
      } else {
        // handle error
        console.error("Error fetching data. Status:", xhr.status);
        alert("Error fetching data. Please try again.");
      }
    };

    // create a POST request to superheroes.php script
    xhr.open("POST", "superheroes.php", true);

    // set Content-Type header for POST request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // send AJAX request to the server
    xhr.send();
  });
});
