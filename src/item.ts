export class Item {
    private readonly _item: string;
    private readonly _qtd: number;
    private readonly _value: number;

    constructor(item: string, qtd: number, value: number) {
        this._item = item;
        this._qtd = qtd;
        this._value = value;
    }

    getItem() {
        return this._item;
    }
    getQtd() {
        return this._qtd;
    }
    getValue() {
        return this._value;
    }
}