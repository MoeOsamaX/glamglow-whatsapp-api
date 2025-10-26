import express from "express";
import { create } from "@open-wa/wa-automate";

const app = express();
app.use(express.json());
import { create } from '@open-wa/wa-automate';

create({
  headless: true,
  useChrome: true,
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium-browser',
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--no-zygote",
    "--single-process"
  ],
  qrTimeout: 0,
  authTimeout: 0,
  cacheEnabled: false
}).then(client => start(client));


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
