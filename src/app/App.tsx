import { AppRoutes } from "../shared/routes/routes"
import { Button } from "../shared/components/button"

export function App() {
  return <div className="h-screen w-full bg-amber-300 flex items-center justify-center">
    <Button size={"3xs"} variant={"primary"} >
      Botão
    </Button>
  </div>
}
