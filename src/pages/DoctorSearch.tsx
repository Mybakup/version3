import React, { useState } from 'react';
import { MapPin, Mic, ArrowLeft, Star, Navigation2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';
import { mockDoctors } from '../data/mockDoctors';
import type { Doctor } from '../types';
import DoctorProfile from '../components/DoctorProfile';

export default function DoctorSearch() {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [address, setAddress] = useState('');
  const [geoError, setGeoError] = useState<string | null>(null);
  const { startListening, stopListening, isSupported } = useVoiceRecognition({
    onResult: (text) => {
      console.log('Voice result:', text);
    },
  });

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleGeolocation = () => {
    setGeoError(null);
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            // Use Nominatim OpenStreetMap for reverse geocoding
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            if (data.display_name) {
              setAddress(data.display_name);
            }
          } catch (error) {
            setGeoError('Failed to get address from coordinates');
          }
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setGeoError('Please allow location access to use this feature');
              break;
            case error.POSITION_UNAVAILABLE:
              setGeoError('Location information is unavailable');
              break;
            case error.TIMEOUT:
              setGeoError('Location request timed out');
              break;
            default:
              setGeoError('An unknown error occurred');
          }
        },
        { 
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      setGeoError('Geolocation is not supported by your browser');
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Map Container */}
      <div className="flex-1 relative">
        <img 
          src="https://raw.githubusercontent.com/StackBlitz/stackblitz-examples/main/paris-map-minimal.png"
          alt="Paris Map"
          className="w-full h-full object-cover"
        />

        {/* Search Filters */}
        <div className="absolute top-0 left-0 right-0 p-4">
          <div className="max-w-xl mx-auto space-y-2">
            <div className="flex w-full">
              <div className="flex-1 bg-white border border-gray-200 rounded-xl overflow-hidden flex">
                <div className="flex-1 relative border-r border-gray-200">
                  <select className="w-full h-12 pl-4 pr-10 bg-transparent text-mybakup-blue focus:outline-none appearance-none">
                    <option value="">Spécialité médicale</option>
                    <option>Généraliste</option>
                    <option>Dentiste</option>
                    <option>Pédiatre</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <select className="w-full h-12 pl-4 pr-10 bg-transparent text-mybakup-blue focus:outline-none appearance-none">
                    <option value="">Langues</option>
                    <option>Français</option>
                    <option>English</option>
                    <option>Español</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Adresse"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full h-12 pl-10 pr-24 bg-white border border-gray-200 rounded-xl text-mybakup-blue focus:outline-none focus:border-mybakup-coral"
                />
                <MapPin className="absolute left-3 w-5 h-5 text-gray-400" />
                <div className="absolute right-3 flex items-center space-x-2">
                  <button
                    onClick={handleGeolocation}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-all"
                    title="Use current location"
                  >
                    <Navigation2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (isListening) {
                        stopListening();
                      } else {
                        startListening();
                      }
                      setIsListening(!isListening);
                    }}
                    disabled={!isSupported}
                    className={`p-2 rounded-full transition-all ${
                      isListening 
                        ? 'bg-mybakup-coral text-white' 
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                    title={isListening ? 'Stop listening' : 'Start voice input'}
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {geoError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-2 flex items-center text-sm text-red-600">
                  <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{geoError}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div className="bg-white rounded-t-[2rem] shadow-lg transform translate-y-0 transition-transform duration-300">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto my-3" />
        <div className="px-4 pb-4">
          <div className="flex items-center mb-4">
            <button 
              onClick={() => navigate('/')} 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold ml-2">Nearby Doctors</h2>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
            {mockDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className={`flex-shrink-0 w-72 bg-white rounded-xl shadow-sm overflow-hidden transition-all ${
                  selectedDoctor?.id === doctor.id 
                    ? 'border-2 border-mybakup-coral shadow-md' 
                    : 'border border-gray-100 hover:border-mybakup-coral'
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center">
                    <img
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-mybakup-coral fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{doctor.rating}</span>
                        </div>
                        <span className="text-xs font-medium text-mybakup-coral">{doctor.distance}</span>
                      </div>
                      <h3 className="font-semibold text-mybakup-blue mt-1">{doctor.name}</h3>
                      <p className="text-sm text-gray-600">{doctor.specialty}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-mybakup-coral font-medium">€{doctor.consultationPrice}</span>
                      <span className="text-xs text-gray-500 ml-1">/ visit</span>
                    </div>
                    <button 
                      onClick={() => setSelectedDoctor(doctor)}
                      className="px-4 py-2 bg-mybakup-coral text-white text-sm rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <DoctorProfile 
          doctor={selectedDoctor} 
          onClose={() => setSelectedDoctor(null)} 
        />
      )}
    </div>
  );
}