require('./server/app').listen(process.env.PORT || 3000, () => {
  console.log('server runs on 3000');
});
