import React, { useEffect } from 'react';

const RealAdSenseBanner = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2842257662921907"
        crossOrigin="anonymous"
        noSsr // This line is important
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2842257662921907"
        data-ad-slot="3106574367"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default RealAdSenseBanner;
