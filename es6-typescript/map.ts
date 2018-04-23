

const myMap: Map<any, string> = new Map();
myMap.set({'hello': 'world'}, 'foo bar');
myMap.set(() => {}, 'foo bar');
for (const item of myMap) {
    console.log(item);
}