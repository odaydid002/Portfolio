import { useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = "100%",
  height = "auto",
  autoPlay = false,
  loop = false,
  controls = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      src={src}
      width={width}
      height={height}
      autoPlay={autoPlay}
      loop={loop}
      controls={controls}
      className="lg:max-h-[70%]"
    />
  );
};

export default VideoPlayer;