
export interface ItamInterface {    
    name: string;
    description: string;
    title: string;    
    // getItams(): Itam[];
    // addItem(item: Itam): void;
    // removeItem(itemId: number): void;
    // updateItem(itemId: number, updatedItem: Itam): void;
}

export class Itam implements ItamInterface {    
    public name: string;
    public description: string;
    public title: string;
    public create_at: Date
    public completed : boolean
    private items: Itam[] = []; 

    constructor(ItamInterface: ItamInterface) {        
        this.name = ItamInterface.name;
        this.description = ItamInterface.description;
        this.title = ItamInterface.title;
        this.completed = false;
        this.create_at = new Date();
    }

    getItams(): Itam[] {
        return this.items;
    }

    addItem(item: Itam): void {
        this.items.push(item);
    }

    // removeItem(itemName: string): void {
    //     this.items = this.items.filter(item => item.name !== itemName);
    // }

    // updateItem(itemName: string, updatedItem: Itam): void {
    //     const index = this.items.find(item => item.name !== itemName);
    //      {
    //         this.items[index?.name] = updatedItem;
    //     }
    // }
}
