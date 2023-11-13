interface Job {
    id: string,
    companyName: string,
    companyURL: string,
    isCurrentCompany: boolean,
    companyStartMonth: string,
    companyStartYear: string,
    companyEndMonth: string,
    companyEndYear: string,
    jobData: JobData
}

interface JobData {
    positions: Position[],
    links: Link[],
    tags: string[]
}

interface Position {
    position: string,
    description: string,
    isCurrentPosition: boolean,
    positionStartMonth: string,
    positionStartYear: string,
    positionEndMonth: string,
    positionEndYear: string
}

interface Link {
    name: string,
    url: string
}

export default Job;