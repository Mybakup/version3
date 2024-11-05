import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, MapPin, Globe2, Star } from 'lucide-react';
import AuthModal from '../components/AuthModal';
import QuickActions from '../components/QuickActions';

export default function Home() {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const userName = 'Traveler'; // This would come from auth context in a real app

  const handleQuickAction = (command: string) => {
    switch (command) {
      case 'health-info':
        // Handle health info action
        break;
      case 'emergency':
        // Handle emergency numbers action
        break;
      case 'book':
        // Handle book appointment action
        break;
      case 'pharmacy':
        // Handle pharmacy search action
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src="https://i.imgur.com/jxMQcJi.png" 
            alt="MyBakup" 
            className="h-8"
          />
          <button 
            onClick={() => setIsAuthModalOpen(true)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Search className="w-5 h-5 text-mybakup-blue" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-mybakup-blue mb-2">
            Hey, {userName} 👋
          </h1>
          <p className="text-gray-500">
            Welcome to MyBakup.
          </p>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-mybakup-blue mb-6">Quick Actions</h2>
          <QuickActions onSelect={handleQuickAction} />
        </section>

        {/* Healthcare Journey */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-mybakup-blue">Your Healthcare Journey</h2>
            <span className="text-mybakup-coral">1/3</span>
          </div>
          <p className="text-gray-500 mb-6">
            Complete these steps to find the perfect healthcare provider.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/search')}
              className="p-6 rounded-2xl bg-mybakup-coral bg-opacity-5 hover:bg-opacity-10 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-full bg-mybakup-coral bg-opacity-10">
                  <MapPin className="w-6 h-6 text-mybakup-coral" />
                </div>
                <ArrowRight className="w-5 h-5 text-mybakup-coral transform group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-mybakup-blue mb-2">Find a Doctor</h3>
              <p className="text-gray-500">Locate healthcare providers near you who speak your language</p>
            </button>

            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-full bg-gray-200">
                  <Globe2 className="w-6 h-6 text-gray-600" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 transform group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Language Preferences</h3>
              <p className="text-gray-500">Tell us which languages you speak</p>
            </button>
          </div>
        </section>

        {/* Recent Searches */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-mybakup-blue mb-6">Recent Searches</h2>
          <div className="space-y-4">
            {[
              {
                type: 'General Practitioner',
                location: 'Paris 6e',
                languages: ['English', 'French'],
                rating: 4.8
              },
              {
                type: 'Dentist',
                location: 'Paris 11e',
                languages: ['Spanish', 'French'],
                rating: 4.6
              }
            ].map((search, index) => (
              <button 
                key={index}
                onClick={() => navigate('/search')}
                className="w-full p-4 rounded-xl border border-gray-100 hover:border-mybakup-coral transition-colors flex items-center justify-between group"
              >
                <div>
                  <h3 className="font-medium text-mybakup-blue mb-1">{search.type}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{search.location}</span>
                    <span>{search.languages.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-mybakup-coral fill-current" />
                    <span className="ml-1 text-gray-600">{search.rating}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-mybakup-coral transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {}}
      />
    </div>
  );
}