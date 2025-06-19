document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const details = this.details.value.trim();
  const msg = document.getElementById("msg");

  if (name && email && details) {
    msg.style.color = "green";
    msg.textContent = "✅ ধন্যবাদ! আপনার অর্ডার গ্রহণ করা হয়েছে।";
    this.reset();
  } else {
    msg.style.color = "red";
    msg.textContent = "❗ অনুগ্রহ করে সব তথ্য দিন।";
  }
});
