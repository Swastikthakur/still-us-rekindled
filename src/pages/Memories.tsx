import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
const Memories = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const memories = [
    {
      image: "/lovable-uploads/20c82d0b-835a-46eb-80f5-0c4e042cb988.png",
      caption: "You stole my cup of coffee"
    },
    {
      image: "/lovable-uploads/e3487ea7-1923-4891-b857-1374f67fa266.png", 
      caption: "Our first pic"
    },
    {
      image: "/lovable-uploads/8e967121-ba20-4c74-98b0-a1623a208080.png",
      caption: "Our happy times"
    },
    {
      image: "/lovable-uploads/3095d9b5-6afc-4973-a681-3effa6392d6b.png",
      caption: "Our naughty times hehe"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="min-h-screen bg-gradient-sunset relative overflow-hidden">
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <Heart 
            key={i}
            className="floating-heart text-xl text-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-romantic text-5xl md:text-7xl text-gradient mb-4">
            Our Beautiful Memories
          </h1>
          <p className="text-xl font-body text-foreground/70">
            Every picture tells our story
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-romantic p-8 text-center">
            <div className="relative">
              {/* Memory Image */}
              <div className="w-full h-80 md:h-96 rounded-xl mb-6 overflow-hidden relative flex items-center justify-center">
                <img
                  src={memories[currentSlide].image}
                  alt={`Memory ${currentSlide + 1}`}
                  className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300 w-full h-full"
                  onClick={() => setIsImageModalOpen(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 rounded-full p-3 transition-all duration-300"
              >
                <ChevronLeft className="text-primary" size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 rounded-full p-3 transition-all duration-300"
              >
                <ChevronRight className="text-primary" size={24} />
              </button>
            </div>


            {/* Caption */}
            <p className="font-romantic text-2xl md:text-3xl text-gradient mb-8 min-h-[4rem] flex items-center justify-center px-4">
              "{memories[currentSlide].caption}"
            </p>

            {/* Thumbnails */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              {memories.map((memory, idx) => (
                <img
                  key={memory.image}
                  src={memory.image}
                  alt={`Memory ${idx + 1}`}
                  className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer transition-transform duration-200 ${idx === currentSlide ? 'border-primary scale-110' : 'border-transparent hover:scale-105'}`}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setIsImageModalOpen(true);
                  }}
                />
              ))}
            </div>

            <Button 
              onClick={() => navigate('/timeline')}
              className="btn-romantic"
            >
              Continue to Our Story
              <Heart className="ml-2" size={18} />
            </Button>
          </Card>
        </div>
      </div>

      {/* Full Size Image Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-7xl max-h-[90vh] p-0 bg-black/90 border-none cursor-zoom-out">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={memories[currentSlide].image}
              alt={`Memory ${currentSlide + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Memories;