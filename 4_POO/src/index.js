"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
//CLASE BASE O GENERIC
var User = /** @class */ (function () {
    function User() {
        this.id = (0, uuid_1.v4)();
    }
    return User;
}());
//CLASE TEACHER
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, course) {
        var _this = _super.call(this) || this;
        _this.IsDirector = true;
        _this.name = name;
        _this.role = "teacher";
        _this.course = course;
        return _this;
    }
    Teacher.prototype.getDataUser = function () {
        console.log(__assign({}, this));
    };
    return Teacher;
}(User));
//CLASE STUDENT
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        var _this = _super.call(this) || this;
        _this.course = [];
        _this.name = name;
        _this.role = "student";
        return _this;
    }
    Student.prototype.addCourse = function (value) {
        this.course.push(value);
    };
    Student.prototype.getDataUser = function () {
        console.log(__assign({}, this));
    };
    return Student;
}(User));
var teacher = new Teacher("john", "Course TypeScript");
teacher.getDataUser();
var student = new Student("John. Estudiante_TypeScript");
student.addCourse('1er Level - TypeScript');
student.getDataUser();
