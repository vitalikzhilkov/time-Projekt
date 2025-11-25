document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyUqlpISQ4ODKC3qfh7SRWfj7TNNJFcnKCuejGWBDZTMIcG_TAsoHR9OW3iIlph56e1pA/exec", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        status.textContent = "Форма успешно отправлена!";
        form.reset();
      } else {
        status.textContent = "Ошибка при отправке.";
      }
    } catch (error) {
      console.error(error);
      status.textContent = "Ошибка соединения.";
    }
  });
});
