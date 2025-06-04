import { ArrowLeft, Clock2, CircleCheckBig, CircleHelp } from "lucide-react";

export function Detail() {
  return (
    <>
      <div className="flex justify-between items-center pt-14">
        <div className="flex flex-col">
          <p className="text-gray-300 font-semibold gap-2 flex items-center">
            <ArrowLeft /> Voltar
          </p>
          <p className="text-blue-dark font-semibold text-xl">Chamados</p>
        </div>
        <div className="font-semibold text-gray-200 flex gap-2">
          <div className="p-4 flex gap-2 bg-gray-500  rounded-md">
            <Clock2 /> Em atendimento
          </div>
          <div className="p-4 flex gap-2 bg-gray-500 rounded-md">
            <CircleCheckBig /> Encerrado
          </div>
        </div>
      </div>

      <div className="border border-gray-500 rounded-md">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-xs text-gray-300">00004</p>
            <p className="font-semibold text-gray-200 text-md">
              Backup não está funcionando{" "}
            </p>
          </div>
          <div className="">
            <p className="flex gap-2 ">
              <CircleHelp /> Aberto
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
