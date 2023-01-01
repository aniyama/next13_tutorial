import { ReactQuery } from "@/components/ReactQuery";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";



export default function Supense() {
    return (
        <ErrorBoundary fallback={<p>suspense-error!!!!!</p>}>
            <Suspense fallback={<p>suspense-loading...</p>}>
                <ReactQuery />
            </Suspense>
        </ErrorBoundary>
    )
}
