import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminClientEntityBuilderContainer } from "./_container";
import { GetEntitiesResult } from "./_types";
import { Button } from "@/components/ui/button";

export const EntityCardProvider = AdminClientEntityBuilderContainer.provider(
    ({ deps: { config } }) => {
        return function EntityCard({ entity }: { entity: GetEntitiesResult }) {
            return (
                <Card>
                    <CardHeader>
                        <CardTitle>ID: {entity.id}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {Object.entries(entity).map(([key, value]) => {
                            if (!config.fields.find(el => el.name === key)) {
                                return null
                            }
                            return (
                                <div key={key}>
                                    {key}: {String(value)}
                                </div>
                            )
                        })}
                    </CardContent>
                    <CardFooter className="justify-end gap-3">
                        <Button>Edit</Button>
                        <Button variant={"destructive"}>Delete</Button>
                    </CardFooter>
                </Card>
            )
        }
    }
)