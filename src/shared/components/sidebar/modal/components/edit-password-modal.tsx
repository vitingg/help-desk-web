import { ModalContent } from "../../../modal/modal-content";
import { ModalHeader } from "../../../modal/modal-header";
import { ModalLayout } from "../../../modal/modal-layout";
import { Input } from "../../../input";
import { Button } from "../../../button";
import { ModalFooter } from "../../../modal/modal-footer";
import { Form } from "../../../form";

export function EditPasswordModal() {
  return (
    <ModalLayout>
      <ModalHeader>Alterar Senha</ModalHeader>

      <Form>
        <ModalContent>
          <Input
            legend="SENHA ATUAL"
            placeholder="Digite sua senha atual"
            className="font-bold"
            type="password"
          />

          <Input
            legend="NOVA SENHA"
            placeholder="Digite sua nova senha"
            className="font-bold"
            type="password"
          />
        </ModalContent>

        <ModalFooter>
          <Button>Salvar</Button>
        </ModalFooter>
      </Form>
    </ModalLayout>
  );
}
