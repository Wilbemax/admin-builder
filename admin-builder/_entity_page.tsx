import { Button } from "@/components/ui/button";
import { AdminClientEntityBuilderContainer } from "./_container";
import { EntityCardProvider } from "./_entity_card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { UpsertEntityFormProvider } from "./_upsert-entity-form";
import { useEffect, useState, useTransition } from "react";
import { GetEntitiesResult } from "./_types";
import { Loader2 } from "lucide-react";




export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(({
    deps: {
        config,
        action
    },
    innerDeps: {
        EntityCard,
        UpsertEntityForm
    }
}) => {
    return function EntityPage() {
        const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
        const [entity, setEntity] = useState<GetEntitiesResult[] | null>([])
        const [isLoading, startTransition] = useTransition()

        useEffect(() => {
            startTransition(async () => {
                await action({ type: "get" }).then(res => setEntity(res))
            })
        }, [])


        return (
            <div className="p-12 max-w-[1200px] mx-auto">
                <h1 className="text-4xl font-bold mb-8">{config.title}</h1>
                <div className="flex gap-4 py-5">
                    <Dialog open={isDialogOpen}>
                        <DialogTrigger asChild >
                            <Button className="" onClick={() => setDialogOpen(true)}>Create</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Create {config.name}</DialogTitle>
                            </DialogHeader>
                            <UpsertEntityForm onSuccess={() => setDialogOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </div>

                {isLoading ? <div className="max-w-[1200px] mx-auto flex justify-center m-80">
                    <Loader2 className="animate-spin" size={32} />
                </div> :
                    <div className="grid grid-cols-3 gap-4">
                        {entity && entity.map((el) =>
                            <EntityCard key={el.id} entity={el} />
                        )}
                    </div>
                }
            </div>)
    }
}, {
    EntityCard: EntityCardProvider,
    UpsertEntityForm: UpsertEntityFormProvider
})

