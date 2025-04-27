
import React from 'react';
import { useUserProfile } from '@/contexts/UserProfileContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, MapPin, Calendar, Edit, Weight, Activity } from "lucide-react";

const ProfilePage: React.FC = () => {
  const { userProfile } = useUserProfile();
  const { personalInfo, healthInfo } = userProfile;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Perfil do Paciente</h1>
        <p className="text-gray-600">Informações pessoais e de saúde</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Informações Pessoais
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="font-medium">Nome Completo</Label>
                <p className="text-gray-600">{personalInfo.fullName}</p>
              </div>
              <div>
                <Label className="font-medium">Data de Nascimento</Label>
                <p className="text-gray-600">{personalInfo.birthDate}</p>
              </div>
              <div>
                <Label className="font-medium">Sexo</Label>
                <p className="text-gray-600">{personalInfo.gender === 'male' ? 'Masculino' : 'Feminino'}</p>
              </div>
              <div>
                <Label className="font-medium">Telefone</Label>
                <p className="text-gray-600">{personalInfo.phone}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="font-medium">Endereço</Label>
                <p className="text-gray-600">
                  {personalInfo.address}, {personalInfo.city} - {personalInfo.state}, CEP: {personalInfo.zipCode}
                </p>
              </div>
              <div>
                <Label className="font-medium">Email</Label>
                <p className="text-gray-600">{personalInfo.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Informações de Saúde
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="font-medium">Altura</Label>
                <p className="text-gray-600">{healthInfo.height} cm</p>
              </div>
              <div>
                <Label className="font-medium">Peso</Label>
                <p className="text-gray-600">{healthInfo.weight} kg</p>
              </div>
              <div>
                <Label className="font-medium">Tipo Sanguíneo</Label>
                <p className="text-gray-600">{healthInfo.bloodType}</p>
              </div>
              <div>
                <Label className="font-medium">Histórico de Cirurgias</Label>
                <p className="text-gray-600">{healthInfo.surgicalHistory}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="font-medium">Condições de Saúde</Label>
                <div className="space-y-1 text-gray-600">
                  {healthInfo.heartConditions && <p>- Doenças Cardíacas</p>}
                  {healthInfo.hypertension && <p>- Hipertensão</p>}
                  {healthInfo.diabetes && <p>- Diabetes</p>}
                  {healthInfo.otherConditions && <p>- {healthInfo.otherConditions}</p>}
                </div>
              </div>
              <div>
                <Label className="font-medium">Hábito de Fumo</Label>
                <p className="text-gray-600">
                  {healthInfo.smoker === 'no' ? 'Não fumante' : 
                   healthInfo.smoker === 'yes' ? 'Fumante' : 'Ex-fumante'}
                </p>
              </div>
              <div>
                <Label className="font-medium">Atividade Física</Label>
                <p className="text-gray-600">
                  {healthInfo.physicalActivity === 'sedentary' ? 'Sedentário' :
                   healthInfo.physicalActivity === 'light' ? 'Leve (1-2x/semana)' :
                   healthInfo.physicalActivity === 'moderate' ? 'Moderada (3-5x/semana)' :
                   healthInfo.physicalActivity === 'intense' ? 'Intensa (6-7x/semana)' :
                   'Atleta Profissional'}
                </p>
              </div>
              <div className="md:col-span-2">
                <Label className="font-medium">Medicamentos em Uso</Label>
                <p className="text-gray-600">{healthInfo.currentMedications}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
