export interface IChild {
    children: React.ReactNode
}

export interface IItem {
    dessert_id:number,
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

export interface IFetchDesserts {
 page:number,
}