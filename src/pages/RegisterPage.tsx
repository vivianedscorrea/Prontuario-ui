
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import PersonalInfoForm from '@/components/register/PersonalInfoForm';
import HealthInfoForm from '@/components/register/HealthInfoForm';

const RegisterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const documentType = searchParams.get('type') || 'default';
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Personal information state
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    birthDate: '',
    gender: '',
    phone: '',
    zipCode: '',
    address: '',
    city: '',
    state: '',
    email: '',
  });
  
  // Health information state
  const [healthInfo, setHealthInfo] = useState({
    height: '',
    weight: '',
    bloodType: '',
    surgicalHistory: '',
    heartConditions: false,
    hypertension: false,
    diabetes: false,
    otherConditions: '',
    smoker: '',
    physicalActivity: '',
    currentMedications: '',
  });
  
  // Handle personal info changes
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle health info changes
  const handleHealthInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHealthInfo(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle checkbox changes
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setHealthInfo(prev => ({ ...prev, [name]: checked }));
  };
  
  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setHealthInfo(prev => ({ ...prev, [name]: value }));
  };
  
  // Get document type title
  const getDocumentTitle = () => {
    const titles: Record<string, string> = {
      vaccines: "Registro de Vacina",
      reports: "Laudo Médico",
      prescriptions: "Prescrição Médica",
      guidelines: "Orientações Médicas",
      requests: "Requisição para Exame",
      appointments: "Registro de Consulta",
      default: "Novo Documento"
    };
    
    return titles[documentType] || titles.default;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', { personalInfo, healthInfo, documentType });
    
    toast({
      title: "Registro concluído",
      description: "Os dados do paciente foram salvos com sucesso.",
    });
    
    navigate('/dashboard');
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{getDocumentTitle()}</h1>
        <p className="text-gray-600">Preencha os dados do paciente</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="personal">
          <TabsList className="mb-4">
            <TabsTrigger value="personal">Informações Pessoais</TabsTrigger>
            <TabsTrigger value="health">Informações de Saúde</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <PersonalInfoForm
              personalInfo={personalInfo}
              handlePersonalInfoChange={handlePersonalInfoChange}
              setPersonalInfo={setPersonalInfo}
            />
          </TabsContent>
          
          <TabsContent value="health">
            <HealthInfoForm
              healthInfo={healthInfo}
              handleHealthInfoChange={handleHealthInfoChange}
              handleCheckboxChange={handleCheckboxChange}
              handleSelectChange={handleSelectChange}
            />
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/dashboard')}
          >
            Cancelar
          </Button>
          <Button type="submit" className="bg-medical-primary hover:bg-medical-secondary">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
