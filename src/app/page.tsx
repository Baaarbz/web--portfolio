'use client';

import Social from "@/app/components/social";
import Title from "@/app/components/title";

export default function Home() {
    return (
        <body
            className="bg-grey-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div
            className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <header
                    className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                    <Title/>
                    <Social/>
                </header>
            </div>
        </div>
        </body>

    )
}
