import { ReflectionCategory } from "../../models/ReflectionCategory";

import { SerializerComponent } from "../components";
import type { ReflectionCategory as JSONReflectionCategory } from "../schema";

export class ReflectionCategorySerializer extends SerializerComponent<ReflectionCategory> {
    static override PRIORITY = 1000;

    /**
     * Filter for instances of {@link ReflectionCategory}
     */
    serializeGroup(instance: unknown): boolean {
        return instance instanceof ReflectionCategory;
    }

    supports(r: unknown) {
        return r instanceof ReflectionCategory;
    }

    toObject(
        category: ReflectionCategory,
        obj?: Partial<JSONReflectionCategory>
    ): JSONReflectionCategory {
        const result: JSONReflectionCategory = {
            ...obj,
            title: category.title,
        };

        if (category.children && category.children.length > 0) {
            result.children = category.children.map((child) => child.id);
        }

        return result;
    }
}
