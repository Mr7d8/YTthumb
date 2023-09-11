import dynamic from 'next/dynamic';

const AdSenseBanner = dynamic(() => import('./RealAdSenseBanner'), {
  ssr: false,
});

export default AdSenseBanner;
