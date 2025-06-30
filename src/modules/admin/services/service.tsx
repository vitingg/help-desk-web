import { Plus } from "lucide-react";
import { Button } from "../../../shared/components/button";
import { useState } from "react";
import { Input } from "../../../shared/components/input";

import { ModalLayout } from "../../../shared/components/modal/modal-layout";
import { ModalHeader } from "../../../shared/components/modal/modal-header";
import { ModalContent } from "../../../shared/components/modal/modal-content";
import { ModalFooter } from "../../../shared/components/modal/modal-footer";

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

        <ModalLayout open={open} onClose={() => setOpen(false)}>
          <ModalHeader> Cadastro de serviço</ModalHeader>
          <ModalContent>
            <Input
              legend="TÍTULO"
              placeholder="Nome do serviço"
              className="font-bold"
            />

            <div className="relative">
              <p className="absolute top-4 font-bold">R$</p>
              <Input
                legend="VALOR"
                placeholder="0,00"
                className="pl-6 font-bold"
              />
            </div>
          </ModalContent>
          <ModalFooter>Salvar</ModalFooter>
        </ModalLayout>
      </div>
    </>
  );
}
