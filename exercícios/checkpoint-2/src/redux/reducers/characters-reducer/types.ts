import { Character } from "../../../components/characterTypes";

export type State = {
    characters: Array<Character>,
};

export type Action = {
    type: string;
    payload?:Array<Character>;
};