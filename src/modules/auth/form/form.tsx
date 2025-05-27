type FormProps = {
  children: React.ReactNode;
  title: string
  description: string
};

export function Form({ children, title, description }: FormProps) {
  return (
    <form
      action=""
      className=" border border-gray-500 rounded-xl mb-4 p-6 md:p-10"
    >
      <h1 className="text-lg font-semibold">{title}</h1>
      <h2 className="text-xs mb-8 text-gray-300">
        {description}
      </h2>
      {children}
    </form>
  );
}
