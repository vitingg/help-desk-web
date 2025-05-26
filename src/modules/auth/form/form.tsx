import { Input } from "../../../shared/components/input";
import { Button } from "../../../shared/components/button";

export function Form() {
  return (
    <form
      action=""
      className=" border border-gray-500 rounded-xl mb-4 p-6 md:p-10"
    >
      <h1 className="text-lg font-semibold">Acesse o portal</h1>
      <h2 className="text-xs mb-8 text-gray-300">
        Entre usando seu e-mail e senha cadastrados
      </h2>
      <Input legend="email" className="mb-4" placeholder="exemplo@email.com" />
      <Input
        type="password"
        legend="senha"
        className="mb-[2.5rem]"
        placeholder="Digite sua senha"
      />
      <Button size={"5xl"} className="font-medium">
        Entrar
      </Button>
    </form>
  );
}
