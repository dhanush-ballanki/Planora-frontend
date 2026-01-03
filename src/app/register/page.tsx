"use client";
import {useState} from "react";
import api from "@/lib/api"
export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await api.post("/users/register/",{
                username,
                email,
                password,
            });
            alert("User registered successfully");
            window.location.href = "/login";
        }
        catch(err){
            alert("Registration failed");
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
                <h1 className="text-white text-2xl font-semibold mb-6">
                    Create Account
                </h1>

                <input
                    className="w-full p-2 mb-3 rounded bg-gray-700 text-white outline-none"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="w-full p-2 mb-3 rounded bg-gray-700 text-white outline-none"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="w-full p-2 mb-4 rounded bg-gray-700 text-white outline-none"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleRegister}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded"
                >
                    Register
                </button>

                <p className="text-gray-400 text-sm mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-400 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}