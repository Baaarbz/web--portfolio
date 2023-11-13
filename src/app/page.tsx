'use client';

import Social from "@/app/components/social";
import Title from "@/app/components/title";
import AboutMe from "@/app/components/sections/about-me";
import Experience from "@/app/components/sections/experience";

export default function Home() {
    return (
        <div
            className="bg-grey-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div
                className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-20 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-16">
                    <header
                        className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <Title/>
                        <Social/>
                    </header>
                    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                        <div className="divide-y divide-solid divide-teal-300/[.30]">
                            <section id="about" className="mb-16 scroll-mt-16 lg:scroll-mt-24"
                                     aria-label="About me">
                                <div>
                                    <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200">About
                                        me</h2>
                                </div>
                                <AboutMe/>
                            </section>
                            <section id="experience" className="mb-16 scroll-mt-16 lg:scroll-mt-24"
                                     aria-label="Experience">
                                <div>
                                    <h2 className="my-8 text-sm font-bold uppercase tracking-widest text-slate-200">Experience</h2>
                                </div>
                                <Experience/>
                            </section>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    )
}
