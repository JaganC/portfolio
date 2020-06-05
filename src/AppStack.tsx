import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonRouterOutlet
  } from "@ionic/react";
  import React from "react";
  import { Route, Redirect } from 'react-router';
  import Home from "./components/Home";
  import Blog from "./components/Blog";
import About from "./components/About";
  
  const AppStack: React.FC = () => {
  
    return (
      <IonPage>
        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
        <IonHeader>
        <IonToolbar mode="ios" color="dark">
            <IonTitle>Jagan Cj</IonTitle>
            <IonButtons slot="end">
              <IonButton routerLink="/home">Home</IonButton>
              <IonButton routerLink="/about">About</IonButton>
              <IonButton routerLink="/blog">Blog</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/blog" component={Blog} exact={true} />
              <Route path="/about" component={About} exact={true} />
        </IonRouterOutlet>
        </IonContent>
      </IonPage>
    );
  };
  
  export default AppStack;
  