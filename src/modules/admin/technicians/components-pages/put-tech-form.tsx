import { useEffect } from "react";
import { Input } from "../../../../shared/components/input";
import { useOutletContext } from "react-router";

type PutTechFormType = {
  selectedHours: string[];
};

export function PutTechForm() {
  const { selectedHours } = useOutletContext<PutTechFormType>();

  useEffect(() => {
    console.log(selectedHours);
  }, [selectedHours]);

  return (
    <div className="pt-6">
      <div className="font-semibold rounded-full bg-blue-dark w-12 h-12 flex justify-center items-center text-gray-600 text-md">
        CS
      </div>
      <div className="pt-4 space-y-4">
        <Input legend="E-mail" placeholder="exemplo@mail.com" />
        <Input
          legend="Senha"
          placeholder="Defina a senha de acesso"
          helperText="Mínimo de 6 dígitos"
        />
      </div>
    </div>
  );
}
