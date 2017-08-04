"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var feedService_1 = require("../../services/feedService");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var listComponent = (function () {
    function listComponent(fs, routerextensions) {
        var _this = this;
        this.fs = fs;
        this.routerextensions = routerextensions;
        this.isLoading = true;
        this.fs.getList().subscribe(function (data) {
            _this.myItems = data['_body']; //Bind data to myItems object
            _this.isLoading = false;
        }, function (error) {
            console.log("ERROR-> " + error); // Error getting the data
        });
    }
    listComponent.prototype.ngOnInit = function () {
        if (!ApplicationSettings.getBoolean("authenticated", false)) {
            this.routerextensions.navigate(["/login"], { clearHistory: true });
        }
    };
    listComponent.prototype.onItemTap = function (args) {
        var selected = this.myItems[args.index];
        this.getUserDetails(selected.id);
    };
    listComponent.prototype.logout = function () {
        ApplicationSettings.remove("authenticated");
        this.routerextensions.navigate(["/login"], { clearHistory: true });
    };
    listComponent.prototype.getUserDetails = function (clickedId) {
        var queryParams = {
            "passedId": clickedId
        };
        var transition;
        this.routerextensions.navigate(["details"], { queryParams: queryParams, transition: transition });
    };
    listComponent.prototype.onNavBtnTap = function () {
        this.routerextensions.navigate(["/sideDrawer"], { clearHistory: true });
    };
    return listComponent;
}());
listComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "list.component.html",
        providers: [feedService_1.feedService]
    }),
    __metadata("design:paramtypes", [feedService_1.feedService, router_1.RouterExtensions])
], listComponent);
exports.listComponent = listComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwREFBeUQ7QUFDekQsc0RBQStEO0FBQy9ELDBEQUE0RDtBQVU1RCxJQUFhLGFBQWE7SUFLdEIsdUJBQW1CLEVBQWUsRUFBUyxnQkFBa0M7UUFBN0UsaUJBT0M7UUFQa0IsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUdwQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDNUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSw2QkFBNkI7WUFDMUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUEseUJBQXlCO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ00sOEJBQU0sR0FBYjtRQUNJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0Qsc0NBQWMsR0FBZCxVQUFlLFNBQVM7UUFDcEIsSUFBSSxXQUFXLEdBQUc7WUFDZCxVQUFVLEVBQUUsU0FBUztTQUN4QixDQUFDO1FBRUYsSUFBSSxVQUE2QixDQUFDO1FBRWxDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFdBQVcsYUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztJQUU3RSxDQUFDO0lBQ0EsbUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksYUFBYTtJQVJ6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFDLENBQUMseUJBQVcsQ0FBQztLQUMxQixDQUFDO3FDQVF5Qix5QkFBVyxFQUEyQix5QkFBZ0I7R0FMcEUsYUFBYSxDQTBDekI7QUExQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGZlZWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZlZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6W2ZlZWRTZXJ2aWNlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBsaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgbXlJdGVtczogYW55O1xyXG4gICAgcHVibGljIGlzTG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGZzOiBmZWVkU2VydmljZSwgcHVibGljIHJvdXRlcmV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsKSB7XHJcbiAgICAgICAgdGhpcy5mcy5nZXRMaXN0KCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm15SXRlbXMgPSBkYXRhWydfYm9keSddOy8vQmluZCBkYXRhIHRvIG15SXRlbXMgb2JqZWN0XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SLT4gXCIgKyBlcnJvcik7Ly8gRXJyb3IgZ2V0dGluZyB0aGUgZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYoIUFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImF1dGhlbnRpY2F0ZWRcIiwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyZXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMubXlJdGVtc1thcmdzLmluZGV4XTtcclxuICAgICAgICB0aGlzLmdldFVzZXJEZXRhaWxzKHNlbGVjdGVkLmlkKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoXCJhdXRoZW50aWNhdGVkXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyZXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlckRldGFpbHMoY2xpY2tlZElkKSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBcInBhc3NlZElkXCI6IGNsaWNrZWRJZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2l0aW9uOiB7IG5hbWU6IFwic2xpZGVcIiB9O1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlcmV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZGV0YWlsc1wiXSwgeyBxdWVyeVBhcmFtcywgdHJhbnNpdGlvbiB9KTtcclxuXHJcbiAgICB9XHJcbiAgICAgb25OYXZCdG5UYXAoKXtcclxuICAgICAgIHRoaXMucm91dGVyZXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2lkZURyYXdlclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG59Il19