export interface Blogs {
    id: number;
    title: string;
    description1: string;
    description2?: string;
    image1: string;
    image2?: string;
    date: any;
    postedBy: string;
    likes: number;
    comments: number;
}