export interface User{
    id: number;
    login: string;
    role: JSON,
    adresseEmail: string;
    dateOfBirth: string;
    status: string;
    premium: boolean;
}

export interface Recipe{
    id: number;
    author: User;
    title: string,
    description: string;
    details: JSON;
    preparation: JSON;
    datePublication: string;
}

export interface Category{
    id: number;
    name: string;
    recipe: Recipe;
}

export interface Comment{
    id: number;
    auteur: User;
    recipe: Recipe;
    message: string;
}

export interface Favorite{
    id: number;
    auteur: User;
    recipe: Recipe;
}
