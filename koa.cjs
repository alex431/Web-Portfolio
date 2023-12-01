// Import required modules
const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const Router = require('koa-router');
const fs = require('fs');
const open = require('opener');

// Create a new Koa application instance
const app = new Koa();
const router = new Router();

// Serve static files from the 'dist' directory
app.use(serve(path.join(__dirname, 'dist')));

// // Serve static files from the 'dist/img' directory
// app.use(serve(path.join(__dirname, 'dist/img')));

// Koa routes for history API fallback (optional)
router.get('/', async (ctx) => {
  
  // ctx.type = 'html';
  // ctx.body = fs.createReadStream(path.join(__dirname, 'dist/html/home.html'));

  // Redirect to the home page
  ctx.redirect('/html/home.html');
});

// Koa routes for specific pages

router.get('/html/home', async (ctx) => {
  // Render the home page
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.join(__dirname, 'dist/html/home.html'));
});

router.get('/html/about', async (ctx) => {
  // Render the about page
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.join(__dirname, 'dist/html/about.html'));
});

router.get('/html/contact', async (ctx) => {
  // Render the contact page
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.join(__dirname, 'dist/html/contact.html'));
});

// Use the router middleware
app.use(router.routes());

// Start the server on port 3000
const server = app.listen(3000, () => {

  console.log('Sever is running on http://localhost:3000');

   // Open the default browser to the server's URL
  open('http://localhost:3000');
});

// Handle cleanup on server exit (e.g., when pressing Ctrl+C to terminate the server)
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  server.close(() => {
    console.log('Server shut down.');
    process.exit(0);
  });
});
