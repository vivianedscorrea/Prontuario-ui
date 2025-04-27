
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

interface HealthInfoFormProps {
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
  handleHealthInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const HealthInfoForm: React.FC<HealthInfoFormProps> = ({
  healthInfo,
  handleHealthInfoChange,
  handleCheckboxChange,
  handleSelectChange,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações de Saúde</CardTitle>
        <CardDescription>Informe os dados de saúde do paciente</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <Label htmlFor="height">Altura (cm)</Label>
            <Input 
              id="height"
              name="height"
              type="number"
              value={healthInfo.height}
              onChange={handleHealthInfoChange}
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input 
              id="weight"
              name="weight"
              type="number"
              step="0.1"
              value={healthInfo.weight}
              onChange={handleHealthInfoChange}
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="bloodType">Tipo Sanguíneo</Label>
            <Select 
              value={healthInfo.bloodType}
              onValueChange={(value) => handleSelectChange('bloodType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="form-group">
            <Label>Prática de Atividades Físicas</Label>
            <Select 
              value={healthInfo.physicalActivity}
              onValueChange={(value) => handleSelectChange('physicalActivity', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentário</SelectItem>
                <SelectItem value="light">Leve (1-2x/semana)</SelectItem>
                <SelectItem value="moderate">Moderada (3-5x/semana)</SelectItem>
                <SelectItem value="intense">Intensa (6-7x/semana)</SelectItem>
                <SelectItem value="athlete">Atleta Profissional</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="form-group">
            <Label>Fumante</Label>
            <Select 
              value={healthInfo.smoker}
              onValueChange={(value) => handleSelectChange('smoker', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">Não</SelectItem>
                <SelectItem value="yes">Sim</SelectItem>
                <SelectItem value="former">Ex-fumante</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="form-group md:col-span-2">
            <Label htmlFor="surgicalHistory">Histórico de Cirurgias</Label>
            <Textarea 
              id="surgicalHistory"
              name="surgicalHistory"
              value={healthInfo.surgicalHistory}
              onChange={handleHealthInfoChange}
              placeholder="Descreva cirurgias anteriores e datas..."
            />
          </div>
          
          <div className="form-group md:col-span-2">
            <div className="mb-4">
              <Label>Condições Existentes</Label>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="heartConditions" 
                    checked={healthInfo.heartConditions}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('heartConditions', checked as boolean)
                    }
                  />
                  <Label htmlFor="heartConditions">Doenças Cardíacas</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hypertension" 
                    checked={healthInfo.hypertension}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('hypertension', checked as boolean)
                    }
                  />
                  <Label htmlFor="hypertension">Hipertensão</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="diabetes" 
                    checked={healthInfo.diabetes}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('diabetes', checked as boolean)
                    }
                  />
                  <Label htmlFor="diabetes">Diabetes</Label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-group md:col-span-2">
            <Label htmlFor="otherConditions">Outras Comorbidades</Label>
            <Textarea 
              id="otherConditions"
              name="otherConditions"
              value={healthInfo.otherConditions}
              onChange={handleHealthInfoChange}
              placeholder="Descreva outras condições médicas..."
            />
          </div>
          
          <div className="form-group md:col-span-2">
            <Label htmlFor="currentMedications">Uso Atual de Medicamentos</Label>
            <Textarea 
              id="currentMedications"
              name="currentMedications"
              value={healthInfo.currentMedications}
              onChange={handleHealthInfoChange}
              placeholder="Liste todos os medicamentos em uso atual..."
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthInfoForm;
