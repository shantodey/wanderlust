"use client";
import { createAuthClient } from "better-auth/client";
import { authClient } from "@/lib/auth-client";
import { Button, Form, Input, Label, TextField, Card, } from "@heroui/react";
import { User, Mail, Lock, Link2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const SingUpPage = () => {
    const onSingIn = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
            callbackURL: "/dashboard"
        });
        if (data) {
            redirect('/login')
        }
        if (error) {
            alert(error.message)
        }

    };
    const authClient = createAuthClient();
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-normal text-gray-800 mb-2">Create Account</h1>
                <p className="text-gray-500 text-sm">Start your adventure with Wanderlust</p>
            </div>

            <Card className="w-full max-w-md bg-white p-8 border border-gray-100 shadow-sm rounded-none">
                <Form onSubmit={onSingIn} className="flex flex-col gap-5">
                    <TextField isRequired name="name">
                        <Label className="text-gray-900 font-medium text-sm mb-1.5 block">Full Name</Label>
                        <div className="relative flex items-center">
                            <User className="absolute left-3 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Enter your name"
                                className="w-full pl-10 pr-3 py-2 bg-gray-50/50 border border-gray-200 text-sm placeholder-gray-400 focus:outline-none rounded-none"
                            />
                        </div>
                    </TextField>

                    <TextField isRequired name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-gray-900 font-medium text-sm mb-1.5 block">Email Address</Label>
                        <div className="relative flex items-center">
                            <Mail className="absolute left-3 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-3 py-2 bg-gray-50/50 border border-gray-200 text-sm placeholder-gray-400 focus:outline-none rounded-none"
                            />
                        </div>
                    </TextField>

                    <TextField isRequired name="password"
                        minLength={8}
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                            if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                            return null;
                        }}
                    >
                        <Label className="text-gray-900 font-medium text-sm mb-1.5 block">Password</Label>
                        <div className="relative flex items-center">
                            <Lock className="absolute left-3 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Create a password"
                                className="w-full pl-10 pr-3 py-2 bg-gray-50/50 border border-gray-200 text-sm placeholder-gray-400 focus:outline-none rounded-none"
                            />
                        </div>
                    </TextField>

                    <TextField name="image" type="url">
                        <Label className="text-gray-900 font-medium text-sm mb-1.5 block">Image Url</Label>
                        <div className="relative flex items-center">
                            <Link2 className="absolute left-3 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Your Image Url"
                                className="w-full pl-10 pr-3 py-2 bg-gray-50/50 border border-gray-200 text-sm placeholder-gray-400 focus:outline-none rounded-none"
                            />
                        </div>
                    </TextField>

                    <Button type="submit" className="w-full bg-[#13a3ca] text-white py-2.5 font-medium hover:bg-[#108dae] transition-colors rounded-none mt-2">
                        Create Account
                    </Button>

                    <div className="relative flex py-2 items-center justify-center">
                        <div className="grow border-t border-gray-200"></div>
                        <span className="shrink mx-4 text-gray-400 text-xs font-normal">Or sign up with</span>
                        <div className="grow border-t border-gray-200"></div>
                    </div>

                    <Button onClick={signIn} variant="bordered" className="w-full bg-white border border-gray-200 py-2.5 text-gray-700 font-medium hover:bg-gray-50 flex items-center justify-center gap-2 rounded-none">
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" />
                        </svg>
                        Sign Up With Google
                    </Button>

                    <div className="text-center text-sm text-gray-500 mt-2">
                        Already have an account?{" "}
                        <Link href={'/login'} className="text-[#13a3ca] font-medium hover:underline"> Sign In</Link>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default SingUpPage;