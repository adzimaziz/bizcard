# bizcard

A premium digital business card — black metal with gold foil, a futuristic Orbitron/Rajdhani type, an animated holographic edge and shine,
and a 3D tilt that follows your finger or mouse.

- **Live card:** https://adzimaziz.github.io/bizcard/
- **QR code:** [`qr.png`](qr.png) — scanning it opens the live card, where people tap
  **Save contact** to add you to their phone.
- **Edit your details** in [`config.js`](config.js) (`contactName` is the name saved to phones). The QR never needs to change,
  because it only holds the page link.
- **Print** from the browser to get a standard 3.5 × 2 in card.

The QR library ([qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator), MIT)
is vendored in `vendor/`.
