type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="bg-gray-600 h-full flex flex-col justify-center items-center rounded-tr-2xl  md:rounded-tr-none rounded-tl-2xl">
      {children}
    </div>
  );
}