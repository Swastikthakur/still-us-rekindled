import { useState, useEffect } from 'react';
import { Heart, Music, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Proposal = () => {
  const navigate = useNavigate();
  const [currentLine, setCurrentLine] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showYesButton, setShowYesButton] = useState(false);
  const [heartsMerged, setHeartsMerged] = useState(false);

  const proposalLines = [
    "I know we're not 'us' the way we were before...",
    "But some things don't need a title to be real.",
    "We still talk. We still care. We still love.",
    "So this is me asking, not for a label...",
    "But for a fresh start. A soft one. A real one.",
    "Can we be us again, whatever that means, in whatever form?"
  ];

  useEffect(() => {
    if (currentLine < proposalLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      const buttonTimer = setTimeout(() => {
        setShowYesButton(true);
      }, 2000);
      return () => clearTimeout(buttonTimer);
    }
  }, [currentLine]);

  const handleYesClick = () => {
    setHeartsMerged(true);
    setTimeout(() => {
      setShowFinalMessage(true);
    }, 2000);
  };

  if (showFinalMessage) {
    return (
      <div className="min-h-screen bg-gradient-love relative overflow-hidden flex items-center justify-center">
        {/* Celebration Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <Heart 
              key={i}
              className="heart-particle text-primary-foreground animate-pulse-heart"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '-20px',
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${15 + Math.random() * 20}px`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <Card className="max-w-4xl mx-auto bg-primary-foreground/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <div className="space-y-8">
              <p className="font-romantic text-4xl md:text-5xl text-gradient mb-8">
                "Forever doesn't have to start perfectly."
              </p>
              <p className="font-romantic text-4xl md:text-5xl text-gradient mb-8">
                "It just has to start again."
              </p>
              
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 px-8 py-3 rounded-full mb-8"
              >
                <ArrowLeft className="mr-2" size={20} />
                Home
              </Button>
              
              <div className="my-12">
                <div className="flex justify-center mb-8">
                  <Heart className="text-8xl text-primary animate-pulse-heart" />
                </div>
              </div>

              <div className="bg-gradient-romantic p-8 rounded-2xl">
                <p className="font-romantic text-3xl md:text-4xl text-primary-foreground mb-4">
                  Happy 2 Years, Aastha
                </p>
                <p className="font-body text-xl text-primary-foreground/90 leading-relaxed">
                  You're still my favorite chapter — and I'd love to start a new one, together.
                </p>
              </div>

              <div className="text-center pt-8">
                <p className="font-body text-lg text-foreground/70 italic">
                  With all my love, always ❤️
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-romantic relative overflow-hidden flex items-center justify-center">

      {/* Heart Animation Area */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {!heartsMerged ? (
          <>
            <Heart 
              className="text-6xl text-primary-foreground animate-pulse-heart absolute"
              style={{ 
                transform: 'translateX(-100px)',
                transition: 'all 2s ease-in-out'
              }}
            />
            <Heart 
              className="text-6xl text-primary-foreground animate-pulse-heart absolute"
              style={{ 
                transform: 'translateX(100px)',
                transition: 'all 2s ease-in-out'
              }}
            />
          </>
        ) : (
          <Heart 
            className="text-8xl text-primary-foreground animate-pulse-heart"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.8))'
            }}
          />
        )}
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <Heart 
            key={i}
            className="floating-heart text-xl text-primary-foreground/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Proposal Lines */}
          <div className="space-y-12 mb-16 mt-32">
            {proposalLines.map((line, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index <= currentLine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {index <= currentLine && (
                  <p className="font-romantic text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-relaxed">
                    "{line}"
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Yes Button */}
          {showYesButton && !heartsMerged && (
            <div className="fade-in-up delay-500">
              <Button 
                onClick={handleYesClick}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-12 py-4 text-xl font-romantic rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110"
              >
                If your heart says yes, click me
                <Heart className="ml-3 animate-pulse-heart" size={24} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proposal;