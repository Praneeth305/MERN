const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/auth-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.log(err));
