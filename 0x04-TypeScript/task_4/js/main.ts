/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />

import Teacher = Subjects.Teacher;
import Cpp = Subjects.Cpp;
import React = Subjects.React;
import Java = Subjects.Java;
export const cpp = new Cpp();
export const react = new React();
export const java = new Java();

export const cTeacher: Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
console.log('c++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.teacher= cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());