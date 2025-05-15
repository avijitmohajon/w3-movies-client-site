import { useState } from 'react';
import { FaTicketAlt, FaStar, FaPercent } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsLoading(false);
    setEmail('');
    setAgreed(false);
  };

  if (submitted) {
    return (
      <div className="bg-gray-900 text-white p-8 rounded-lg max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Thank You!</h2>
        <p className="text-xl mb-6">You've successfully subscribed to our movie newsletter.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Subscribe Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-yellow-400">Movie</span> Updates & News
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to get exclusive movie recommendations, early ticket access, and special 
              offers straight to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-3 rounded-lg font-bold transition-colors ${
                    isLoading 
                      ? 'bg-yellow-600 cursor-not-allowed' 
                      : 'bg-yellow-500 hover:bg-yellow-600'
                  } text-black`}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  required
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-300">
                  I agree to the <a href="/privacy" className="text-yellow-400 hover:underline">Privacy Policy</a>
                </label>
              </div>
            </form>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <FaTicketAlt className="text-yellow-400 text-xl" />
                <span>Early ticket access</span>
              </div>
              <div className="flex items-center gap-3">
                <FaStar className="text-yellow-400 text-xl" />
                <span>Exclusive content</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPercent className="text-yellow-400 text-xl" />
                <span>Special discounts</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" 
                alt="Movie theater" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white">Join 100,000+ Movie Fans</h3>
                <p className="text-gray-300">Get the latest updates on upcoming releases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;