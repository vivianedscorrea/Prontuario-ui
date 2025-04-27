
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface PersonalInfoFormProps {
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
  handlePersonalInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPersonalInfo: (prev: any) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  personalInfo,
  handlePersonalInfoChange,
  setPersonalInfo,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dados Pessoais</CardTitle>
        <CardDescription>Informe os dados básicos do paciente</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group md:col-span-2">
            <Label htmlFor="fullName">Nome Completo*</Label>
            <Input 
              id="fullName"
              name="fullName"
              value={personalInfo.fullName}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="birthDate">Data de Nascimento*</Label>
            <Input 
              id="birthDate"
              name="birthDate"
              type="date"
              value={personalInfo.birthDate}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>
          
          <div className="form-group">
            <Label>Sexo*</Label>
            <RadioGroup 
              name="gender" 
              value={personalInfo.gender} 
              onValueChange={(value) => setPersonalInfo(prev => ({ ...prev, gender: value }))}
              className="flex space-x-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Masculino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Feminino</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="form-group">
            <Label htmlFor="phone">Telefone*</Label>
            <Input 
              id="phone"
              name="phone"
              value={personalInfo.phone}
              onChange={handlePersonalInfoChange}
              placeholder="(00) 00000-0000"
              required
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="email">Email*</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={personalInfo.email}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="zipCode">CEP*</Label>
            <Input 
              id="zipCode"
              name="zipCode"
              value={personalInfo.zipCode}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>
          
          <div className="form-group md:col-span-2">
            <Label htmlFor="address">Endereço*</Label>
            <Input 
              id="address"
              name="address"
              value={personalInfo.address}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="city">Cidade*</Label>
            <Input 
              id="city"
              name="city"
              value={personalInfo.city}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="state">Estado*</Label>
            <Input 
              id="state"
              name="state"
              value={personalInfo.state}
              onChange={handlePersonalInfoChange}
              required
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
