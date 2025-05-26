import { Button } from "../../../shared/components/button";

export function Footer() {
  return (
    <div className="border border-gray-500 rounded-xl p-6 md:p-10">
      <h1 className="text-md font-semibold text-gray-200">
        Ainda não tem uma conta?
      </h1>
      <h2 className="text-xs text-gray-300 mb-6">Cadastre agora mesmo</h2>
      <Button size={"5xl"} variant={"secondary"}>
        Criar conta
      </Button>
    </div>
  );
}
