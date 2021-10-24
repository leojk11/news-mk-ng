export interface User {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password?: string;
    date_registered?: string;
    status?: string;
}