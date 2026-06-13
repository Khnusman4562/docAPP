export default function Login(){
    return(
        <div className="flex justify-center items-center bg-green-200 h-[100vh]">
            <div className="bg-white shadow-2xl p-8 text-center h-auto w-auto lg:h-[60%] lg:w-[22%] rounded-4xl flex flex-col gap-8">
                <h2 className="text-4xl">Login</h2>
                <input type="text" placeholder="Email" className="block border-2 border-gray-200 h-14 lg:h-20 px-4" />
                <input type="password" placeholder="Enter your password" className="block border-2 border-gray-200 h-14 lg:h-20 px-4" />
                <button className="bg-green-500 h-10 lg:h-20 w-40 rounded">Login</button>
                <div className="font-light">
                    <p>Forget <span className="underline text-blue-400">Username</span>/ <span className="underline text-blue-400">password</span>?</p>
                <p>dont have account ? <span className="underline text-blue-400">Sign Up</span></p>
                </div>
                
            </div>
        </div>
    );
}