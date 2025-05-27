import { Button } from "../../../shared/components/button";

type FooterProps = {
  title: string
  description: string
  buttonValue: string
}

export function Footer({title, description, buttonValue}:FooterProps) {
  return (
    <div className="border border-gray-500 rounded-xl p-6 md:p-10">
      <h1 className="text-md font-semibold text-gray-200">
        {title}
      </h1>
      <h2 className="text-xs text-gray-300 mb-6">{description}</h2>
      <Button size={"5xl"} variant={"secondary"}>
        {buttonValue}
      </Button>
    </div>
  );
}
