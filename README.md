# bizcard

A digital business card with a scannable QR code.

- **Edit your details** in [`config.js`](config.js) — name, title, company, phone, email, website, LinkedIn, address, accent colour.
- **Open `index.html`** in a browser to see the front and back of the card.
- **Scan the QR** with any phone camera: it offers "Add to contacts" (vCard).
  Set `qrMode: "url"` to make the QR open the hosted card page instead.
- **Save contact** downloads a `.vcf`; **Download QR** saves a 1024px PNG for printing,
  stickers or slides; **Print** outputs a standard 3.5 × 2 in card (front and back).

## Host it (optional)

Enable GitHub Pages (Settings → Pages → deploy from this branch, root folder) and the
card will be live at `https://adzimaziz.github.io/bizcard/`.

The QR library ([qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator), MIT)
is vendored in `vendor/`, so the page works offline.
