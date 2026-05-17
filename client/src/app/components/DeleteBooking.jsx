"use client";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2, } from "lucide-react";
const DeleteBooking = ({e}) => {

    
    const handelBookingDelete= async()=>{
        const res= await fetch(`http://localhost:5000/booking/${e._id}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }
        });
        const data= await res.json()
        window.location.reload()

    }
    return (
        <AlertDialog>
            <Button variant="outline" className="flex items-center gap-2 rounded-sm border border-red-400 px-5 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"><Trash2 size={16} /> Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{e.destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handelBookingDelete} slot="close" variant="danger">
                                Delete 
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteBooking;