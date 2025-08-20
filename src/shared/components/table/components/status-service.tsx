export function StatusService(status: boolean) {
  switch (status) {
    case true:
      return (
        <div className="bg-feedback-doneBackground text-feedback-done w-fit md:w-fit rounded-2xl p-3 flex">
          <p className="font-bold">Ativo</p>
        </div>
      );
    case false:
      return (
        <div className="bg-feedback-openBackground text-feedback-open w-fit md:w-fit rounded-2xl p-3">
          <p className="font-bold">Inativo</p>
        </div>
      );
    default:
      return true;
  }
}
