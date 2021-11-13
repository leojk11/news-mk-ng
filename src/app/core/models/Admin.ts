export interface AdminRole {
    _id?: string;
    admin_role: string;
}

export interface NewAdminPayload {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    admin_role: string;
}
  