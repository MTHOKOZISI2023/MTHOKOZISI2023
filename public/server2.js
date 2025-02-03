const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000; // You can change this if needed

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


