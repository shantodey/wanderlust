"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from 'lucide-react';
import { useRouter } from "next/navigation";
const DeleteDestination = ({ destinations }) => {
    const { _id, destinationName } = destinations;
    const router = useRouter(); // ✅ useRouter ইনিশিয়েট করা হলো

    const handelDelete = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (res.ok) {
                const data = await res.json();
                console.log("Deleted successfully:", data);

                // রিফ্রেশ এবং রিডাইরেক্ট করা
                router.push('/destination');
                router.refresh();
            } else {
                console.error("Failed to delete");
            }
        } catch (error) {
            console.error("Error sending delete request:", error);
        }
    };
    return (
        <AlertDialog>
            <Button variant="bordered" className="border border-red-500 text-red-500 hover:bg-red-50 rounded-md text-sm font-medium">
                <Trash2 size={16} /> Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Travel Package</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to delete
                                <strong>{destinationName}</strong>This action cannot be undone
                                and will permanently remove this travel package from the system.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handelDelete} slot="close" variant="danger">
                                Delete Package
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteDestination;