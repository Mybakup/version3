import React from 'react';
import { MapPin } from 'lucide-react';
import type { Doctor } from '../types';

interface DoctorMapProps {
  doctors: Doctor[];
  selectedDoctor?: Doctor;
  onDoctorSelect?: (doctor: Doctor) => void;
}

export default function DoctorMap({ doctors, selectedDoctor, onDoctorSelect }: DoctorMapProps) {
  const generatePosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 20;
    const centerX = 50;
    const centerY = 50;
    
    return {
      top: `${centerY + radius * Math.sin(angle)}%`,
      left: `${centerX + radius * Math.cos(angle)}%`
    };
  };

  return (
    <div className="relative w-full h-full bg-gray-100">
      {/* Map background */}
      <div className="absolute inset-0">
        <img 
          src="https://raw.githubusercontent.com/StackBlitz/stackblitz-examples/main/paris-navigation-map.png" 
          alt="Paris Map"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Doctor markers */}
      <div className="absolute inset-0 z-10">
        {doctors.map((doctor, index) => {
          const position = generatePosition(index, doctors.length);
          
          return (
            <button
              key={doctor.id}
              onClick={() => onDoctorSelect?.(doctor)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: position.top,
                left: position.left
              }}
            >
              <div className="relative group">
                <div className={`p-1.5 rounded-full bg-white shadow-md transition-all ${
                  selectedDoctor?.id === doctor.id 
                    ? 'ring-2 ring-mybakup-coral scale-110' 
                    : 'hover:scale-110'
                }`}>
                  <MapPin 
                    className={`w-5 h-5 ${
                      selectedDoctor?.id === doctor.id 
                        ? 'text-mybakup-coral' 
                        : 'text-mybakup-blue'
                    }`} 
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                  <div className="bg-white rounded-lg shadow-lg p-3 text-sm whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <img
                        src={doctor.imageUrl}
                        alt={doctor.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-mybakup-blue">{doctor.name}</p>
                        <p className="text-gray-600 text-xs">{doctor.specialty}</p>
                      </div>
                    </div>
                    <p className="text-mybakup-coral font-medium mt-1">{doctor.distance}</p>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="border-8 border-transparent border-t-white" />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Current location marker */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className="w-4 h-4 bg-mybakup-coral rounded-full border-2 border-white shadow-lg" />
          <div className="absolute -inset-2 bg-mybakup-coral opacity-20 rounded-full animate-ping" />
        </div>
      </div>
    </div>
  );
}