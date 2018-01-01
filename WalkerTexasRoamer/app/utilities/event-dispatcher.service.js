"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var EventDispatcherService = (function () {
    function EventDispatcherService(document) {
        console.log('EventDispatcherService ctor');
        this._document = document;
    }
    EventDispatcherService.prototype.dispatchEvent = function (paramEventType) {
        console.log("EventDispatcherService dispatching:[" + paramEventType + "]");
        var bubbling = true;
        var cancelable = false;
        this._document.dispatchEvent(this.createEvent(paramEventType, bubbling, cancelable));
    };
    EventDispatcherService.prototype.createEvent = function (eventType, bubbleToDocument, cancelable) {
        var customEvent = null;
        try {
            customEvent = new CustomEvent(eventType, { bubbles: bubbleToDocument, cancelable: cancelable });
        }
        catch (error) {
            customEvent = this._document.createEvent("CustomEvent");
            customEvent.initCustomEvent(eventType, bubbleToDocument, cancelable, null);
        }
        return customEvent;
    };
    return EventDispatcherService;
}());
EventDispatcherService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], EventDispatcherService);
exports.EventDispatcherService = EventDispatcherService;
//# sourceMappingURL=event-dispatcher.service.js.map