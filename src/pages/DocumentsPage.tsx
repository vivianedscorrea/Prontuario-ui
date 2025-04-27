import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Upload, ArrowLeft } from 'lucide-react';

const mockedDocuments = {
  vaccines: [
    { id: 1, name: "Cartão de Vacinas 2024.pdf" },
    { id: 2, name: "Comprovante Vacina Covid.pdf" },
  ],
  reports: [
    { id: 1, name: "Laudo Exame Sangue Jan2024.pdf" },
    { id: 2, name: "Laudo Radiografia Torax.pdf" },
  ],
  prescriptions: [
    { id: 1, name: "Receita Medicamento A.pdf" },
    { id: 2, name: "Receita Medicamento B.pdf" },
  ],
  guidelines: [
    { id: 1, name: "Orientações Pós-Operatório.pdf" },
    { id: 2, name: "Recomendações Nutricionais.pdf" },
  ],
  requests: [
    { id: 1, name: "Pedido Exame Laboratório.pdf" },
    { id: 2, name: "Solicitação Radiografia.pdf" },
  ],
  appointments: [
    { id: 1, name: "Consulta Cardiologia 15-01-2024.pdf" },
    { id: 2, name: "Consulta Clínico Geral 20-02-2024.pdf" },
  ],
};

const documentTitles: { [key: string]: string } = {
  vaccines: "Vacinas",
  reports: "Laudos Médicos",
  prescriptions: "Prescrições",
  guidelines: "Orientações",
  requests: "Requisições",
  appointments: "Consultas",
};

const DocumentsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const documentType = searchParams.get('type') || 'vaccines';
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File selected:', event.target.files?.[0]?.name);
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{documentTitles[documentType]}</h1>
          <p className="text-gray-600">Gerencie seus documentos médicos</p>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Adicionar Documento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="w-full max-w-xs"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              Selecionar Arquivo
            </Button>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Documentos Salvos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {mockedDocuments[documentType as keyof typeof mockedDocuments]?.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md"
              >
                <FileText className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-700">{doc.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentsPage;
