import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { WorkFlowFormSchema } from "@/lib/types";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {
    title?: string;
    subtitle?: string;
};

const WorkflowForm = ({ title, subtitle }: Props) => {
    const form = useForm<z.infer<typeof WorkFlowFormSchema>>({
        mode: "onChange",
        resolver: zodResolver(WorkFlowFormSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    });

    const isLoading = form.formState.isLoading;
    const router = useRouter();
    const handleSubmit = () => {};
    return (
        <Card className="w-full max-w-[650px] border-none">
            {title && subtitle && (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{subtitle}</CardDescription>
                </CardHeader>
            )}
            <CardContent>
                <Form {...form}>
                    <form
                        className="flex flex-col gap-4 text-left"
                        onSubmit={form.handleSubmit(handleSubmit)}
                    >
                        <FormField
                            disabled={isLoading}
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">
                                        Name
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
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter description"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="mt-4"
                        >
                            {isLoading ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : null}
                            {isLoading ? "Saving..." : "Save"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default WorkflowForm;
