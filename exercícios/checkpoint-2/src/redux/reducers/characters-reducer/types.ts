import { Character } from "../../../components/characterTypes";

export type State = {
        info: Array<string>;
        results: Array<Character>;
};

export type Action = {
    type: string;
    payload?:Array<Character>;
};