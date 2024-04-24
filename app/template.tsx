const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto w-full md:w-8/12 lg:w-1/2 flex flex-col gap-y-2 mt-8 px-4">
      {children}
    </div>
  );
};

export default Template;
