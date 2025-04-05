import { Button } from "@/components/ui/button";
import { AdminClientEntityBuilderContainer } from "./_container";

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(({
    deps: {
        action,
        config,
    },
}) => {
    return function EntityPage() {
        return (
            <div>
                <h1>{config.title}</h1>
                <div className="flex gap-4"></div>
                <Button onClick={() => {
                    action()
                }}>Create</Button>

                <div>{config.fields.map((field) =>
                    <div key={field.name}>{field.type}: {field.name}</div>
                )}</div>
            </div>)
    }
},)

