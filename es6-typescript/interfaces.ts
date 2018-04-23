declare var $: any

interface MyInterface {
    myFunc: (msg: string) => boolean;
}

class Person4 implements MyInterface {
    public myFunc(msg: string) {
        return true
    }
}

// tsconfig.lib

// declare var $: any

// definetly typed: npm install @types/jquery --save-dev
