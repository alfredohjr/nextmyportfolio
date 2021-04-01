import React, { useEffect } from "react";

const AdsBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: "block"
      }}
      data-ad-client={`${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
      data-ad-slot="1234567890"
    />
  );
};

export default AdsBanner;