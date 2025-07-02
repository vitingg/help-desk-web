import { HeaderAction } from "../../../shared/components/header-action";
import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { Outlet } from "react-router";

export function TechniciansProfile() {
  return (
    <div className="flex justify-around items-center">
      <div className="pl-6 pr-6 ">
        <div className="pt-14 md:flex items-center justify-between">
          <HeaderAction title="Perfil do técnico" />
          <div className="gap-2 flex">
            <Button variant={"secondary"} className="font-bold">
              Cancelar
            </Button>
            <Button size={"md"} className="font-bold">
              Salvar
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 pt-6">
          <div className="border border-gray-500 p-4 rounded-lg max-w-sm">
            <p className="font-bold">Dados pessoais</p>
            <p className="text-gray-300 text-xs">
              Defina as informações do perfil de técnico
            </p>
            <Outlet />
          </div>
          <div className="border border-gray-500 p-4 rounded-lg max-w-md">
            <p className="font-bold">Horários de atendimento</p>
            <p className="text-gray-300">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </p>

            <div>
              <p className="text-gray-300 text-2xs font-bold pt-5 pb-2">
                MANHÃ
              </p>
              <div className="flex font-bold gap-2 text-sm">
                <p className="border p-2 rounded-2xl">07:00</p>
                <p className="border p-2 rounded-2xl">08:00</p>
                <p className="border p-2 rounded-2xl">09:00</p>
                <p className="border p-2 rounded-2xl">10:00</p>
                <p className="border p-2 rounded-2xl">11:00</p>
                <p className="border p-2 rounded-2xl">12:00</p>
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-2xs font-bold pt-5 pb-2">
                TARDE
              </p>
              <div className="flex font-bold gap-2 text-sm">
                <p className="border p-2 rounded-2xl">13:00</p>
                <p className="border p-2 rounded-2xl">14:00</p>
                <p className="border p-2 rounded-2xl">15:00</p>
                <p className="border p-2 rounded-2xl">16:00</p>
                <p className="border p-2 rounded-2xl">17:00</p>
                <p className="border p-2 rounded-2xl">18:00</p>
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-2xs font-bold pt-5 pb-2">
                NOITE
              </p>
              <div className="flex font-bold gap-2 text-sm">
                <p className="border p-2 rounded-2xl">19:00</p>
                <p className="border p-2 rounded-2xl">20:00</p>
                <p className="border p-2 rounded-2xl">21:00</p>
                <p className="border p-2 rounded-2xl">22:00</p>
                <p className="border p-2 rounded-2xl">23:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Form() {
  return (
    <div className="pt-6 space-y-2">
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
      <div className="pt-4">
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
