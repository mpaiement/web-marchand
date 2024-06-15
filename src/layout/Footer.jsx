
import { BodyOne, Caption, CustomLink, Title } from "@/screens/articles/components/CustomComponents"
import LogoImg from "../assets/common/logo.png"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return <>
   
    <footer className="py-0 mt-10  "> 

<div className=" grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div>
    <img src={LogoImg} alt="LogoImg" className="h-14  -mt-7"/>
    <div className="flex flex-col gap-2 mt-7 text-2xl">
        <Caption >Adress: m-payment, Tizi-Ouzou, Algeria</Caption>
      
        <Caption >Email: mobilepaiement2024@gmail.com</Caption>
        <Caption>Call: +213 555555555 </Caption>

    </div>
    
</div>
<div>
   {/* <Title className="md:text-2xl my-5 -mt-2 bg-grey-300 " level={5}>Help </Title>  */}
   <BodyOne className="md:text-3xl -mt-4">Help</BodyOne>
   <div className="flex flex-col gap-4  ">
   <div>
<a href="#products">Go to Our Products</a>
</div>
   <div>
    <a href="#">Back to Top</a>
</div>

   </div>
</div>
<div>
    
{/* <BodyOne>Subscribe To Our Newletter</BodyOne>
    <input type="text" 
    className="p-3  w-full border bg-white-100 border-gray-300 rounded-md outline-none"
    placeholder="Enter your new email address"
    /> */}
      <div className="flex flex-col gap-4">
                  
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-20 mt-5">
                            <a href="https://www.facebook.com"><FaFacebook size={50} /></a>
                            <a href="https://twitter.com"><FaTwitter size={50} /></a>
                            <a href="https://www.instagram.com"><FaInstagram size={50} /></a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
    </div>



    </footer>
    
    </>
}