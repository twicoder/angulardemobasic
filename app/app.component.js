"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var model_1 = require("./model");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.model = new model_1.Model();
    }
    AppComponent.prototype.getName = function () {
        return this.model.user;
    };
    AppComponent.prototype.getTodoItems = function () {
        return this.model.items.filter(function (item) { return !item.done; });
    };
    AppComponent.prototype.addItem = function (newItem) {
        if (newItem != "") {
            this.model.items.push(new model_1.TodoItem(newItem, false));
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "todo-app",
            templateUrl: "app/app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
