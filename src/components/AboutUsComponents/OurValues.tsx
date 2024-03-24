const OurValues = () => {
    return ( 
        <main>
            <h3 className="mt-24 font-semibold text-xl md:text-2xl xl:text-3xl text-[#242426]">Our Values</h3>
            <div className="flex flex-row flex-wrap gap-5 mt-10 justify-between">
                <div className="min-w-[17rem] w-[32%] bg-primary rounded-[20px] flex flex-col gap-y-5 text-white p-8">
                    <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl">User Obsessed</h3>
                    <p className="text-sm md:text-base xl:text-lg font-medium">We&apos;re obsessed with users&apos; problems and constantly seek better solutions.</p>
                </div>
                <div className="min-w-[17rem] w-[32%] bg-primary rounded-[20px] flex flex-col gap-y-5 text-white p-8">
                    <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl">Ownership and accountability</h3>
                    <p className="text-sm md:text-base xl:text-lg font-medium">We pursue outcomes with determination, passion, and grit.</p>
                </div>
                <div className="min-w-[17rem] w-[32%] bg-primary rounded-[20px] flex flex-col gap-y-5 text-white p-8">
                    <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl">Open & Collaborative</h3>
                    <p className="text-sm md:text-base xl:text-lg font-medium">Become the most trusted hub for Web3 experiences.</p>
                </div>
                <div className="min-w-[17rem] w-[32%] bg-primary rounded-[20px] flex flex-col gap-y-5 text-white p-8">
                    <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl">Humble and growth mindset</h3>
                    <p className="text-sm md:text-base xl:text-lg font-medium">We&apos;re curious, open-minded, humble, and adaptable. We don&apos;t expect or promise perfection.</p>
                </div>
                <div className="min-w-[17rem] w-[32%] bg-primary rounded-[20px] flex flex-col gap-y-5 text-white p-8">
                    <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl">Integrity</h3>
                    <p className="text-sm md:text-base xl:text-lg font-medium">Do no evil, act in good conscience, and inspire trust by holding high standards in everything that we do.</p>
                </div>
                <div className="min-w-[17rem] w-[32%] bg-primary rounded-[20px] flex flex-col gap-y-5 text-white p-8">
                    <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl">Execution-oriented</h3>
                    <p className="text-sm md:text-base xl:text-lg font-medium">We bias towards action, never expect perfection, done is better than perfect.</p>
                </div>
            </div>
        </main>
     );
}
 
export default OurValues;