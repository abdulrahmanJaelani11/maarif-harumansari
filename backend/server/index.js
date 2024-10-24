const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');

const SitusRoute = require('./routes/SitusRoute');
const BeritaRoute = require('./routes/BeritaRoute');
const StafRoute = require('./routes/StafRoute');
const FasilitasRoute = require('./routes/FasilitasRoute');
const KegiatanRoute = require('./routes/KegiatanRoute');

// AUTH
const AuthRoute = require('./routes/AuthRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.use('/api/logo', express.static(path.join(__dirname, './assets/img')));
app.use('/api/gambar-berita', express.static(path.join(__dirname, './assets/img')));
app.use('/api/gambar-pendidik', express.static(path.join(__dirname, './assets/img')));

app.use('/api', SitusRoute);
app.use('/api', BeritaRoute);
app.use('/api', StafRoute);
app.use('/api', FasilitasRoute);
app.use('/api', KegiatanRoute);

// AUTH
app.use('/api', AuthRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;