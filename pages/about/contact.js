import Image from "next/image";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

const firstpage_about = () => {
    return ( 
        <>
        
        <h1>This is contact page.</h1>
        <Image src="/img1.jpg" width="600px" height="300px" layout="fill" alt="image"></Image>
        
        </>
     );
}
 
export default firstpage_about;