import {
    IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon
  } from "@ionic/react";
  import React from "react";
  import "./About.css";
  import { 
    schoolOutline, 
    laptopOutline, 
    codeOutline,
    logoHtml5,
    logoJavascript,
    logoNpm,
    logoAngular,
    logoAndroid,
    logoGithub,
    logoCss3,
    logoIonic,
    logoReact,
    logoAppleAppstore,
    personOutline,
    logoLinkedin,
    logoTwitter,
    mailOutline
   } from "ionicons/icons";
  
  const About: React.FC = () => {
  
    return (
      <>
        <IonContent color="dark">
        <IonGrid>
        <IonRow>
            <IonCol sizeXs="12" sizeMd="6" sizeSm="12" sizeLg="4" sizeXl="3">
            <IonCard>
                <IonIcon icon={schoolOutline} className="iconStyle" ></IonIcon>
                <IonCardHeader>
                <IonCardSubtitle>Academics</IonCardSubtitle>
                <IonCardTitle>Masters in Software Engineering</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  I graduated from Masters in Software Engineering at Birla Institute of Technology and Science.
                  As well as Bachelors in Mathematics at Periyar University, Salem.
                </IonCardContent>
            </IonCard>
            </IonCol>
            <IonCol sizeXs="12" sizeMd="6" sizeSm="12" sizeLg="4" sizeXl="3">
            <IonCard>
                <IonIcon icon={laptopOutline} className="iconStyle" ></IonIcon>
                <IonCardHeader>
                <IonCardSubtitle>Work</IonCardSubtitle>
                <IonCardTitle>From 2011</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  I started working as Web Developer in 2011, then into Cross Platform / Hybrid Mobile Application Development. Later Responsive Web and Progressive Web Application Development.
          
                </IonCardContent>
            </IonCard>
            </IonCol>
            <IonCol sizeXs="12" sizeMd="6" sizeSm="12" sizeLg="4" sizeXl="3">
            <IonCard>
                <IonIcon icon={codeOutline} className="iconStyle" ></IonIcon>
                <IonCardHeader>
                <IonCardSubtitle>Skills</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                <IonIcon icon={logoHtml5} className="smallLogo"></IonIcon>
                <IonIcon icon={logoCss3} className="smallLogo"></IonIcon>
                <IonIcon icon={logoJavascript} className="smallLogo"></IonIcon>
                <IonIcon icon={logoNpm} className="smallLogo"></IonIcon>
                <IonIcon icon={logoReact} className="smallLogo"></IonIcon>
                <IonIcon icon={logoAngular} className="smallLogo"></IonIcon>
                <IonIcon icon={logoIonic} className="smallLogo"></IonIcon>
                <IonIcon icon={logoAndroid} className="smallLogo"></IonIcon>
                <IonIcon icon={logoAppleAppstore} className="smallLogo"></IonIcon>
                <IonIcon icon={logoGithub} className="smallLogo"></IonIcon>
                </IonCardContent>
            </IonCard>
            </IonCol>
            <IonCol sizeXs="12" sizeMd="6" sizeSm="12" sizeLg="4" sizeXl="3">
            <IonCard>
                <IonIcon icon={personOutline} className="iconStyle" ></IonIcon>
                <IonCardHeader>
                <IonCardSubtitle>Connect</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonCardSubtitle>
                    I am available on the below platforms. 
                    Have a Question?, need to talk? 
                    Let's connect there! I'm online NOW                 </IonCardSubtitle>
                  <IonCol size="6">
                  <a href="https://twitter.com/jaganc_" >
                  <IonIcon icon={logoTwitter} className="smallLogo"></IonIcon>
                  </a>
                  </IonCol>
                  <IonCol size="6">
                  <a href="https://in.linkedin.com/in/jaganc" >
                  <IonIcon icon={logoLinkedin} className="smallLogo"></IonIcon>
                  </a>
                  </IonCol>
                  <IonCol size="6">
                  <a href="https://github.com/JaganC" >
                  <IonIcon icon={logoGithub} className="smallLogo"></IonIcon>
                  </a>
                  </IonCol>
                 <IonCol size="6">
                 <a href="mailto:mail2devcj@gmail.com" > 
                 <IonIcon icon={mailOutline} className="smallLogo"></IonIcon>
                 </a> 
                 </IonCol>

                  
              </IonCardContent>
            </IonCard>
            </IonCol>
        </IonRow>
        </IonGrid>
        </IonContent>
        </>
    );
  };
  
  export default About;
  