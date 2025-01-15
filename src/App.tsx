import React, { useState } from 'react';
import { puppyQuotes } from './quotes';
import { Sparkles, Brain } from 'lucide-react';

export default function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [quote, setQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * puppyQuotes.length);
    return puppyQuotes[randomIndex];
  };

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setQuote(getRandomQuote());
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }, 1000);
    }
  };

  return (
    <div className={`min-h-screen bg-[#FAFAFA] transition-colors duration-1000 ${isAnimating ? 'bg-[#E8F5E9]' : ''} flex flex-col items-center justify-center p-4 relative overflow-hidden`}>
      {/* Meditation circles */}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${isAnimating ? 'opacity-40' : 'opacity-0'}`}>
        <div className="w-[600px] h-[600px] rounded-full border-2 border-[#4CAF50] animate-ripple-1"></div>
        <div className="w-[500px] h-[500px] rounded-full border-2 border-[#4CAF50] animate-ripple-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-[400px] h-[400px] rounded-full border-2 border-[#4CAF50] animate-ripple-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="text-center relative z-10 w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 bg-[#E8F5E9] p-6 flex flex-col justify-end">
            <div className={`puppy-face transition-transform duration-1000 ${isAnimating ? 'scale-90' : 'scale-100'}`}>
              <div className="relative mx-auto w-48 -mb-4">
                {/* Ears */}
                <div className="absolute -top-8 -left-6 w-12 h-16 bg-[#795548] rounded-t-[2rem] transform -rotate-12"></div>
                <div className="absolute -top-8 -right-6 w-12 h-16 bg-[#795548] rounded-t-[2rem] transform rotate-12"></div>
                {/* Inner Ears */}
                <div className="absolute -top-6 -left-4 w-8 h-12 bg-[#8D6E63] rounded-t-[1.5rem] transform -rotate-12"></div>
                <div className="absolute -top-6 -right-4 w-8 h-12 bg-[#8D6E63] rounded-t-[1.5rem] transform rotate-12"></div>
                {/* Face */}
                <div className="w-48 h-40 bg-[#795548] rounded-2xl">
                  {/* White Face Patch */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-40 h-32 bg-[#D7CCC8] rounded-2xl"></div>
                  {/* Eyes */}
                  <div className={`eyes transition-all duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute top-14 left-12 w-6 h-6 bg-[#3E2723] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                    </div>
                    <div className="absolute top-14 right-12 w-6 h-6 bg-[#3E2723] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                    </div>
                  </div>
                  {/* Nose */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-[#3E2723] rounded-[1rem]"></div>
                  {/* Mouth */}
                  <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 w-16 h-8 border-b-4 border-[#3E2723] rounded-b-full transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-[#4CAF50] flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6" />
              Puppy Wisdom
              <Sparkles className="w-6 h-6" />
            </h1>
            
            <button
              onClick={handleClick}
              disabled={isAnimating}
              className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-lg py-3 px-6 font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Brain className="w-5 h-5" />
              Get Wisdom
            </button>
            
            <div className={`mt-4 transition-all duration-500 ${quote ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
              <p className="text-xl text-[#424242] font-medium">{quote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}