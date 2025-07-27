import FarmerSidebar, {SidebarItem} from "./FarmerSidebar";
import { LayoutDashboard, Wheat, Gavel, ReceiptText } from "lucide-react";
// import crop from "../assets/crop.png";

export default function FarmerPage() {
  return (
    <div className="flex">
      <FarmerSidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active alert/>
        <SidebarItem icon={<Wheat size={20} />} text="Produce"/>
        <SidebarItem
          icon={<Gavel size={20} />}
          text="Bid" alert
        />
        <SidebarItem
          icon={<ReceiptText size={20} />}
          text="Transaction"
        />
      </FarmerSidebar>
    </div>
  );
}


