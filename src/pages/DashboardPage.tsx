import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, FileEdit, ClipboardList, Syringe, ScrollText, Calendar } from 'lucide-react';

interface DocumentTypeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

const DocumentType: React.FC<DocumentTypeProps> = ({ title, description, icon, color, onClick }) => (
  <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={onClick}>
    <CardHeader>
      <div className={`rounded-full w-12 h-12 flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button variant="outline" className="w-full">Selecionar</Button>
    </CardFooter>
  </Card>
);

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleDocumentSelect = (type: string) => {
    navigate(`/documents?type=${type}`);
  };

  const documentTypes = [
    {
      title: "Vacinas",
      description: "Registre vacinas aplicadas",
      icon: <Syringe className="text-white h-6 w-6" />,
      color: "bg-green-500",
      type: "vaccines"
    },
    {
      title: "Laudos Médicos",
      description: "Adicione laudos e diagnósticos",
      icon: <ScrollText className="text-white h-6 w-6" />,
      color: "bg-blue-500",
      type: "reports"
    },
    {
      title: "Prescrições",
      description: "Registre receitas médicas",
      icon: <FileEdit className="text-white h-6 w-6" />,
      color: "bg-purple-500",
      type: "prescriptions"
    },
    {
      title: "Orientações",
      description: "Adicione recomendações médicas",
      icon: <ClipboardList className="text-white h-6 w-6" />,
      color: "bg-amber-500",
      type: "guidelines"
    },
    {
      title: "Requisições",
      description: "Solicitações para exames",
      icon: <FileText className="text-white h-6 w-6" />,
      color: "bg-red-500",
      type: "requests"
    },
    {
      title: "Consultas",
      description: "Histórico de consultas",
      icon: <Calendar className="text-white h-6 w-6" />,
      color: "bg-cyan-500",
      type: "appointments"
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Olá, bem-vindo!</h1>
        <p className="text-gray-600">Selecione o tipo de documento que deseja adicionar:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentTypes.map((doc) => (
          <DocumentType
            key={doc.type}
            title={doc.title}
            description={doc.description}
            icon={doc.icon}
            color={doc.color}
            onClick={() => handleDocumentSelect(doc.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
