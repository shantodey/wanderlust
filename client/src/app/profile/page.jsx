"use client";

import { authClient } from "@/lib/auth-client";
import { Card, Button, Avatar } from "@heroui/react";
import { MapPin, Pencil, Plane, Globe, TrendingUp, DollarSign } from "lucide-react";

const MyProfile = () => {
        const {data: session} = authClient.useSession()
        const user = session?.user;
        
      
        
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-zinc-900">My Profile</h1>
            <p className="text-zinc-500 text-sm mt-1 mb-6">Manage your account settings and travel preferences</p>

            <div className="flex gap-6 items-start">
                {/* Left - Profile Card */}
                <Card className="w-64 shrink-0">
                    <Card.Content className="flex flex-col items-center gap-3 pt-8 pb-6 px-6">
                        <div className="relative">
                            <Avatar className="size-40">
                                <Avatar.Image
                                    alt="Extra Large"
                                    src="https://avatars.githubusercontent.com/u/126257294?v=4"
                                />
                                <Avatar.Fallback>XL</Avatar.Fallback>
                            </Avatar>
                            <div className="absolute bottom-0 right-0 bg-cyan-500 rounded-full p-1.5 cursor-pointer">
                                <Pencil className="w-3 h-3 text-white" />
                            </div>
                        </div>

                        <div className="text-center">
                            <h2 className="text-base font-semibold text-zinc-900">Sarah Mitchell</h2>
                            <p className="text-xs text-zinc-500 flex items-center gap-1 justify-center mt-0.5">
                                <MapPin className="w-3 h-3" /> San Francisco, CA
                            </p>
                        </div>

                        <div className="w-full border-t border-zinc-100 pt-4 flex flex-col gap-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-500">Member since</span>
                                <span className="font-semibold text-zinc-800">Mar 2024</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-500">Nationality</span>
                                <span className="font-semibold text-zinc-800">United States</span>
                            </div>
                        </div>

                        <Button className="w-full bg-cyan-500 text-white mt-2" radius="none">
                            <Pencil className="w-4 h-4" /> Edit Profile
                        </Button>
                    </Card.Content>
                </Card>

                {/* Right - Stats */}
                <div className="flex-1">
                    <Card>
                        <Card.Content className="p-6">
                            <h3 className="text-base font-semibold text-zinc-800 mb-4">Travel Statistics</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center justify-between border border-zinc-100 rounded-lg p-4">
                                    <div>
                                        <p className="text-xs text-zinc-500">Total Bookings</p>
                                        <p className="text-xl font-semibold text-zinc-900 mt-1">12</p>
                                    </div>
                                    <div className="bg-cyan-50 p-2.5 rounded-full">
                                        <Plane className="w-5 h-5 text-cyan-500" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border border-zinc-100 rounded-lg p-4">
                                    <div>
                                        <p className="text-xs text-zinc-500">Countries Visited</p>
                                        <p className="text-xl font-semibold text-zinc-900 mt-1">18</p>
                                    </div>
                                    <div className="bg-green-50 p-2.5 rounded-full">
                                        <Globe className="w-5 h-5 text-green-500" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border border-zinc-100 rounded-lg p-4">
                                    <div>
                                        <p className="text-xs text-zinc-500">Upcoming Trips</p>
                                        <p className="text-xl font-semibold text-zinc-900 mt-1">2</p>
                                    </div>
                                    <div className="bg-orange-50 p-2.5 rounded-full">
                                        <TrendingUp className="w-5 h-5 text-orange-500" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border border-zinc-100 rounded-lg p-4">
                                    <div>
                                        <p className="text-xs text-zinc-500">Total Spent</p>
                                        <p className="text-xl font-semibold text-zinc-900 mt-1">$15,750</p>
                                    </div>
                                    <div className="bg-purple-50 p-2.5 rounded-full">
                                        <DollarSign className="w-5 h-5 text-purple-500" />
                                    </div>
                                </div>

                            </div>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;