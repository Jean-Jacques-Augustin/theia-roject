/**
 *  variable declaration
 * variable assignment
 */

const myName: string = "John Doe"; // string
const myAge: number = 30; // number
const isMarried: boolean = false; // boolean
const myHobbies: string[] = ["coding", "reading", "writing"]; // array

/*
let const var

let : varivbale tsy naninona na tsy initialisée
const: variable tsy mainsty initialisé 
raha tsy atao reo de tonga de erreur
*/
let test: string;

const myName2: string;

// types
type user = {
     name: string;
     age: number;
     isMarried: boolean;
     hobbies: string[];
};

// interface

interface User {
     name: string;
     age: number;
     isMarried: boolean;
     hobbies: string[];
}

export const user: User = {
     name: "John Doe",
     age: 30,
     isMarried: false,
     hobbies: ["coding", "reading", "writing"],
};

class ExempleCalss implements User {
     constructor(
          public name: string,
          public age: number,
          public isMarried: boolean,
          public hobbies: string[]
     ) {}

     test = "blablbal";
}

class BlablExempleClasse implements User {
     constructor(
          name: string,
          age: number,
          isMarried: boolean,
          hobbies: string[]
     ) {}
     name: string;
     age: number;
     isMarried: boolean;
     hobbies: string[];
}

const exemple = new ExempleCalss("John Doe", 30, false, [
     "coding",
     "reading",
     "writing",
]);

/**
 * Decalre function
 */

function sayHello(name: string): string {
     return `Hello ${name}`;
}

const sayHello2 = (name: string): string => `Hello ${name}`;

/**
 * Call function
 */

sayHello("John Doe");

/**
 * Boucle
 */

for (let i = 0; i < 10; i++) {
     console.log(i);
}

const users: User[] = [
     {
          name: "John Doe",
          age: 30,
          isMarried: false,
          hobbies: ["coding", "reading", "writing"],
     },
     {
          name: "John Doe",
          age: 30,
          isMarried: false,
          hobbies: ["coding", "reading", "writing"],
     },
     {
          name: "John Doe",
          age: 30,
          isMarried: false,
          hobbies: ["coding", "reading", "writing"],
     },
];

users.map((user, k) => {
     console.log(user.name);
});

/**
 * Condition
 */

const iseEnable: boolean = true;

if (iseEnable) {
     console.log("Enable");
} else {
     console.log("Disable");
}

// Azo afohezina ho condition ? siVrai : siFaux

/**
 * Class
 */

const acceptButtonId = document.getElementById(
     "acceptButtonId"
) as HTMLButtonElement;

const updateButton = (enabled: boolean, inputLength: number) => {
     if (acceptButtonId) {
          if (enabled && inputLength > 0) {
               acceptButtonId.classList.remove("ap-view-disabled_btn");
               acceptButtonId.classList.add("ap-view-enabled_btn");
               acceptButtonId.removeAttribute("disabled");
          } else {
               acceptButtonId.classList.remove("ap-view-enabled_btn");
               acceptButtonId.classList.add("ap-view-disabled_btn");
               acceptButtonId.setAttribute("disabled", "");
          }
          acceptButtonId.style.border = "0";
     }
};

namespace Styles {
     export const button = {
          borderRadius: "0",
          border: "0",
     };
}