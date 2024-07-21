import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get('/api/message', (req, res) => {
  res.json({ message: 'React + Vite!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});