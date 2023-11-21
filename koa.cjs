const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const Router = require('koa-router');
const fs = require('fs');
const open = require('opener');

const app = new Koa();
const router = new Router();

// Serve static files from the 'dist' directory
app.use(serve(path.join(__dirname, 'dist')));

// // Koa routes for history API fallback
router.get('/', async (ctx) => {
  // Redirect to the home page
  ctx.redirect('/html/home.html');
});

router.get('/home', async (ctx) => {
  // Render the home page
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.join(__dirname, 'dist/html/home.html'));
});

router.get('/about', async (ctx) => {
  // Render the about page
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.join(__dirname, 'dist/html/about.html'));
});

router.get('/contact', async (ctx) => {
  // Render the contact page
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.join(__dirname, 'dist/html/contact.html'));
});

// Use the router middleware
app.use(router.routes());

// // For any other routes, serve the main HTML file
app.use(async (ctx) => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.join(__dirname, 'dist/html/home.html'));
});

// Start the server
const server = app.listen(3000, () => {
  // console.log('Server is running on http://localhost:3000');

  // Open the default browser
  open('http://localhost:3000');
});

// Handle cleanup on server exit
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  server.close(() => {
    console.log('Server shut down.');
    process.exit(0);
  });
});
