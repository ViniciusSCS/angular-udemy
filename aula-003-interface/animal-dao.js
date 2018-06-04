"use strict";
exports.__esModule = true;
var animal_1 = require("../aula-002-classes/animal");
var AnimalDao = /** @class */ (function () {
    function AnimalDao() {
        this.tableName = '';
    }
    AnimalDao.prototype.insert = function (object) {
        console.log('inserting... ');
        object.mover(50);
        return true;
    };
    AnimalDao.prototype.update = function (object) {
        return true;
    };
    AnimalDao.prototype["delete"] = function (id) {
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new animal_1.Animal('Rex')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
