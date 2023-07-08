import { useState, useEffect } from "react";
import { randomIntFromInterval } from "../../utils/numbers";
import Photo from "../Photo/Photo";

const RandomPhotos = () => {
  // pradinės reikšmės null, nes dar neturime apie tai informacijos
  const [photoId, setPhotoId] = useState(null);
  const [photo, setPhoto] = useState(null);

  const generateRandomPhotoId = () => {
    // naudojama util funkcija kuri sugeneruoja random skaičių
    const photoId = randomIntFromInterval(1, 1500);
    // nustatome random sugeneruotą skaičių kaip photoId, kad galėtume ištraukti nuotrauką
    setPhotoId(photoId);
  };

  useEffect(() => {
    // kadangi pradinė reikšmė null, turime patikrinti, kad nesiųstume į serverį null reikšmės
    if (photoId !== null) {
      // išsitraukiam photo su sugeneruotu random id
      fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then((resp) => resp.json())
        .then((response) => {
          // nustato photo state grįštančiu response
          setPhoto(response);
        })
        .catch((error) => console.error(error));
    }
    // photoId priklausomybių masyve, nes React taip atpažįsta pakitimą ir ištraukia iš naujo duomenis
  }, [photoId]);

  return (
    <div>
      <button onClick={generateRandomPhotoId}>
        {/* tikrinam textą pagal photoId, jei yra arba ne */}
        {photoId === null
          ? "Generate our first photo"
          : "Generate next random photo"}
      </button>
      <br />
      <br />
      {/* patikrinam ar photo egzistuoja ir tik tada jį atvaizduojam */}
      {photo && <Photo url={photo.url} title={photo.title} />}
    </div>
  );
};

export default RandomPhotos;