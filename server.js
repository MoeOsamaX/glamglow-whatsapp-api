import express from "express";
import wppconnect from "@wppconnect-team/wppconnect";

const app = express();
app.use(express.json());

let client = null;

// Create WhatsApp client
wppconnect
  .create({
    session: "glamglow",
    headless: true,
    disableWelcome: true,
    catchQR: (base64Qr) => {
      console.log("Scan this QR code to connect your WhatsApp:");
      console.log(base64Qr);
    },
  })
  .then((cl) => {
    client = cl;
    console.log("✅ WhatsApp connected and ready!");
  })
  .catch((err) => console.error("❌ WhatsApp init failed:", err));

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Glam&Glow WhatsApp API is online!");
});

// Webhook to send message
app.post("/webhook", async (req, res) => {
  try {
    const phone = req.body.phone?.replace("+", "") || "";
    if (!phone) return res.status(400).send("No phone number provided");

    const message = `✨ Order Confirmed! ✨
Thank you for shopping with Glam&Glow 💛
Your order has been successfully placed and is now being prepared for shipment.

You’ll receive another message once it’s picked up by the courier.
If you need any help, just reply to this message — we’re happy to assist! 🕯️`;

    await client.sendText(`${phone}@c.us`, message);
    console.log(`✅ Message sent to ${phone}`);
    res.status(200).send("Message sent!");
  } catch (err) {
    console.error("❌ Error sending message:", err);
    res.status(500).send("Failed to send message");
  }
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
