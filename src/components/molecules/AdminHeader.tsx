type headerProps = {
    page: string;
}
const AdminHeader = ({page}: headerProps) => {

    return ( 
        <main>
            <div className="px-4 md:px-6 xl:px-8 py-4 lg:border-b-2 border-slate-300">
                <p className="text-xl xl:text-2xl font-semibold text-[#020100] capitalize ml-10 mt-0.5">{page}</p>          
            </div>
        </main>
     );
}
 
export default AdminHeader;