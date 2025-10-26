import express from "express";
import { create } from "@open-wa/wa-automate";

const app = express();
app.use(express.json());

create({
  headless: true,
  qrTimeout: 0,
  authTimeout: 0,
  cacheEnabled: false
}).then(client => {
  console.log("✅ WhatsApp session ready");
  app.post("/sendText", async (req, res) => {
    const { to, text } = req.body;
    try {
      await client.sendText(to, text);
      res.json({ success: true });
    } catch (err) {
      res.json({ success: false, error: err.message });
    }
  });

  app.get("/", (req, res) => res.send("Glam&Glow WhatsApp API is live ✅"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Running on port ${PORT}`));
