/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'horse'

type ColorAnimal = `${Color}-${Animal}`;

const redDog: ColorAnimal = 'red-dog';
const blackCat: ColorAnimal = 'black-cat';
const greenHorse: ColorAnimal = 'green-horse';