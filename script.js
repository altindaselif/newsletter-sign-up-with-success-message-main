const form = document.querySelector(".cta-form");
const formInput = document.getElementById("email");
const formError = document.querySelector(".form-error");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const modalEmail = document.querySelector(".modal-email");

// Regex: Text + @ + Text + . + Text Rule
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = function (email) {
  return emailRegex.test(email);
};

const showError = function () {
  formInput.classList.add("error");
  formError.style.display = "block";
};

const clearError = function () {
  formInput.classList.remove("error");
  formError.style.display = "none";
};

const openModal = function (e) {
  e.preventDefault();

  const emailValue = formInput.value.trim();

  if (!isValidEmail(emailValue)) {
    showError();
  } else {
    clearError();
    modalEmail.textContent = emailValue;
    modal.classList.add("active");
    overlay.classList.add("active");

    modal.focus();
  }
};

const closeModal = function () {
  modal.classList.remove("active");
  overlay.classList.remove("active");

  formInput.value = "";

  clearError();
};

form.addEventListener("submit", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

formInput.addEventListener("input", function () {
  if (formInput.classList.contains("error")) {
    clearError();
  }
});
