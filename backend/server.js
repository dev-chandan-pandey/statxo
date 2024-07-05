
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const SECRET_KEY = 'your_secret_key';

// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// const mongoURI = 'mongodb+srv://iamchandanpandey11:fw28_022@cluster0.disuwwk.mongodb.net/statxo?retryWrites=true&w=majority&appName=Cluster0';
// mongoose.connect(mongoURI).then(() => {
//   console.log('MongoDB connected');
// }).catch(err => console.log('MongoDB connection error:', err));

// // Data schema and model
// const dataSchema = new mongoose.Schema({
//   id: Number,
//   quantity: Number,
//   amount: Number,
//   postingYear: Number,
//   postingMonth: String,
//   actionType: String,
//   actionNumber: String,
//   actionName: String,
//   status: String,
//   Impact: String,
// });

// const Data = mongoose.model('Data', dataSchema);

// // Mock login functionality
// app.post('/login', (req, res) => {
//   const { role } = req.body; // role: 'admin' or 'user'
//   if (role === 'admin' || role === 'user') {
//     const token = jwt.sign({ role }, SECRET_KEY, { expiresIn: '1h' });
//     res.json({ role, token });
//   } else {
//     res.status(400).json({ error: 'Invalid role' });
//   }
// });

// // Middleware to verify token
// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (token) {
//     jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decoded) => {
//       if (err) {
//         return res.status(403).json({ error: 'Invalid token' });
//       }
//       req.role = decoded.role;
//       next();
//     });
//   } else {
//     res.status(401).json({ error: 'No token provided' });
//   }
// };

// // Routes
// app.get('/data', verifyToken, async (req, res) => {
//   const data = await Data.find();
//   res.json(data);
// });

// app.post('/data', verifyToken, async (req, res) => {
//   const newData = new Data(req.body);
//   await newData.save();
//   res.json(newData);
// });

// app.put('/data/:id', verifyToken, async (req, res) => {
//   const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updatedData);
// });

// // Update multiple rows at once
// app.put('/data', verifyToken, async (req, res) => {
//   const updates = req.body; // Expecting an array of updates
//   const updatePromises = updates.map(update => 
//     Data.findByIdAndUpdate(update._id, update, { new: true })
//   );
//   const updatedRecords = await Promise.all(updatePromises);
//   res.json(updatedRecords);
// });

// // Protected route example
// app.get('/protected', verifyToken, (req, res) => {
//   res.json({ message: 'This is a protected route', role: req.role });
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const SECRET_KEY = 'your_secret_key';

// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// const mongoURI = 'mongodb+srv://iamchandanpandey11:fw28_022@cluster0.disuwwk.mongodb.net/statxo?retryWrites=true&w=majority&appName=Cluster0';
// mongoose.connect(mongoURI).then(() => {
//   console.log('MongoDB connected');
// }).catch(err => console.log('MongoDB connection error:', err));

// // Data schema and model
// const dataSchema = new mongoose.Schema({
//   id: Number,
//   quantity: Number,
//   amount: Number,
//   postingYear: Number,
//   postingMonth: String,
//   actionType: String,
//   actionNumber: String,
//   actionName: String,
//   status: String,
//   Impact: String,
// });

// const Data = mongoose.model('Data', dataSchema);

// // Mock login functionality
// app.post('/login', (req, res) => {
//   const { role } = req.body; // role: 'admin' or 'user'
//   if (role === 'admin' || role === 'user') {
//     const token = jwt.sign({ role }, SECRET_KEY, { expiresIn: '1h' });
//     res.json({ role, token });
//   } else {
//     res.status(400).json({ error: 'Invalid role' });
//   }
// });

// // Middleware to verify token
// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   if (authHeader) {
//     const token = authHeader.split(' ')[1];
//     jwt.verify(token, SECRET_KEY, (err, decoded) => {
//       if (err) {
//         return res.status(403).json({ error: 'Invalid token' });
//       }
//       req.role = decoded.role;
//       next();
//     });
//   } else {
//     res.status(401).json({ error: 'No token provided' });
//   }
// };

// // Routes
// app.get('/data', verifyToken, async (req, res) => {
//   const data = await Data.find();
//   res.json(data);
// });

// app.post('/data', verifyToken, async (req, res) => {
//   const newData = new Data(req.body);
//   await newData.save();
//   res.json(newData);
// });

// app.put('/data/:id', verifyToken, async (req, res) => {
//   const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updatedData);
// });

// // Update multiple rows at once
// app.put('/data', verifyToken, async (req, res) => {
//   const updates = req.body; // Expecting an array of updates
//   const updatePromises = updates.map(update => 
//     Data.findByIdAndUpdate(update._id, update, { new: true })
//   );
//   const updatedRecords = await Promise.all(updatePromises);
//   res.json(updatedRecords);
// });

// // Protected route example
// app.get('/protected', verifyToken, (req, res) => {
//   res.json({ message: 'This is a protected route', role: req.role });
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const SECRET_KEY = 'your_secret_key';

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
//const mongoURI = 'mongodb+srv://iamchandanpandey11:fw28_022@cluster0.disuwwk.mongodb.net/statxo?retryWrites=true&w=majority&appName=Cluster0';
const mongoURI = 'mongodb+srv://renukajagrwal26:12345@cluster0.je2jnjo.mongodb.net/statxo?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log('MongoDB connection error:', err));

// Data schema and model
const dataSchema = new mongoose.Schema({
  id: Number,
  quantity: Number,
  amount: Number,
  postingYear: Number,
  postingMonth: String,
  actionType: String,
  actionNumber: String,
  actionName: String,
  status: String,
  Impact: String,
});

const Data = mongoose.model('Data', dataSchema);

// Mock login functionality
app.post('/login', (req, res) => {
  const { role } = req.body; // role: 'admin' or 'user'
  if (role === 'admin' || role === 'user') {
    const token = jwt.sign({ role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ role, token });
  } else {
    res.status(400).json({ error: 'Invalid role' });
  }
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }
      req.role = decoded.role;
      next();
    });
  } else {
    res.status(401).json({ error: 'No token provided' });
  }
};

// Routes
app.get('/data', verifyToken, async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

app.post('/data', verifyToken, async (req, res) => {
  const newData = new Data(req.body);
  await newData.save();
  res.json(newData);
});

app.put('/data/:id', verifyToken, async (req, res) => {
  const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedData);
});

// Update multiple rows at once
app.put('/data', verifyToken, async (req, res) => {
  const updates = req.body; // Expecting an array of updates
  const updatePromises = updates.map(update => 
    Data.findByIdAndUpdate(update._id, update, { new: true })
  );
  const updatedRecords = await Promise.all(updatePromises);
  res.json(updatedRecords);
});

// Protected route example
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', role: req.role });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
