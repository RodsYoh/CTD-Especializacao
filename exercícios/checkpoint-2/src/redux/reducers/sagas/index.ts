import { all } from "redux-saga/effects";
import getCharacter from "./character-saga";

export default function* combineSagas(): Generator{
    return yield all([getCharacter]);
}