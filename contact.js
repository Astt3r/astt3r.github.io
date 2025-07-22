document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("contact-name").value,
    email: document.getElementById("contact-email").value,
    message: document.getElementById("contact-message").value
  };

  const res = await fetch('/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  const data = await res.json();
  alert(data.message);
});