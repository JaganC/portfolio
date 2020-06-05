import {
  IonContent
} from "@ionic/react";
import React from "react";
import "./Home.css";

const Home: React.FC = () => {

  return (
    <>
      <IonContent color="dark">
        <div className="welcomeText">
          I AM A UI DEVELOPER
        </div>
        <div className="center">
        <code className="subTextFont">Hybrid Mobile Application</code> and <code className="subTextFont" >Web</code>
        </div>
        <div className="locationInfo">
        <cite>from Bengaluru, In</cite>
        </div>
      </IonContent>
      </>
  );
};

export default Home;
