import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));
app.post("/chat", (req, res) => {
  const text = req.body?.message || req.body?.history?.at(-1)?.content || "";
  res.json({ type: "assistant", message: { role: "assistant", content: `SMMV AI Concierge received: ${text}` } });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SMMV AI running on port ${PORT}`));
