import Cpp = Subjects.Cpp;
import React = Subjects.React;
import Java = Subjects.Java;
export const cpp = new Cpp();
export const react = new React();
export const java = new Java();

export const cTeacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
console.log('c++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());