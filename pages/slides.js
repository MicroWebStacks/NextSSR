import Head from 'next/head'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



export default function Slides() {
  return (
    <>
      <Head>
        <title>slides</title>
        <meta name="description" content="Slide show demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Splide aria-label="My Favorite Images"
   options={ {
    rewind: true,
    width : 800,
    gap   : '1rem',
  } }
    >
      {["1.png","2.png","3.png","4.png"].map((name,index)=>(
        <SplideSlide key={index}>
          <img src={name} alt={`Image ${name}`}/>
        </SplideSlide>
      ))}
    </Splide>
    </>
  );
}
