"use strict";
exports.__esModule = true;
var animal_dao_1 = require("./animal-dao");
var animal_1 = require("../aula-002-classes/animal");
var dao = new animal_dao_1.AnimalDao();
var animal = new animal_1.Animal('Rex');
dao.insert(animal);
