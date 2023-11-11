import React, { useState } from "react";
import baseUrl from "../../utils/baseUrl";

import axios from "axios";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const MapComponent = () => {
  // const [manufacturers, setManufacturers] = useState([]);

  // React.useEffect(() => {
  //   const url = `${baseUrl}/api/v1/manufacturerLocation/locations`;

  //   axios.get(url)
  //     .then((response) => {
  //       const responseData = response.data;
  //       console.log(responseData)
  //       setManufacturers(responseData)
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching placemarks:", error);
  //     });
  // }, [baseUrl]);

  return (
    <div>
      dordoi map
      <YMaps>
        <Map
          defaultState={{
            center: [42.937146, 74.627722],
            zoom: 11,
          }}
          width={"100%"}
          height={"400px"}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        >
          <Placemark
            geometry={[42.937146, 74.627722]}
            properties={{
              balloonContent: "Dordoi Location",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapComponent;
