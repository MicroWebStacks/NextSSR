import { promises as fs } from 'fs';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

const handler = async (req, res) => {
    await delay(1000)
    const data = await fs.readFile('./server_data/info.txt','binary')
    res.setHeader('Content-Type', 'application/txt');
    res.setHeader('Content-Disposition', 'attachment; filename=info.txt');
    res.send(data)
};

export default handler;
