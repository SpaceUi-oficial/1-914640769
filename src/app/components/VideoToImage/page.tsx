"use client"
import { useRef } from "react";
import Image from "next/image";

interface VideoToImageProps {
  videoSrc: string;
  imageSrc: string;
}

const VideoToImage: React.FC<VideoToImageProps> = ({ videoSrc, imageSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration; // Se asegura de que el video se quede en el último frame
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="max-h-[95vh] w-full"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        controls={false}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Si el navegador no soporta el video, muestra la imagen de respaldo */}
        Tu navegador no soporta la reproducción de este video.
        <Image
          src={imageSrc}
          alt="Imagen de respaldo"
          layout="responsive"
          width={1920}
          height={1080}
          quality={100}
        />
      </video>
    </div>
  );
};

export default VideoToImage;
