import Sidebar from "@/Components/Navigation/Sidebar";
import Topbar from "@/Components/Navigation/Topbar";

export default function BaseLayout({ children }) {
    return (
        <div className="w-screen h-screen bg-neutral-950 flex">
            <Sidebar />
            <div class="flex flex-col h-full w-full overflow-hidden">
                <Topbar />
                <div class="flex flex-col w-full h-full overflow-y-auto scrollbar-thin">
                    {children}
                </div>
            </div>
        </div>
    );
}