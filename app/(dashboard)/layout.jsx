import Image from "next/image";
import Link from "next/link";
import Menu from "../__Components/Menu";
import Navebar from "../__Components/Navebar";

export default function DashboardLayout({ children }) {
  return <div className="h-screen flex"> 
  {/**LEFT */}
  <div className="w-[14%] md:w-[8%] lg:w-[14%] xl:w-[14%] p-4 ">
    <Link className="flex items-center justify-center lg:justify-start gap-2" href="/">
    <Image src="/dreamschoolLogo.png" alt="" width={32} height={32}  />
    <span className="hidden lg:block">DreamSchool</span>
    </Link>
    <Menu/>
  
  </div>


  {/**RIGHT */}
  <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#065d8c] overflow-scroll ">
    <Navebar/>
    {children}
  </div>

    
    </div>;
}
