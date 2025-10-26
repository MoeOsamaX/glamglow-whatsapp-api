import express from "express";
import { create } from "@open-wa/wa-automate";

const app = express();
app.use(express.json());
import { create } from '@open-wa/wa-automate';

cimport express from "express";
import { create } from "venom-bot";

const app = express();
app.use(express.json());

let client = null;

create({
  session: "glamglow",
  multidevice: true,
  headless: true,
  browserArgs: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-accelerated-2d-canvas",
    "--no-first-run",
    "--no-zygote",
    "--single-process",
    "--disable-gpu"
  ],
  executablePath: "/usr/bin/chromium"
})
  .then((c) => {
    client = c;
    console.log("✅ WhatsApp session started successfully!");
  })
  .catch((err) => console.error("❌ WhatsApp init error:", err));

app.get("/", (req, res) => res.send("🚀 Glam&Glow WhatsApp API Running!"));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



.then(client => {
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
