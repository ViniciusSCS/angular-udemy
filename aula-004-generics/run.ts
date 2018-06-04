import { Dao } from "./dao";
import { Animal } from "../aula-002-classes/animal";


let dao: Dao<Animal> = new Dao<Animal>();
let animal: Animal = new Animal('Rex');

dao.insert(animal);