import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Timeline = () => {
  const navigate = useNavigate();

  const timelineEvents = [
    {
      title: "When we first met",
      description: "I kissed you in the Lips in the lift, and carried your heels",
      date: "The Beginning"
    },
    {
      title: "Our first deep talk", 
      description: "I told you about my past, you listened, you understood my insecurities",
      date: "Connection"
    },
    {
      title: "The day you calmed me down really well and made me feel safe",
      description: "When my dad got to know I took 6k from my account and he was so mad at me while we were in university, you calmed me down so well that day <3",
      date: "Comfort"
    },
    {
      title: "The day we broke up",
      description: "The hardest goodbye, when i ruiend everything we had by lying to you and being so selfish about myself",
      date: "Separation"
    },
    {
      title: "The day we still didn't stop loving",
      description: "Even after the breakup, we still cared for each other, you were always there for me",
      date: "Realization"
    },
    {
      title: "Today: Still texting, still caring",
      description: "Even after everything, we still find ways to connect and support each other, Yes we fight I am not the best boyfriend but I make sure that you are doing aright, and made felt loved",
      date: "Present"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-romantic relative overflow-hidden">
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <Heart 
            key={i}
            className="floating-heart text-lg text-primary-foreground/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-romantic text-5xl md:text-7xl text-primary-foreground mb-4">
            Our Journey Together
          </h1>
          <p className="text-xl font-body text-primary-foreground/80">
            Every chapter of our beautiful story
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-foreground/30 rounded-full"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="card-romantic bg-primary-foreground/90 backdrop-blur-sm">
                    <div className="p-6">
                      <div className="text-sm font-body text-primary/70 mb-2">
                        {event.date}
                      </div>
                      <h3 className="font-romantic text-2xl text-primary mb-3">
                        {event.title}
                      </h3>
                      <p className="font-body text-foreground/80 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-primary-foreground rounded-full border-4 border-primary flex items-center justify-center">
                    <Heart className="text-primary" size={12} />
                  </div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Final Message */}
          <div className="text-center mt-16">
            <Card className="card-romantic bg-primary-foreground/95 backdrop-blur-sm">
              <div className="p-8">
                <p className="font-romantic text-3xl md:text-4xl text-gradient mb-8">
                  "The titles changed. But the love? It never did."
                </p>
                
                <Button 
                  onClick={() => navigate('/meaning')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  What You Mean To Me
                  <Heart className="ml-2 animate-pulse-heart" size={18} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;