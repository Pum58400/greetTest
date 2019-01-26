const greet = require('./greet');


// Requirement 1
test('Write a method greet(name)',() => {
 expect(greet("Bob"));
});

test('when name is "Bob", the method should return a string "Hello, Bob."',() => {
    expect(greet("Bob")).toBe("Hello, Bob.");
   });

test('when name is "Pum", the method should return a string "Hello, Pum."',() => {
    expect(greet("Pum")).toBe("Hello, Pum.");
   });

//    Requirement 2
test('nulls by introducing a stand-in. For example, when name is null, then the method should return the string "Hello, my friend."',() => {
    expect(greet(null)).toBe("Hello, my friend.");
   });

//    Requirement 3
test('When name is all uppercase, then the method should shout back to the user',() => {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
   });

//    Requirement 4
test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () => {
    expect(greet(Array.of("Jill","Jane"))).toBe("Hello, Jill and Jane.");
})

//    Requirement 5
test('When name represents more than two names, separate them with commas and close with an Oxford comma and "and".',() => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
   });

//    Requirement 6
test('mixing of normal and shouted names by separating the response into two greetings',() => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

//    Requirement 7
test('If any entries in name are a string containing a comma, split it as its own input',() => {
    expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
   });

//    Requirement 8
test('put to escape intentional commas introduced by Requirement 7. These can be escaped in the same manner that CSV is, with double quotes surrounding the entry.when name is ["Bob", ""Charlie, Dianne""], then the method should return the string "Hello, Bob and Charlie, Dianne."', () => {
    expect(greet(Array.of("Bob","\"Charlie, Dianne\""))).toBe("Hello, Bob and Charlie, Dianne.");
})