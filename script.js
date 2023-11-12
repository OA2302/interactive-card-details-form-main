function validateForm() {
  const nameInput = document.getElementById("Name");
  const numberInput = document.getElementById("number");
  const dateInput = document.getElementById("date");
  const cvcInput = document.getElementById("cvc");

  const nameError = document.getElementById("nameError");
  const numberError = document.getElementById("numberError");
  const dateError = document.getElementById("dateError");
  const cvcError = document.getElementById("cvcError");

  if (!nameInput.value.trim()) {
    nameInput.classList.add("error");
    nameError.innerHTML = "Please input cardholder name";
    nameError.style.display = "block";
    setTimeout(() => {
      nameError.style.display = "none";
    }, 5000);
  } else {
    nameInput.classList.remove("error");
    nameError.style.display = "none";
  }

  if (!numberInput.value.trim()) {
    numberInput.classList.add("error");
    numberError.innerHTML = "Please input card number";
    numberError.style.display = "block";
    setTimeout(() => {
      numberError.style.display = "none";
    }, 5000);
  } else {
    numberInput.classList.remove("error");
    numberError.style.display = "none";
  }

  if (!dateInput.value.trim()) {
    dateInput.classList.add("error");
    dateError.innerHTML = "Please input expiration date";
    dateError.style.display = "block";
    setTimeout(() => {
      dateError.style.display = "none";
    }, 5000);
  } else {
    dateInput.classList.remove("error");
    dateError.style.display = "none";
  }

  if (!cvcInput.value.trim()) {
    cvcInput.classList.add("error");
    cvcError.innerHTML = "Please input CVC";
    cvcError.style.display = "block";
    setTimeout(() => {
      cvcError.style.display = "none";
    }, 5000);
  } else {
    cvcInput.classList.remove("error");
    cvcError.style.display = "none";
  }

  if (
    !nameError.style.display ||
    !numberError.style.display ||
    !dateError.style.display ||
    !cvcError.style.display
  ) {
    document.getElementById("cardName").innerText = nameInput.value;
    document.getElementById("cardNumber").innerText = numberInput.value;
    document.getElementById("cardDate").innerText = dateInput.value;
    document.getElementById("cardCvc").innerText = cvcInput.value;

    const thanksMessage = document.getElementById("thanksMessage");
    thanksMessage.innerHTML = `  
      <div class="done">
        <img src="./images/icon-complete.svg" alt="icon-complete">
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button onclick="goback()">Continue</button>
      </div>
    `;
    document.getElementById("main").remove();
  }
}

function goback() {
  // Handle going back or any other action after completion
}
