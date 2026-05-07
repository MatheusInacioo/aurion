import Sidebar from "@/Components/Navigation/Sidebar";
import Topbar from "@/Components/Navigation/Topbar";

export default function BaseLayout({ children }) {
    return (
        <div className="w-screen h-screen bg-[#02020F] flex">
            <Sidebar />
            <div class="flex flex-col h-full w-full overflow-hidden">
                <Topbar />
                <div class="flex flex-col w-full h-full overflow-y-auto scrollbar-thin">
                    {children}
                </div>
                <span className="text-gray-700 mt-2 text-sm text-center">© {new Date().getFullYear()} | Developed by - Aurion OS</span>
            </div>
        </div>
    );
}