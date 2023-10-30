import React from "react";
import "./ExploreContainer.css";
import { IonDatetime, IonDatetimeButton, IonPopover } from "@ionic/react";

const now = new Date("2023-10-30T11:08:09.538Z");
const monthLater = new Date("2023-11-27T11:08:09.538Z");

const ExploreContainer: React.FC = () => {
  return (
    <div id="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      <IonDatetimeButton datetime="datetime" />
      <IonPopover keepContentsMounted>
        <IonDatetime
          id="datetime"
          min={now.toISOString()}
          max={monthLater.toISOString()}
        />
      </IonPopover>
    </div>
  );
};

export default ExploreContainer;
