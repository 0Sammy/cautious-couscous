const Loader = ({ visible }: { visible: boolean }) => {
    return (
        <main className={`bg-white fixed inset-0 z-[1000] flex items-center justify-center transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="jimu-primary-loading"></div>
        </main>
    );
}

export default Loader;
