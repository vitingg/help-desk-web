import { Button } from "../modules/components/button";
import { Input } from "../modules/components/input";

export function App() {
  return (
    <div className="bg-white text-black h-screen flex flex-col justify-center items-center gap-2">
      <div className="border p-[1.75rem] rounded-lg flex flex-col gap-2 border-gray-300">
        <Input
          legend="e-mail"
          placeholder="email@email.com"

        />
        <Input
          legend="senha"
          placeholder="Digite sua senha"
          className="mb-3"

        />

        <Button size={"5xl"}>Enviar</Button>
      </div>
    </div>
  );
}
