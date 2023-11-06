export const getUrlDomain = (url: string) => {
    // parse url domain either by URL constructor or by manipulating index 

    try {
        const parsedUrl = new URL(url)
        return parsedUrl.hostname

    } catch {
        const domainStartIdx = url.indexOf('//') + 2;
        const domainEndIdx = url.indexOf('/', domainStartIdx);
        let domain = url.substring(domainStartIdx, domainEndIdx);
        
        // return the string if index of "/" can't be found
        if(domainStartIdx === -1 || domainEndIdx === -1){
            domain = url.length > 10 ? url.substring(0, 11) + "..." : url.substring(0, 11)
        }

        return domain

    }
}

