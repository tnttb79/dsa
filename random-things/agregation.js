"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Professor = /** @class */ (function () {
    function Professor(name) {
        this.name = name;
    }
    Professor.prototype.getName = function () {
        return this.name;
    };
    return Professor;
}());
var Department = /** @class */ (function () {
    function Department(name, professor) {
        this.professor = [];
        this.name = name;
        if (professor !== undefined) {
            this.professor.push(professor);
        }
    }
    Department.prototype.addProf = function (professor) {
        this.professor.push(professor);
    };
    Department.prototype.getAllProfessor = function () {
        for (var _i = 0, _a = this.professor; _i < _a.length; _i++) {
            var professor = _a[_i];
            console.log("professor: " + professor.getName());
        }
    };
    return Department;
}());
var prof1 = new Professor("Thang");
var prof2 = new Professor("Thang2");
var prof3 = new Professor("Thang3");
var department = new Department("Math");
department.addProf(prof1);
department.addProf(prof2);
department.addProf(prof3);
department.getAllProfessor();
