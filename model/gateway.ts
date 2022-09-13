import {Peripheral} from "./peripheral";

export class Gateway {
    uid: string;
    name: string;
    ipv4: string;
    peripheral: Array<Peripheral>;
}
