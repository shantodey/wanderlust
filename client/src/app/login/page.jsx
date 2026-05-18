"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Input, Label, TextField, Card, Checkbox, Link } from "@heroui/react";
import { Mail, Lock } from "lucide-react";
import { createAuthClient } from "better-auth/client";
const LogInPage = () => {
    const onLogIn = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: "/dashboard"
        });
        if (data) {
            redirect('/')
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
        <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-zinc-900 mb-2">Welcome Back</h1>
                <p className="text-zinc-500 text-sm">Resume your adventure with Wanderlust</p>
            </div>

            <Card className="w-full max-w-md bg-white p-8 border border-zinc-100 shadow-sm rounded-none">
                <Form onSubmit={onLogIn} className="flex flex-col gap-5">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        labelPlacement="outside"
                        className="gap-1.5"
                    >
                        <Label className="text-zinc-900 font-semibold text-sm">Email Address</Label>
                        <Input
                            placeholder="Enter your email"
                            startcontent={<Mail className="text-zinc-400 w-4 h-4 shrink-0" />}
                            variant="flat"
                            radius="none"
                            className="bg-zinc-50 border border-zinc-200"
                        />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        labelPlacement="outside"
                        className="gap-1.5"
                    >
                        <Label className="text-zinc-900 font-semibold text-sm">Password</Label>
                        <Input
                            placeholder="Enter your password"
                            startcontent={<Lock className="text-zinc-400 w-4 h-4 shrink-0" />}
                            variant="flat"
                            radius="none"
                            className="bg-zinc-50 border border-zinc-200"
                        />
                    </TextField>

                    <div className="flex items-center justify-between w-full text-sm">
                        <Checkbox
                            radius="none"
                            classNames={{
                                label: "text-zinc-500 text-sm selection:bg-transparent"
                            }}
                        >
                            Remember me
                        </Checkbox>
                        <Link href="#" className="text-[#13a3ca] font-medium hover:underline text-sm">
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        radius="none"
                        className="w-full bg-[#13a3ca] text-white py-6 font-medium hover:bg-[#108dae] transition-colors mt-2"
                    >
                        Sign In
                    </Button>

                    <div className="relative flex py-2 items-center justify-center">
                        <div className="grow border-t border-zinc-200"></div>
                        <span className="shrink mx-4 text-zinc-400 text-xs">Or continue with</span>
                        <div className="grow border-t border-zinc-200"></div>
                    </div>

                    <Button
                        onClick={signIn}
                        variant="bordered"
                        radius="none"
                        className="w-full bg-white border border-zinc-200 py-6 text-zinc-700 font-medium hover:bg-zinc-50 flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" />
                        </svg>
                        Sign Up With Google
                    </Button>

                    <div className="text-center text-sm text-zinc-500 mt-2">
                        Don't have an account?{" "}
                        <Link href={"/singup"} className="text-[#13a3ca] font-medium hover:underline text-sm inline-block">
                            Sign Up
                        </Link>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LogInPage;