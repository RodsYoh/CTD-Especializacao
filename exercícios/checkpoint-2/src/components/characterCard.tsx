import { Character } from "./characterTypes";

export default function Card({ name, image }: Character) {
    return (
      <li>
        <p>{image}</p>
        <p>{name}</p>
      </li>
    );
  }