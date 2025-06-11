
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

    private id: number;
    private fullName: string;
    private position: string;
    private image: string;
    private priority: number;

}

interface Article {

    id: number;
    authorName: string;
    title: string;
    description: string;
    doi: string;
    publishedAt: Date;

}


export {
    User,
    ApiResponse,
    Team,
    Article
}