"use client";

import { useState } from "react";
import api from "@/lib/api";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/users/login/", {
                username,
                password,
            });

            localStorage.setItem("access", res.data.access);
            window.location.href = "/dashboard";
        }
        catch (err) {
            alert("Login Failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
                <h1 className="text-white text-2xl font-semibold mb-6">Login</h1>

                <input
                    className="w-full p-2 mb-3 rounded bg-gray-700 text-white outline-none"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="w-full p-2 mb-3 rounded bg-gray-700 text-white outline-none"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
