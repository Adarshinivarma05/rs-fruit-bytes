/* WhatsApp floating button text (edit your number & default msg) */
const waBtn = document.getElementById("wa-btn");
if (waBtn) {
  const phone = "919876543210";                    // ← your WhatsApp number
  const msg   = encodeURIComponent("Hi RS Fruit Bites, I’d like to order a fruit bowl!");
  waBtn.href  = `https://wa.me/${phone}?text=${msg}`;
}

