export interface IChild {
    children: React.ReactNode
}

export interface IItem {
    name:string,
    category:string,
    price:number,
    imageUrl:string
}

export interface IPagination {
    next:()=>void,
    prev:()=>void,
    page:number,
}