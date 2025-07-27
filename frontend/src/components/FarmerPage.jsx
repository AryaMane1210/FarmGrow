// import FarmerSidebar, {SidebarItem} from "./FarmerSidebar";
// import { LayoutDashboard, Wheat, Gavel, ReceiptText } from "lucide-react";
// // import crop from "../assets/crop.png";
// import FarmerNavbar from "./FarmerNavbar";

// export default function FarmerPage() {
//   return (
//     <div className="flex">
//       <FarmerSidebar>
//         <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active alert/>
//         <SidebarItem icon={<Wheat size={20} />} text="Produce"/>
//         <SidebarItem
//           icon={<Gavel size={20} />}
//           text="Bid" alert
//         />
//         <SidebarItem
//           icon={<ReceiptText size={20} />}
//           text="Transaction"
//         />
//       </FarmerSidebar>
//       <FarmerNavbar/>
//     </div>
//   );
// }

import FarmerSidebar, { SidebarItem } from "./FarmerSidebar";
import { LayoutDashboard, Wheat, Gavel, ReceiptText } from "lucide-react";
import FarmerNavbar from "./FarmerNavbar";

export default function FarmerPage() {
  return (
    <div className="flex h-screen"> {/* Full screen layout */}
      <FarmerSidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active alert />
        <SidebarItem icon={<Wheat size={20} />} text="Produce" />
        <SidebarItem icon={<Gavel size={20} />} text="Bid" alert />
        <SidebarItem icon={<ReceiptText size={20} />} text="Transaction" />
      </FarmerSidebar>
      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        <FarmerNavbar />
        {/* Add your page content below, e.g.: */}
        {/* <main className="flex-1 p-8 bg-[#F7FFF9]">Your main content</main> */}
      </div>
    </div>
  );
}

