import fs from 'fs';
(function () {
  // readFile
  fs.readFile('package.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  // writeFile
  fs.writeFile('test.txt', 'Hello World!', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
  });

  // unlink
  if (fs.existsSync('test.txt')) {
    fs.unlinkSync('test.txt');
  }

  // mkdirSync
  if (!fs.existsSync('test')) {
    fs.mkdirSync('test');
  }

  // rmdir
  if (fs.existsSync('test')) {
    fs.rmdirSync('test');
  }

  // readdir
  const files = fs.readdirSync('.');
  console.log(files);

  // stat
  const stats = fs.statSync('package.json');
})();
