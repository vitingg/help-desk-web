import { useEffect } from "react";
import { Input } from "../../../../shared/components/input";
import { useOutletContext } from "react-router";
import { getInitials } from "../../../../shared/utils/get-initial-name";

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
      <div className="rounded-full p-2 bg-blue-dark size-12 text-gray-600 text-lg flex items-center justify-center">
        {getInitials("C S")}
      </div>
      <div className="pt-4 space-y-5">
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
