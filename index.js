// index.js - piccola app di salute per test locali (Netlify userà le Functions)
import express from "express";

const app = express();
const PORT = process.env.PORT || 8888;

app.get("/", (_req, res) => {
  res.type("text").send("Backend Preventivo attivo. Usa gli endpoint /api/* (Netlify Functions).");
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server locale avviato su http://localhost:${PORT}`);
});
