document.addEventListener("DOMContentLoaded", function () {
  // get search button
  const button = document.querySelector(".search-btn");

  // add click event listener to search button
  button.addEventListener("click", function () {
    // create XMLHttpRequest object to send AJAX request
    const xhr = new XMLHttpRequest();

    // get the value from the search field
    const searchValue = document.querySelector(".search-field").value;

    // when a response is received from the server
    xhr.onload = function () {
      // get the result div
      const resultDiv = document.getElementById("result");

      // set the HTML content of the result div with the received response
      resultDiv.innerHTML = xhr.responseText;
    };

    // create a POST request to superheroes.php script
    xhr.open("POST", "superheroes.php", true);

    // set the content type header for POST requests
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // send AJAX request to the server with the search query as a parameter
    xhr.send("avenger=" + encodeURIComponent(searchValue));
  });
});
