
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserProfile {
  personalInfo: {
    fullName: string;
    birthDate: string;
    gender: string;
    phone: string;
    zipCode: string;
    address: string;
    city: string;
    state: string;
    email: string;
  };
  healthInfo: {
    height: string;
    weight: string;
    bloodType: string;
    surgicalHistory: string;
    heartConditions: boolean;
    hypertension: boolean;
    diabetes: boolean;
    otherConditions: string;
    smoker: string;
    physicalActivity: string;
    currentMedications: string;
  };
}

interface UserProfileContextType {
  userProfile: UserProfile;
  updateUserProfile: (profile: UserProfile) => void;
}

const defaultProfile: UserProfile = {
  personalInfo: {
    fullName: "João da Silva",
    birthDate: "1990-05-15",
    gender: "male",
    phone: "(11) 98765-4321",
    zipCode: "01234-567",
    address: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    email: "joao.silva@gmail.com",
  },
  healthInfo: {
    height: "175",
    weight: "70",
    bloodType: "O+",
    surgicalHistory: "Apendicectomia em 2018",
    heartConditions: false,
    hypertension: true,
    diabetes: false,
    otherConditions: "Rinite alérgica",
    smoker: "no",
    physicalActivity: "moderate",
    currentMedications: "Anti-histamínico",
  },
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

export const UserProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>(defaultProfile);

  const updateUserProfile = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  return (
    <UserProfileContext.Provider value={{ userProfile, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
};

