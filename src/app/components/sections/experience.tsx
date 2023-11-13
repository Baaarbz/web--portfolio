import React from "react";
import axios from "axios";

const client = axios.create({
    baseURL: "https://barbzdev.com"
});

export default function Experience() {
    const [jobs, setData] = React.useState([]);

    React.useEffect(() => {
        async function fetchJobs() {
            const response = await client.get("portfolio/api/v1/jobs");
            setData(response.data);
        }

        fetchJobs();
    }, []);

    return (
        <div>
            <ol>
                {jobs.map((job) => (
                    <li className="mb-12" key={job.id}>
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100 lg:group-hover-list-opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                {job.companyStartMonth}/{job.companyStartYear} — {job.isCurrentCompany ? (
                                <span>Present</span>) : (<span>{job.companyEndMonth}/{job.companyEndYear}</span>)}
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                           href={job.companyURL} target="_blank" rel="noreferrer"
                                           aria-label="Lead Engineer at Upstatement">
                                            <span className="inline-block">{job.companyName}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                     aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                          clipRule="evenodd">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <ul>
                                    {job.jobData.positions.map((position, index) => (
                                        <li key={index}>
                                            <div>
                                                <div className="text-slate-500 font-medium"
                                                     aria-hidden="true">{position.position}</div>
                                            </div>
                                            <p className="mt-2 text-sm leading-normal">{position.description}</p>
                                        </li>
                                    ))
                                    }
                                </ul>

                                <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                                    {job.jobData.links.map((link, index) => (
                                        <li className="mr-4" key={index}>
                                            <a
                                                className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                                href={link.url} target="_blank"
                                                rel="noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     className="mr-1 h-3 w-3" aria-hidden="true">
                                                    <path
                                                        d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                    <path
                                                        d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                                </svg>
                                                <span>{link.name}</span>
                                            </a>
                                        </li>
                                    ))
                                    }
                                </ul>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    {job.jobData.tags.map((tag, index) => (
                                        <li className="mr-1.5 mt-2" key={index}>
                                            <div
                                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{tag}
                                            </div>
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
            <div className="mt-12">
                <a
                    className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                    aria-label="View Full Résumé" href="/resume.pdf">
                    <span>
                        <span
                            className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                            View Full Résumé
                        </span>
                        <span className="whitespace-nowrap">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                      clipRule="evenodd">
                                </path>
                            </svg>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
}