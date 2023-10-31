'use client';

import Social from "@/app/components/social";
import Title from "@/app/components/title";

export default function Home() {
    return (
        <main
            className="flex flex-row items-center justify-between min-h-screen max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <Title/>
            <Social/>
        </main>
    )
}
