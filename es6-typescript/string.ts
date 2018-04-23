
const  helloWorld: string = 'hello world';
const message: string = `
this is line 1
this is line 2
${1 + 1}
${helloWorld}
`;

//message[3] = 'b';
console.log(message[3]);

for (const char of message) {
    console.log(char);
}