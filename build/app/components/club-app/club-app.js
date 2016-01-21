System.register(["angular2/core", "./../tabs/club-tab"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, club_tab_1;
    var ClubApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (club_tab_1_1) {
                club_tab_1 = club_tab_1_1;
            }],
        execute: function() {
            ClubApp = (function () {
                function ClubApp() {
                }
                ClubApp = __decorate([
                    core_1.Component({
                        selector: 'club-app',
                        directives: [club_tab_1.ClubTab],
                        template: "<div>\n        Welcome to CubApp\n        <club-tab></club-tab>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ClubApp);
                return ClubApp;
            })();
            exports_1("ClubApp", ClubApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NsdWItYXBwL2NsdWItYXBwLnRzIl0sIm5hbWVzIjpbIkNsdWJBcHAiLCJDbHViQXBwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFXSUE7Z0JBRUFDLENBQUNBO2dCQWJMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxVQUFVQTt3QkFDcEJBLFVBQVVBLEVBQUNBLENBQUNBLGtCQUFPQSxDQUFDQTt3QkFDcEJBLFFBQVFBLEVBQ1JBLG1GQUlDQTtxQkFDSkEsQ0FBQ0E7OzRCQUtEQTtnQkFBREEsY0FBQ0E7WUFBREEsQ0FkQSxBQWNDQSxJQUFBO1lBZEQsNkJBY0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jbHViLWFwcC9jbHViLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgQ2x1YlRhYiB9IGZyb20gXCIuLy4uL3RhYnMvY2x1Yi10YWJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2x1Yi1hcHAnLFxuICAgIGRpcmVjdGl2ZXM6W0NsdWJUYWJdLFxuICAgIHRlbXBsYXRlOlxuICAgIGA8ZGl2PlxuICAgICAgICBXZWxjb21lIHRvIEN1YkFwcFxuICAgICAgICA8Y2x1Yi10YWI+PC9jbHViLXRhYj5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIENsdWJBcHB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
