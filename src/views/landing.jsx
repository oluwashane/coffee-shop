
import { Category, Showcase } from "../features";
import { PublicLayout } from "../layouts";

export function Landing() {
    return (
        <PublicLayout>
            <Showcase />
            <Category />
        </PublicLayout>
    )
}