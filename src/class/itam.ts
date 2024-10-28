
export interface Itamanager {
    id: number;
    name: string;
    description: string;
    titles: string;
    getItams(): Itam[];
    addItem(item: Itam): void;
    removeItem(itemId: number): void;
    updateItem(itemId: number, updatedItem: Itam): void;
}

export class Itam implements Itamanager {
    id: number;
    name: string;
    description: string;
    titles: string;
    private items: Itam[] = []; // מערך כדי לאחסן את הפריטים

    constructor(Itamanager: Itamanager) {
        this.id = Itamanager.id;
        this.name = Itamanager.name;
        this.description = Itamanager.description;
        this.titles = Itamanager.titles;
    }

    getItams(): Itam[] {
        return this.items;
    }

    addItem(item: Itam): void {
        this.items.push(item);
    }

    removeItem(itemId: number): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    updateItem(itemId: number, updatedItem: Itam): void {
        const index = this.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            this.items[index] = updatedItem;
        }
    }
}
