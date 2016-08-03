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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var timeline_service_1 = require('../services/timeline.service');
var TimelineComponent = (function () {
    function TimelineComponent(router, timelineService) {
        this.router = router;
        this.timelineService = timelineService;
        this.title = 'Timeline';
        this.timeline = {
            startDate: '',
            days: []
        };
    }
    TimelineComponent.prototype.getTimeline = function () {
        var _this = this;
        this.timelineService.getTimeline()
            .then(function (timeline) { return _this.timeline = timeline; });
    };
    TimelineComponent.prototype.ngOnInit = function () {
        this.getTimeline();
    };
    TimelineComponent.prototype.goToDay = function (day) {
        this.selectedDay = day;
        this.formattedDay = moment(day.formattedDate).format('dddd MMMM D, YYYY');
    };
    TimelineComponent = __decorate([
        core_1.Component({
            selector: 'my-timeline',
            templateUrl: 'app/views/timeline.component.html',
            styleUrls: ['app/styles/timeline.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, timeline_service_1.TimelineService])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map