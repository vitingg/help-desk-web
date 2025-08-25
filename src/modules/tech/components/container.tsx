import { CircleCheckBig, Clock2 } from "lucide-react";
import { Button } from "../../../shared/components/button";
import { Icon } from "../../../shared/components/edit-icon";



type ContainerProps = {
  navigateTo?: string;
};

export function Container({ navigateTo }: ContainerProps) {
  return (
    <div className="w-full md:w-80 border border-gray-500 rounded-2xl p-5">
      <div className="flex justify-between gap-6">
        <span className="font-bold space-y-0.5">
          <p className="text-gray-400 text-xs">00003</p>
          <p className="text-gray-100 text-sm">Rede lenta</p>
          <p className="text-gray-200 text-xs font-normal">
            Instalação de Rede{" "}
          </p>
        </span>
        <span className="text-gray-600 text-xs flex items-start  gap-2">
          <Button
            size={"4xs"}
            className="flex items-center justify-center"
            variant={"secondary"}
          >
            <Icon variant="edit" to={navigateTo} />
          </Button>
          <Button
            size={"sm"}
            className="flex items-center justify-center gap-2"
          >
            <CircleCheckBig height={14} width={14} />
            Encerrar
          </Button>
        </span>
      </div>
      <span className="text-sm text-gray-200 flex justify-between pt-4">
        <p>10/04/25 15:13</p>
        <p>R$ 200,00</p>
      </span>
      <div className="border-t border-gray-500 my-4" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-blue-dark text-gray-600 text-xs">
            AC
          </div>
          <p className="font-bold text-gray-200">André Costa</p>
        </div>
        <div className="w-6 h-6 flex justify-center items-center rounded-full bg-feedback-progressBackground text-feedback-progress">
          <Clock2 height={16} width={16} />
        </div>
      </div>
    </div>
  );
}
