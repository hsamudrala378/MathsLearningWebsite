const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve all files inside 'public' folder

// Route for /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Login.html')); // Show login first
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 Contact form submitted:", name, email, message);
  res.json({ message: `Thank you ${name}, we received your message!` });
});

// Tutor request endpoint
app.post('/api/tutor-request', (req, res) => {
  const { name, email, message } = req.body;
  console.log("👨‍🏫 Tutor request submitted:", name, email, message);
  res.json({ message: "Tutor request received. We'll contact you soon!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
