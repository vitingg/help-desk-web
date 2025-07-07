import { HeaderAction } from "../../../shared/components/header-action";
import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { Outlet } from "react-router";
import { useState } from "react";

const controlTime = {
  manhã: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
  tarde: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  noite: ["19:00", "20:00", "21:00", "22:00", "23:00"],
};

export function TechniciansProfile() {
  const [selectedHour, setSelectedHour] = useState<string[]>([]);

  return (
    <div className="flex justify-center">
      <div className="pl-6 pr-6">
        <div className="pt-14 md:flex items-center justify-between">
          <HeaderAction title="Perfil do técnico" />
          <div className="gap-2 flex">
            <Button variant={"secondary"} className="font-bold w-1/2">
              Cancelar
            </Button>
            <Button size={"md"} className="font-bold w-1/2">
              Salvar
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 pt-6">
          <div className="border border-gray-500 p-4 rounded-lg">
            <p className="font-bold">Dados pessoais</p>
            <p className="text-gray-300 text-xs pr-4">
              Defina as informações do perfil de técnico
            </p>
            <Outlet />
          </div>
          <div className="border border-gray-500 p-4 rounded-lg">
            <p className="font-bold">Horários de atendimento</p>
            <p className="text-gray-300">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </p>

            <div>
              {Object.entries(controlTime).map(([period, hour]) => (
                <div key={period}>
                  <p className="text-gray-300 text-xs font-bold pt-5 pb-2 uppercase">
                    {period}
                  </p>
                  <div className={`flex font-bold gap-2 text-sm`}>
                    {hour.map((hour) => (
                      <p
                        className={`border border-gray-300 py-1.5 px-3 rounded-2xl cursor-pointer`}
                        key={hour}
                      >
                        {hour}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Form() {
  return (
    <div className="pt-6 space-y-4">
      <Input legend="Nome" placeholder="Nome completo" />
      <Input legend="E-mail" placeholder="exemplo@mail.com" />
      <Input
        legend="Senha"
        placeholder="Defina a senha de acesso"
        helperText="Mínimo de 6 dígitos"
      />
    </div>
  );
}

export function Profile() {
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
