import { permanentRedirect } from 'next/navigation'

const page = () => {

    permanentRedirect('/user/dashboard')

    return ( 
        <main></main>
     );
}
 
export default page;