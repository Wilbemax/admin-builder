import { AdminClientEntityBuilderContainer } from "./_container";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { GetEntitiesResult } from "./_types";
import { useTransition } from "react";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";


export const UpsertEntityFormProvider = AdminClientEntityBuilderContainer.provider(
    ({ deps: {
        action,
        config
    } }) => {
        return function UpsertEntityForm({ defaultValue, onSuccess }: { defaultValue?: GetEntitiesResult, onSuccess?: () => void }) {
            const [isLoading, startTransition] = useTransition()
            const id = defaultValue?.id
            const form = useForm({
                defaultValues: {
                    ...defaultValue
                }
            })


            const handleSubmit = form.handleSubmit((data) => {
                startTransition(async () => {
                    if (id) {
                        await action({
                            type: "update",
                            id,
                            data,
                        })
                    } else {
                        await action({
                            type: "create",
                            data
                        })
                    }

                })

                onSuccess?.()
            })

            return <Form {...form}>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {config.fields.map(configField => {
                        return <FormField
                            key={configField.name}
                            control={form.control}
                            name={configField.name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{configField.title}</FormLabel>
                                    <FormControl>
                                        {configField.type === 'select' ? (
                                            <Select onValueChange={field.onChange} value={field.value?.toString() ?? undefined} >
                                                <SelectTrigger >
                                                    <SelectValue placeholder={'select'} />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {configField.options.map(option => {
                                                        console.log(option);

                                                        return (

                                                            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                                        )
                                                    })}
                                                </SelectContent>
                                            </Select>
                                        ) :
                                            configField.type === 'text' ? (
                                                <Input placeholder="input name" {...field} value={String(field.value)} />
                                            ) : null}
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    })}
                    <Button type="submit" disabled={isLoading}>Submit</Button>
                </form>
            </Form>
        }
    }
)