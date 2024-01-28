export interface User{
    id: number;
    login: string;
    photoProfil: string;
    role: Array<string>;
    adresseEmail: string;
    dateOfBirth: string;
    status: string;
    premium: boolean;
    isAdministrator: boolean;
    profileImage: string;
}

export interface Recipe{
    id: number;
    author: User;
    title: string;
    description: string;
    details: Array<string>;
    preparation: Array<string>;
    datePublication: string;
    compositions: Array<Object>; 
    categories: Array<Object>;
    comments: Array<Object>;
    favorites: Array<Object>;
}

export interface Category{
    id: number;
    name: string;
    description: string;
    recipes: Array<Recipe>;
}

export interface Comment{
    id: number;
    auteur: User;
    recipe: Recipe;
    message: string;
    datePublication: string;
}

export interface Favorite{
    id: number;
    auteur: User;
    recipe: Recipe;
}
