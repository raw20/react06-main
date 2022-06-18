const list = [1, 2, 3, 4, 5, "a", "b"];
const list2 = [...list, "d"];
console.log("list2 : ", list2);
const obj = { a: 1, b: 2, c: 3 };
//const obj2=obj   참조만 맞춘것
const obj2 = { ...obj, c: 4, b: 1, e: 8 };
console.log("obj2 : ", obj2);
