// * to make any component responsive 
export default function ({ children }: React.PropsWithChildren) {
  return (
    <div className='md:max-w-6xl md:mx-auto md:grid md:grid-cols-2 lg:grid-cols-3  gap-3'>
      {children}
    </div>
  );
}
