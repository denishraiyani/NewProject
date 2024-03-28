document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(this);

  fetch("/submitFeedback", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("responseMessage").innerHTML = data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
