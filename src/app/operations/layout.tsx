export default function OperationsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className="h-screen lg:flex">
            <section className="flex h-full flex-col justify-center px-6 sm:px-8 md:px-10 lg:w-1/2 lg:px-12 xl:px-14 2xl:px-16">
                {children}
            </section>
            <section className="createBackground hidden lg:block lg:w-1/2"></section>
        </main>
    ) 
  }