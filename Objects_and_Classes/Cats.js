function cats(data) {

    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let catsInfo = [];

    for (let i = 0; i < data.length; i++) {
        let tokkens = data[i].split(' ');
        let name = tokkens[0];
        let age = tokkens[1];

        let cat = new Cat(name, age);

        catsInfo.push(cat);
    } 

    for (let cat of catsInfo) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
