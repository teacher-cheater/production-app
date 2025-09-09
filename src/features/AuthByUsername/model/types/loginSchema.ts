export interface LoginSchema {
    password: string;
    username: string;
    isLoading: boolean;
    error?: string;
}
