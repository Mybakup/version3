import React, { useState } from 'react';
import { 
  Globe2, Phone, Clock, MapPin, CreditCard, 
  GraduationCap, Stethoscope, Shield, X,
  ChevronLeft, ChevronRight, ArrowLeft
} from 'lucide-react';
import type { Doctor } from '../types';

interface DoctorProfileProps {
  doctor: Doctor;
  onClose: () => void;
}

function ImageGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={images[currentIndex]}
          alt={`Office view ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-mybakup-coral' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function DoctorProfile({ doctor, onClose }: DoctorProfileProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative h-48 bg-gradient-to-r from-mybakup-blue to-mybakup-coral">
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            <span>Back</span>
          </button>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute -bottom-16 left-8 flex items-end">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-32 h-32 rounded-xl border-4 border-white shadow-lg object-cover"
            />
            <div className="ml-6 mb-4 text-white">
              <h1 className="text-3xl font-bold">{doctor.name}</h1>
              <p className="text-white/90">{doctor.specialty}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-20 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard icon={MapPin} label="Distance" value={doctor.distance} />
              <InfoCard icon={Phone} label="Phone" value={doctor.phone} />
              <InfoCard 
                icon={CreditCard} 
                label="Consultation" 
                value={`€${doctor.consultationPrice}`} 
              />
              <InfoCard 
                icon={Globe2} 
                label="Languages" 
                value={doctor.languages.join(', ')} 
              />
            </div>

            {/* Office Pictures */}
            {doctor.officePictures && doctor.officePictures.length > 0 && (
              <Section title="Practice Location" icon={MapPin}>
                <ImageGallery images={doctor.officePictures} />
              </Section>
            )}

            {/* Qualifications */}
            <Section title="Education & Qualifications" icon={GraduationCap}>
              <ul className="space-y-2">
                {doctor.education.map((edu, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-mybakup-coral mr-2" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Medical Acts & Prices */}
            <Section title="Medical Acts & Prices" icon={Stethoscope}>
              <div className="bg-gray-50 rounded-lg p-4">
                {doctor.medicalActs.map((act, i) => (
                  <div 
                    key={i}
                    className="flex justify-between py-2 border-b last:border-0"
                  >
                    <span>{act.name}</span>
                    <span className="font-semibold text-mybakup-coral">€{act.price}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Insurance & Payment */}
            <Section title="Insurance & Payment Methods" icon={Shield}>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Accepted Insurance</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.insurance.map((ins, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-mybakup-blue/10 text-mybakup-blue rounded-full text-sm"
                      >
                        {ins}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Payment Methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.paymentMethods.map((method, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Opening Hours */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-mybakup-coral mr-2" />
                <h3 className="font-semibold text-mybakup-blue">Opening Hours</h3>
              </div>
              <div className="space-y-2">
                {doctor.openingHours.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-gray-600">{day}</span>
                    <span className="font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Appointment */}
            <div className="bg-mybakup-blue/5 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-mybakup-blue">Book an Appointment</h3>
              <button className="w-full btn btn-primary mb-3">
                Book Online
              </button>
              <p className="text-sm text-gray-600 text-center">
                or call {doctor.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center text-mybakup-blue mb-1">
        <Icon className="w-4 h-4 mr-2" />
        <span className="text-sm">{label}</span>
      </div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function Section({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center mb-4">
        <Icon className="w-5 h-5 text-mybakup-coral mr-2" />
        <h3 className="font-semibold text-mybakup-blue">{title}</h3>
      </div>
      {children}
    </section>
  );
}