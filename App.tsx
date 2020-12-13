import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

import Site from "./components/Site";
import { Site as SiteModel } from "./components/Model";


const site: SiteModel = {
  id: "001",
  name: "La carolina, tribuna norte",
  image: "https://s3.amazonaws.com/decom_uploads/external/building1.jpg",
  address: "120 Broadway, New York, NY 10271",
  contacts: [
    {name: "Ronny Cajas",phone: "0992825956",email: "pato1418@yahoo.com"},
    {name: "Ronny Cajas",phone: "0992825956",email: "pato1418@yahoo.com"},
    {name: "Ronny Cajas",phone: "0992825956",email: "pato1418@yahoo.com"}
  ]
}

export default () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await setTimeout(()=>{},30000);
      setReady(true);
    })();
  });

  if (!ready) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Site {...{ site }} />
    </>
  );
};
