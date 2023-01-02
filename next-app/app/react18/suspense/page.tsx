"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQuery } from "../../components/ReactQuery";



export default function Supense() {
    const queryClient = new QueryClient({
        defaultOptions: {
        queries: {
            suspense: true
        }
        }
    });
    return (

        // <ErrorBoundary fallback={<p>suspense-error!!!!!</p>}>
        //     <Suspense fallback={<p>suspense-loading...</p>}>
            <QueryClientProvider client={queryClient}>
                <ReactQuery />
            </QueryClientProvider>
        //     </Suspense>
        // </ErrorBoundary>
    )
}
