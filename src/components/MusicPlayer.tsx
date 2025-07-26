import { useState, useRef, useEffect } from 'react';
import perfectSong from '@/assets/Ed Sheeran - Perfect.mp3';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Use local Ed Sheeran audio file from assets
  const musicUrl = perfectSong;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  // Play on first click (autoplay restrictions)
  const handlePlayClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!musicUrl) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/30">
          <Music className="text-primary animate-pulse" size={20} />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-primary-foreground/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-primary/20 flex items-center space-x-2">
        <Button
          onClick={togglePlay}
          size="sm"
          variant="ghost"
          className="rounded-full w-8 h-8 p-0 hover:bg-primary/20"
        >
          {isPlaying ? (
            <Pause className="text-primary" size={16} />
          ) : (
            <Play className="text-primary" size={16} />
          )}
        </Button>

        <Button
          onClick={toggleMute}
          size="sm"
          variant="ghost"
          className="rounded-full w-8 h-8 p-0 hover:bg-primary/20"
        >
          {isMuted ? (
            <VolumeX className="text-primary" size={16} />
          ) : (
            <Volume2 className="text-primary" size={16} />
          )}
        </Button>

        <audio
          ref={audioRef}
          src={musicUrl}
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;