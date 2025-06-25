import { Plus } from "lucide-react";
import { Button } from "../../../shared/components/button";
import { useState } from "react";
import { ModalLayout } from "../../../shared/components/modal/modal-layout";
import { ModalContent } from "../../../shared/components/modal/modal-content";
import { Paragraph } from "../../../shared/components/tickets/paragraph";
import { CardBox } from "../../../shared/components/tickets/card-box";
import { Input } from "../../../shared/components/input";

export function Service() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex pt-14 justify-between">
        <p className="text-blue-dark font-semibold text-xl">Serviços</p>
        <Button
          size={"md"}
          className="flex items-center justify-center gap-2"
          onClick={() => setOpen(true)}
        >
          <Plus />
          <span className="hidden md:table-cell">Novo</span>
        </Button>

        <ModalLayout
          modalTitle="Excluir cliente"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Input legend="TÍTULO" placeholder="Nome do serviço" />
          <Input legend="VALOR" placeholder="Nome do serviço" />
        </ModalLayout>
      </div>
    </>
  );
}
