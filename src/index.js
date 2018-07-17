require('./server/app').listen(process.env.PORT || 5000, () => {
  console.log('server runs on 5000');
});
