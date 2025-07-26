import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const fadeTexts = [
    "Two years of memories",
    "Two years of growing", 
    "Two years of not letting go",
    "Still... us."
  ];

  useEffect(() => {
    if (currentTextIndex < fadeTexts.length) {
      const timer = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 1000);
      return () => clearTimeout(buttonTimer);
    }
  }, [currentTextIndex]);

  // Generate floating hearts
  const floatingHearts = Array.from({ length: 8 }, (_, i) => (
    <Heart 
      key={i}
      className={`floating-heart text-2xl`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        color: `hsl(${340 + Math.random() * 40} ${60 + Math.random() * 20}% ${50 + Math.random() * 30}%)`
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden flex items-center justify-center">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-6">
        <h1 className="font-romantic text-6xl md:text-8xl text-gradient mb-12">
          It's Been 2 Years...
        </h1>

        <div className="space-y-8 mb-16">
          {fadeTexts.map((text, index) => (
            <p
              key={index}
              className={`text-2xl md:text-3xl font-body font-light text-foreground/80 fade-in-up ${
                index === 3 ? 'font-romantic text-4xl md:text-5xl text-gradient font-semibold' : ''
              }`}
              style={{
                opacity: index <= currentTextIndex ? 1 : 0,
                animationDelay: `${index * 0.5}s`
              }}
            >
              {text}
            </p>
          ))}
        </div>

        {showButton && (
          <div className="fade-in-up delay-500">
            <Button 
              onClick={() => navigate('/memories')}
              className="btn-romantic text-xl px-12 py-4 font-body"
            >
              Begin Our Journey
              <Heart className="ml-2 animate-pulse-heart" size={20} />
            </Button>
          </div>
        )}
      </div>

      {/* Subtle particle hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <Heart 
            key={`particle-${i}`}
            className="heart-particle text-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${8 + Math.random() * 8}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;