import { ArrowLeft} from "lucide-react";

type HeaderActionProps = {
  title: string
}

export function HeaderAction({title}: HeaderActionProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col pb-3 md:pb-0">
        <p className="text-gray-300 font-semibold gap-2 flex items-center">
          <ArrowLeft /> Voltar
        </p>
        <p className="text-blue-dark font-semibold text-xl">{title}</p>
      </div>
    </div>
  );
}
