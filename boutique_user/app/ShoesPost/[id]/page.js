import Header from "../../Script_React/Header";
import Footer from "../../Script_React/Footer";
import ShoesDetails from "../../Script_React/ShoesDetails";
export default function ShoesPost({params})
{
    return  (   
    <>
           <Header />
           <ShoesDetails chaussureId={params.id}/>
           <Footer />
        
    </>);
}