
interface ApiResponse<T> {
    statusCode: number,
    message?: string,
    data: T
}

interface User {
    id: number,
    login: string,
}

interface Team {

    id: number;
    fullName: string;
    position: string;
    image: string;
    priority: number;

}

interface Article {

    id: number;
    authorName: string;
    title: string;
    description: string;
    doi: string;
    publishedAt: Date;

}

interface New {
    id: number;
    title: string;
    content: string;
    imageId: string;
    createdAt: Date;
}

export {
    User,
    ApiResponse,
    Team,
    Article,
    New
}