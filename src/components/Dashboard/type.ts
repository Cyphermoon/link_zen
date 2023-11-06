export type ImageState = {
    idx: number;
    visible: boolean;
    title: string;
};

export type ZenLinkProps = {
    id: string;
    url: string;
    title: string;
    dateCreated: string;
    imageUrl: string;
    description: string;
    colorTag: {
        color: string;
        name: string;
    };
    tags: {
        name: string;
    }[];
};