import BaseLayout from "../Layouts/BaseLayout";

export default function Dashboard() {
    return (
        <BaseLayout>
            <div className="flex h-full w-full justify-center items-center">
                <h1 className="text-4xl text-white mb-4">Aurion OS 🚀</h1>
            </div>
        </BaseLayout>
    );
}