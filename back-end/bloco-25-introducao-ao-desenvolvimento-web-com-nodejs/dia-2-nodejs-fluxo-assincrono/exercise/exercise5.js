const fs = require('fs').promises

const arrayStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

const func = async () => {
  const promises = arrayStrings.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));
  await Promise.all(promises)
  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];
  const filesStrings = await Promise.all(files.map((file) => fs.readFile(file, 'utf8')))
  fs.writeFile('./fileAll.txt', filesStrings.join(' '))
}

func()