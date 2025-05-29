import { Button } from "../../../shared/components/button";

type FooterProps = {
  buttonValue?: string;
};

export function Footer({buttonValue}: FooterProps) {
  return (
      <Button size={"5xl"} variant={"secondary"}>
        {buttonValue}
      </Button>
  );
}
