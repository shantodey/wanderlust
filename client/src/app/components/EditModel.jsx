"use client";

import { Button, Input, Label, Modal, Surface, TextField, FieldError, TextArea, Select, ListBox } from "@heroui/react";
import {  Edit2 } from "lucide-react";

export function EditModel({ destinations }) {
     const {_id, imageUrl, destinationName, country, price, duration, departureDate, description,category } = destinations;
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const destination = Object.fromEntries(formData.entries())
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(destination)
        })
        const data=await res.json();
        console.log(data);
        

    }
   
    return (
        <Modal>
            <Button variant="bordered" className="border rounded-md text-sm font-medium"><Edit2 size={16} /> Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header >
                            <Modal.Heading> Edit destination </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className=" mx-auto p-10 space-y-8 shadow-2xl">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="md:col-span-2">
                                            <TextField name="destinationName" defaultValue={destinationName} isRequired>
                                                <Label>Destination Name</Label>
                                                <Input className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                        <TextField name="country" isRequired defaultValue={country}>
                                            <Label>Country</Label>
                                            <Input className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>
                                        <div>
                                            <Select name="category" isRequired className="w-full" defaultValue={category} >
                                                <Label>Category</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="Beach" textValue="Beach"> Beach<ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Mountain" textValue="Mountain"> Mountain <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="City" textValue="City"> City <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Adventure" textValue="Adventure">Adventure<ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Cultural" textValue="Cultural">Cultural <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Luxury" textValue="Luxury"> Luxury<ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>
                                        <TextField name="price" type="number" isRequired defaultValue={price}>
                                            <Label>Price (USD)</Label>
                                            <Input type="number" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>
                                        <TextField name="duration" isRequired defaultValue={duration}>
                                            <Label>Duration</Label>
                                            <Input className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        <div className="md:col-span-2">
                                            <TextField name="departureDate" type="date" isRequired defaultValue={departureDate}>
                                                <Label>Departure Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>


                                        <div className="md:col-span-2">
                                            <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                                                <Label>Image URL</Label>
                                                <Input type="url" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div className="md:col-span-2">
                                            <TextField name="description" isRequired defaultValue={description}>
                                                <Label>Description</Label>
                                                <TextArea className="rounded-3xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>
                                    <Modal.Footer>
                                        <Button  type="submit">Edit</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}