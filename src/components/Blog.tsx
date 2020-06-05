import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import "./Blog.css";


const Blog: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const loadedData = await getDataFromAPI();
      setData(loadedData);
    }

    loadData();
  }, []);
  const getDataFromAPI = () => {
    return fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jagancsmj")
      .then(res => res.json())
      .then(
        (result) => result.items);
  }
  const items:any[] = (data || []);

  return (
    <>
    <IonContent color="dark">
     { items.map(item => (
        <IonCard key={item.guid} color="secondry">
        <IonCardHeader>
          <IonCardTitle>{item.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardSubtitle className="subTitleText">
         {item.description}
        </IonCardSubtitle>
        </IonCard>
     ))}
  </IonContent>
  </>
  );
}
export default Blog;
