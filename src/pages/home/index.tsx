import { Intro } from "@/components/intro"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Coordinates {
  latitude: number;
  longitude: number;
}

export const Home = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  console.log("🚀 ~ Home ~ coordinates:", coordinates)
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setCoordinates({ latitude, longitude });
  //       },
  //       () => {
  //         setError("Permissão negada para acessar a localização.");
  //         toast.error(error)
  //       }
  //     );
  //   } else {
  //     setError("Geolocalização não é suportada pelo navegador.");
  //     toast.error(error)
  //   }
  // }, []);
  return <Intro />
}
