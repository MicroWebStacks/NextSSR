import Head from 'next/head'
import Typography from '@mui/material/Typography';
import { promises as fs } from 'fs';
import {Button, Chip} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export default function SimpleText({data,mtime}) {
  return (
    <>
      <Head>
        <title>SSR-Container</title>
        <meta name="description" content="Container check" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chip label="info.txt" />
      <Chip label={`modified on : ${mtime}`} />
      <Typography paragraph>
        {data}
      </Typography>
      <Button variant="contained" href="/api/getText">Download  <DownloadIcon/></Button>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fs.readFile('./server_data/info.txt','binary')
  const stat = await fs.stat('./server_data/info.txt')
  const mtime = String(stat.mtime)
  return {
    props: {data,mtime}, // will be passed to the page component as props
  }
}
