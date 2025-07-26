import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Meaning = () => {
  const navigate = useNavigate();
  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const meaningLines = [
    "You've been my calm in chaos",
    "You're the first name I whisper in victories and in breakdowns", 
    "You're not just someone I loved.",
    "You're someone I still choose in silence."
  ];

  useEffect(() => {
    if (currentLine < meaningLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 2000);
      return () => clearTimeout(buttonTimer);
    }
  }, [currentLine]);

  return (
    <div className="min-h-screen bg-gradient-sunset relative overflow-hidden flex items-center justify-center">
      {/* Heart Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <Heart 
            key={i}
            className="heart-particle text-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${10 + Math.random() * 12}px`
            }}
          />
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <Heart 
            key={`float-${i}`}
            className="floating-heart text-2xl text-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-romantic text-5xl md:text-7xl text-gradient mb-16">
          What You Mean To Me
        </h1>

        {/* Typewriter Effect Lines */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          {meaningLines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                index <= currentLine ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {index <= currentLine && (
                <p 
                  className="font-romantic text-3xl md:text-4xl lg:text-5xl text-gradient leading-relaxed typewriter"
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  "{line}"
                </p>
              )}
            </div>
          ))}
        </div>

        {showButton && (
          <div className="fade-in-up delay-500">
            <Button 
              onClick={() => navigate('/proposal')}
              className="btn-romantic text-xl px-12 py-4"
            >
              My Heart Has Something To Say
              <Heart className="ml-2 animate-pulse-heart" size={20} />
            </Button>
          </div>
        )}

        {/* Decorative Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 3 }, (_, i) => (
            <Heart 
              key={`deco-${i}`}
              className="absolute text-6xl text-primary/10 animate-pulse-heart"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
                animationDelay: `${i * 1.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meaning;