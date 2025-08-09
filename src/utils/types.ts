export interface IChild {
    children: React.ReactNode
}

export interface IItem {
    id:number,
    dessert_id:number,
    name:string,
    category:string,
    price:number,
    image_url:string,
}

export interface ItemProps extends Partial<IItem> {
  handleOrder?: (id: number, name: string, price: number) => void;
}
export interface IPagination {
    next:()=>void,
    prev:()=>void,
    page:number,
    totalPages:number,
}

export interface IFetchDesserts {
 page:number,
}

export interface ICart {
  orders: Partial<IItem>[] | null;
}

export interface CartOrderSummary  {
  result: {
    name: string;
    quantity: number;
    total: string;
  }[];
  totalResult: number;
};

export interface CartOrderItem {
  name: string;
  quantity: number;
  total: string; 
}

export interface ICartProps {
  cartOrders: {
    result: CartOrderItem[];
    totalResult: number;
  } | null;
  handleDelete:(name:string)=>void;
}
