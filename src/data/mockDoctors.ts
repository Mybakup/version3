import type { Doctor } from '../types';

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    specialty: 'General Practitioner',
    languages: ['English', 'Mandarin', 'French'],
    address: '123 Medical Center, Paris',
    availability: ['Tomorrow at 10:00', 'Thursday at 14:00'],
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    officePictures: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800'
    ],
    qualifications: ['Board Certified', 'Family Medicine', 'Preventive Medicine'],
    distance: '1.2 km',
    phone: '+33 1 23 45 67 89',
    consultationPrice: 60,
    medicalActs: [
      { name: 'General Consultation', price: 60 },
      { name: 'Annual Check-up', price: 120 },
      { name: 'Vaccination', price: 40 },
      { name: 'Blood Test', price: 50 },
      { name: 'ECG', price: 75 }
    ],
    paymentMethods: ['Credit Card', 'Cash', 'Health Insurance Card', 'Apple Pay', 'Google Pay'],
    openingHours: [
      { day: 'Monday', hours: '9:00 - 17:00' },
      { day: 'Tuesday', hours: '9:00 - 17:00' },
      { day: 'Wednesday', hours: '9:00 - 12:00' },
      { day: 'Thursday', hours: '9:00 - 17:00' },
      { day: 'Friday', hours: '9:00 - 16:00' },
      { day: 'Saturday', hours: '10:00 - 12:00' },
      { day: 'Sunday', hours: 'Closed' }
    ],
    education: [
      'MD from Paris Descartes University, 2010',
      'Residency in Family Medicine, Hôpital Saint-Louis, 2013',
      'Fellowship in Primary Care, 2014',
      'Master in Public Health, 2015'
    ],
    experience: [
      '10+ years in Family Medicine',
      'Former Chief Resident at Hôpital Saint-Louis',
      'Research in Preventive Medicine',
      'International Medical Experience in China and UK'
    ],
    insurance: ['CPAM', 'MGEN', 'Harmonie Mutuelle', 'Allianz', 'AXA', 'SwissLife']
  },
  {
    id: '2',
    name: 'Dr. Jean Dupont',
    specialty: 'Dentist',
    languages: ['French', 'English', 'German'],
    address: '45 Avenue Health, Paris',
    availability: ['Today at 16:00', 'Friday at 11:00'],
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
    officePictures: [
      'https://images.unsplash.com/photo-1629909615032-f306a4f92f67?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800'
    ],
    qualifications: [
      'Dental Surgery Specialist',
      'Orthodontics',
      'Implantology',
      'Aesthetic Dentistry'
    ],
    distance: '2.5 km',
    phone: '+33 1 98 76 54 32',
    consultationPrice: 80,
    medicalActs: [
      { name: 'Dental Check-up', price: 80 },
      { name: 'Cleaning', price: 100 },
      { name: 'Filling', price: 120 },
      { name: 'Root Canal', price: 500 },
      { name: 'Crown', price: 800 },
      { name: 'Teeth Whitening', price: 350 }
    ],
    paymentMethods: [
      'Credit Card',
      'Cash',
      'Check',
      'Health Insurance Card',
      'Payment Plan Available'
    ],
    openingHours: [
      { day: 'Monday', hours: '8:30 - 18:00' },
      { day: 'Tuesday', hours: '8:30 - 18:00' },
      { day: 'Wednesday', hours: '8:30 - 18:00' },
      { day: 'Thursday', hours: '8:30 - 18:00' },
      { day: 'Friday', hours: '8:30 - 16:00' },
      { day: 'Saturday', hours: 'By appointment' },
      { day: 'Sunday', hours: 'Closed' }
    ],
    education: [
      'DDS from University of Paris, 2008',
      'Advanced Certificate in Orthodontics, 2010',
      'Implantology Certification, European Institute, 2012',
      'Aesthetic Dentistry Diploma, 2014'
    ],
    experience: [
      '12+ years in Dental Practice',
      'Specialist in Pediatric Dentistry',
      'Former Head of Dental Department, Clinique Saint-Michel',
      'International Training in Switzerland and Germany'
    ],
    insurance: [
      'CPAM',
      'Mutuelle Générale',
      'AXA',
      'SwissLife',
      'Allianz',
      'MAAF Santé'
    ]
  },
  {
    id: '3',
    name: 'Dr. Maria Rodriguez',
    specialty: 'Pediatrician',
    languages: ['Spanish', 'English', 'French', 'Portuguese'],
    address: '78 Rue des Enfants, Paris',
    availability: ['Tomorrow at 9:00', 'Wednesday at 15:00'],
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    officePictures: [
      'https://images.unsplash.com/photo-1631217868624-85d89197f5fc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631217868288-0b8b4eaa3f44?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631217868814-804a1c4178a6?auto=format&fit=crop&q=80&w=800'
    ],
    qualifications: [
      'Board Certified Pediatrician',
      'Child Development Specialist',
      'Neonatal Care Expert',
      'Pediatric Emergency Medicine'
    ],
    distance: '1.8 km',
    phone: '+33 1 34 56 78 90',
    consultationPrice: 70,
    medicalActs: [
      { name: 'Pediatric Consultation', price: 70 },
      { name: 'Vaccination', price: 45 },
      { name: 'Growth Assessment', price: 60 },
      { name: 'Development Check', price: 80 },
      { name: 'Allergy Testing', price: 120 },
      { name: 'Emergency Consultation', price: 90 }
    ],
    paymentMethods: [
      'Credit Card',
      'Cash',
      'Health Insurance Card',
      'Mobile Payment',
      'Bank Transfer'
    ],
    openingHours: [
      { day: 'Monday', hours: '8:00 - 16:00' },
      { day: 'Tuesday', hours: '8:00 - 16:00' },
      { day: 'Wednesday', hours: '8:00 - 16:00' },
      { day: 'Thursday', hours: '8:00 - 16:00' },
      { day: 'Friday', hours: '8:00 - 14:00' },
      { day: 'Saturday', hours: '9:00 - 12:00' },
      { day: 'Sunday', hours: 'Emergency Only' }
    ],
    education: [
      'MD from Universidad de Barcelona, 2009',
      'Pediatric Residency at Necker-Enfants Malades Hospital, 2013',
      'Fellowship in Child Development, 2014',
      'Master in Pediatric Emergency Medicine, 2015'
    ],
    experience: [
      '11+ years in Pediatrics',
      'Former Head of Pediatrics at Clinique des Enfants',
      'Research in Early Childhood Development',
      'Volunteer Work with Médecins Sans Frontières',
      'International Experience in Spain and Brazil'
    ],
    insurance: [
      'CPAM',
      'MGEN',
      'Malakoff Humanis',
      'April',
      'Allianz Santé',
      'Generali'
    ]
  }
];