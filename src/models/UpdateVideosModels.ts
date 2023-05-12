export type UpdateVideosModels = {
    id:	number,
    title:	string,
    author:	string,
    availableResolutions?: string[], 
    canBeDownloaded?: boolean,
    minAgeRestriction?:	number | null,
    publicationDate?:	string,
    createdAt?: string
    
}