/*global kakao*/ 
import React, { useEffect } from "react";

const KakaoLocation = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=fa2aed1bfe8510049a5463f070b5da8d&autoload=false&libraries=clusterer,services`;

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.541021962673106, 127.08878718428316),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        const markerPosition = new kakao.maps.LatLng(37.541021962673106, 127.08878718428316);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };

    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <a
        href="https://map.kakao.com/link/to/엑스아이오엔,37.541021962673106,127.08878718428316"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div id="map" style={{ width: "600px", height: "450px" }}></div>
      </a>
    </div>
  );
};

export default KakaoLocation;
