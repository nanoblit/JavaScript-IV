var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("GameObject", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var GameObject = (function () {
        function GameObject(props) {
            this.createdAt = props.createdAt;
            this.name = props.name;
            this.dimentions = props.dimentions;
        }
        GameObject.prototype.destroy = function () {
            return this.name + " was removed from the game.";
        };
        return GameObject;
    }());
    exports.GameObject = GameObject;
});
define("CharacterStats", ["require", "exports", "GameObject"], function (require, exports, GameObject_1) {
    "use strict";
    exports.__esModule = true;
    var CharacterStats = (function (_super) {
        __extends(CharacterStats, _super);
        function CharacterStats(props) {
            var _this = _super.call(this, props) || this;
            _this.healthPoints = props.healthPoints;
            return _this;
        }
        CharacterStats.prototype.takeDamage = function (damage) {
            if (damage === void 0) { damage = 10; }
            this.healthPoints -= damage;
            var returnString = this.name + " took damage.";
            if (this.healthPoints <= 0) {
                returnString += " They fainted!";
            }
            return returnString;
        };
        return CharacterStats;
    }(GameObject_1.GameObject));
    exports.CharacterStats = CharacterStats;
});
define("Humanoid", ["require", "exports", "CharacterStats"], function (require, exports, CharacterStats_1) {
    "use strict";
    exports.__esModule = true;
    var Humanoid = (function (_super) {
        __extends(Humanoid, _super);
        function Humanoid(props) {
            var _this = _super.call(this, props) || this;
            _this.team = props.team;
            _this.weapons = props.weapons;
            _this.language = props.language;
            return _this;
        }
        Humanoid.prototype.greet = function () {
            return this.name + " offers a greeting in " + this.language;
        };
        return Humanoid;
    }(CharacterStats_1.CharacterStats));
    exports.Humanoid = Humanoid;
});
define("Hero", ["require", "exports", "Humanoid"], function (require, exports, Humanoid_1) {
    "use strict";
    exports.__esModule = true;
    var Hero = (function (_super) {
        __extends(Hero, _super);
        function Hero(props) {
            var _this = _super.call(this, props) || this;
            _this.attack = props.attack;
            return _this;
        }
        Hero.prototype.attackEnemy = function (foe) {
            console.log(this.name + " uses " + this.attack.name + " on " + foe.name + " dealing " + this.attack.damage + " damage!");
            console.log(foe.takeDamage(this.attack.damage));
        };
        return Hero;
    }(Humanoid_1.Humanoid));
    exports.Hero = Hero;
});
define("Person", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Person = (function () {
        function Person(props) {
            this.name = props.name;
            this.age = props.age;
            this.location = props.location;
            this.gender = props.gender;
        }
        Person.prototype.speak = function () {
            console.log("Hello my name is " + this.name + ", I am from " + this.location);
        };
        return Person;
    }());
    exports.Person = Person;
});
define("Student", ["require", "exports", "Person"], function (require, exports, Person_1) {
    "use strict";
    exports.__esModule = true;
    var Student = (function (_super) {
        __extends(Student, _super);
        function Student(props) {
            var _this = _super.call(this, props) || this;
            _this.previousBackground = props.previousBackground;
            _this.className = props.className;
            _this.favSubjects = props.favSubjects;
            _this.grade = props.grade;
            return _this;
        }
        Student.prototype.listsSubjects = function () {
            console.log(this.favSubjects.join(", "));
        };
        Student.prototype.PRAssignment = function (subject) {
            console.log(this.name + " has submitted a PR for " + subject);
        };
        Student.prototype.sprintChallenge = function (subject) {
            console.log(this.name + " has begun sprint challenge on " + subject);
        };
        Student.prototype.graduate = function () {
            if (this.grade > 70) {
                console.log(this.name + " has graduated!");
            }
        };
        return Student;
    }(Person_1.Person));
    exports.Student = Student;
});
define("instructor", ["require", "exports", "Person"], function (require, exports, Person_2) {
    "use strict";
    exports.__esModule = true;
    var Instructor = (function (_super) {
        __extends(Instructor, _super);
        function Instructor(props) {
            var _this = _super.call(this, props) || this;
            _this.specialty = props.specialty;
            _this.favLanguage = props.favLanguage;
            _this.catchPhrase = props.catchPhrase;
            return _this;
        }
        Instructor.prototype.demo = function (subject) {
            console.log("Today we are learning about " + subject);
        };
        Instructor.prototype.grade = function (student, subject) {
            console.log(student.name + " receives a perfect score on " + subject);
        };
        return Instructor;
    }(Person_2.Person));
    exports.Instructor = Instructor;
});
define("ProjectManager", ["require", "exports", "instructor"], function (require, exports, Instructor_1) {
    "use strict";
    exports.__esModule = true;
    var ProjectManager = (function (_super) {
        __extends(ProjectManager, _super);
        function ProjectManager(props) {
            var _this = _super.call(this, props) || this;
            _this.gradClassName = props.gradClassName;
            _this.favInstructor = props.favInstructor;
            return _this;
        }
        ProjectManager.prototype.standUp = function (channel) {
            console.log(this.name + " announces to " + channel + ", @channel standy times!\u200B\u200B\u200B\u200B\u200B");
        };
        ProjectManager.prototype.debugCode = function (_a, subject) {
            var name = _a.name;
            console.log(this.name + " debugs " + name + "'s code on " + subject);
        };
        ProjectManager.prototype.gradeStudent = function (student) {
            student.grade += Math.round(Math.random() * 20 - 10);
        };
        return ProjectManager;
    }(Instructor_1.Instructor));
    exports.ProjectManager = ProjectManager;
});
define("Villain", ["require", "exports", "Humanoid"], function (require, exports, Humanoid_2) {
    "use strict";
    exports.__esModule = true;
    var Villain = (function (_super) {
        __extends(Villain, _super);
        function Villain(props) {
            return _super.call(this, props) || this;
        }
        Villain.prototype.runAway = function () {
            console.log(this.name + " tries to run away!");
        };
        return Villain;
    }(Humanoid_2.Humanoid));
    exports.Villain = Villain;
});
define("lambda-classes", ["require", "exports", "Person", "instructor", "Student", "ProjectManager"], function (require, exports, Person_3, Instructor_2, Student_1, ProjectManager_1) {
    "use strict";
    exports.__esModule = true;
    var jon = new Person_3.Person({
        name: "Jon",
        location: "Burningfyre",
        age: 20,
        gender: "male"
    });
    jon.speak();
    var adam = new Person_3.Person({
        name: "Adam",
        location: "Flup",
        age: 28,
        gender: "male"
    });
    adam.speak();
    var emily = new Student_1.Student({
        name: "Emily",
        location: "Fundrom",
        age: 19,
        gender: "female",
        previousBackground: "shopkeeper",
        className: "CS54665",
        favSubjects: ["CSS", "JS"],
        grade: 56
    });
    emily.listsSubjects();
    var albert = new Student_1.Student({
        name: "Albert",
        location: "Stumpfield",
        age: 37,
        gender: "male",
        previousBackground: "lumberjack",
        className: "CS12",
        favSubjects: ["JavaScript"],
        grade: 34
    });
    albert.sprintChallenge("React");
    albert.PRAssignment("React");
    var fred = new Instructor_2.Instructor({
        name: "Fred",
        location: "Bedrock",
        age: 37,
        gender: "male",
        favLanguage: "JavaScript",
        specialty: "Front-end",
        catchPhrase: "Don't forget the homies"
    });
    fred.demo("JavaScript");
    var gabe = new Instructor_2.Instructor({
        name: "Gabe",
        location: "London",
        age: 30,
        gender: "male",
        favLanguage: "JavaScript",
        specialty: "Front-end",
        catchPhrase: "Ooh, you are awful ... but I like you!"
    });
    fred.grade(emily, "CSS");
    var adrian = new ProjectManager_1.ProjectManager({
        name: "Adrian",
        location: "Bedrock",
        age: 37,
        gender: "male",
        favLanguage: "JavaScript",
        specialty: "Front-end",
        catchPhrase: "Don't forget the homies",
        gradClassName: "CS34342",
        favInstructor: gabe
    });
    adrian.standUp("CS34342");
    var filip = new ProjectManager_1.ProjectManager({
        name: "Filip",
        location: "Bedrock",
        age: 37,
        gender: "male",
        favLanguage: "JavaScript",
        specialty: "Front-end",
        catchPhrase: "Don't forget the homies",
        gradClassName: "CS42",
        favInstructor: fred
    });
    filip.debugCode(emily, "JavaScript");
});
define("prototype-refactor", ["require", "exports", "Humanoid", "Hero", "Villain"], function (require, exports, Humanoid_3, Hero_1, Villain_1) {
    "use strict";
    exports.__esModule = true;
    var mage = new Humanoid_3.Humanoid({
        createdAt: new Date(),
        dimentions: {
            length: 2,
            width: 1,
            height: 1
        },
        healthPoints: 5,
        name: "Bruce",
        team: "Mage Guild",
        weapons: ["Staff of Shamalama"],
        language: "Common Tongue"
    });
    var swordsman = new Humanoid_3.Humanoid({
        createdAt: new Date(),
        dimentions: {
            length: 2,
            width: 2,
            height: 2
        },
        healthPoints: 15,
        name: "Sir Mustachio",
        team: "The Round Table",
        weapons: ["Giant Sword", "Shield"],
        language: "Common Tongue"
    });
    var archer = new Humanoid_3.Humanoid({
        createdAt: new Date(),
        dimentions: {
            length: 1,
            width: 2,
            height: 4
        },
        healthPoints: 10,
        name: "Lilith",
        team: "Forest Kingdom",
        weapons: ["Bow", "Dagger"],
        language: "Elvish"
    });
    console.log(mage.createdAt);
    console.log(archer.dimentions);
    console.log(swordsman.healthPoints);
    console.log(mage.name);
    console.log(swordsman.team);
    console.log(mage.weapons);
    console.log(archer.language);
    console.log(archer.greet());
    console.log(mage.takeDamage());
    console.log(swordsman.destroy());
    var allMight = new Hero_1.Hero({
        createdAt: new Date(),
        dimentions: {
            length: 5,
            width: 3,
            height: 10
        },
        healthPoints: 1000,
        name: "All Might",
        team: "UA",
        weapons: ["Fists"],
        language: "Japanese",
        attack: {
            name: "Smash",
            damage: 1000
        }
    });
    var nomu = new Villain_1.Villain({
        createdAt: new Date(),
        dimentions: {
            length: 10,
            width: 10,
            height: 10
        },
        healthPoints: 10000,
        name: "Nomu",
        team: "Villains",
        weapons: ["Whole Body"],
        language: "None"
    });
    while (true) {
        allMight.attackEnemy(nomu);
        if (nomu.healthPoints <= 0)
            break;
        nomu.runAway();
    }
});
//# sourceMappingURL=index.js.map