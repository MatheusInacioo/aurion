import { FaLock } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Login() {
    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center p-6">

            {/* Left side */}
            <div className="flex h-full w-1/4 justify-center items-center">

                <div className="h-full w-full flex flex-col justify-between items-center pr-6">

                    {/* Logo */}
                    <div className="w-[350px] h-[100px] bg-[url('/img/logo-dark.png')] bg-center bg-cover"></div>


                    {/* Login Form */}
                    <div className="w-full flex flex-col h-full justify-center gap-8">

                        {/* Welcome */}
                        <div className="flex w-full justify-start items-center">
                            <span className="text-6xl font-fjalla text-[#02020F]">
                                Welcome!
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <span className="ml-2 text-sm uppercase tracking-wide text-[#02020F]">
                                Email
                            </span>

                            <div className="relative">
                                <CiMail
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#02020F]"
                                />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                                        w-full
                                        h-14
                                        border
                                        border-gray-400
                                        pl-12
                                        pr-4
                                        bg-transparent
                                        text-[#02020F]
                                        outline-none
                                        focus:border-[#02020F]
                                        hover:border-[#02020F]
                                        rounded-4xl
                                        transition-all
                                    "
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <span className="ml-2 text-sm uppercase tracking-wide text-[#02020F]">
                                Password
                            </span>

                            <div className="relative">
                                <FaLock
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#02020F]"
                                />

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="
                                        w-full
                                        h-14
                                        border
                                        border-gray-400
                                        pl-12
                                        pr-4
                                        bg-transparent
                                        text-[#02020F]
                                        outline-none
                                        focus:border-[#02020F]
                                        hover:border-[#02020F]
                                        rounded-4xl
                                        transition-all
                                    "
                                />
                            </div>
                        </div>

                        {/* Forgot password */}
                        <div className="w-full flex justify-end">
                            <button
                                className="
                                    text-sm
                                    text-[#02020F]
                                    hover:underline
                                    transition
                                "
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Login button */}
                        <button
                            className="
                                w-full
                                h-14
                                bg-[#02020F]
                                text-[#E0E802]
                                uppercase
                                tracking-wider
                                font-semibold
                                hover:scale-105
                                transition-all
                                rounded-4xl
                            "
                        >
                            Login
                        </button>

                        {/* Footer */}
                        <div className="w-full flex justify-center">
                            <button
                                className="
                                    text-sm
                                    text-[#02020F]
                                    hover:underline
                                    transition
                                "
                            >
                                Or contact us and become a client
                            </button>
                        </div>
                    </div>
                    
                    <span className="text-gray-400 mt-2 text-sm text-center">© {new Date().getFullYear()} | Developed by - Aurion OS</span>
                </div>
            </div>

            {/* Right side */}
            <div
                className="
                    flex
                    h-full
                    rounded-2xl
                    w-3/4
                    border
                    border-[#E0E802]
                    bg-[url('/img/login-bg-alt.png')]
                    bg-center
                    bg-cover
                "
            />
        </div>
    );
}