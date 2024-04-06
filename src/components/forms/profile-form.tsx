"use client";
import { EditUserProfileSchema } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {
    user: any;
    onUpdate?: any;
};

const ProfileForm = ({ user, onUpdate }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: "onChange",
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: user?.name,
            email: user?.email,
        },
    });
    const handleSubmit = async (
        values: z.infer<typeof EditUserProfileSchema>
    ) => {
        setIsLoading(true);
        await onUpdate(values.name);
        setIsLoading(false);
    };

    useEffect(() => {
        form.reset({
            name: user?.name,
            email: user?.email,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return (
        <Form {...form}>
            <form
                className="flex flex-col gap-6"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">
                                User full name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Name"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="email"
                                    placeholder="rohit@rohit.com"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="self-start hover:bg-black hover:text-white hover:border-[1px]"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                            Saving...
                        </>
                    ) : (
                        "Save Settings"
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default ProfileForm;
