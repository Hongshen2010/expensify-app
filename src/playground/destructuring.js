// Object Destructuring
const book = {
    title: '三体',
    autor: 'Cixin Liu',
    publisher: {
        name: "Hongshen"
    }
};

const { title } = book;
const { name: publisherName = 'self-published' } = book.publisher;

console.log(`${title} is published by ${publisherName}`);

// Array Destructuring
const address = ['55th Webster Ave.', 'Jersey City', 'New Jersey', '07307'];

const [, city, state, ] = address;

console.log(`I live in ${city}, ${state}`);

const item = ['Coffee: Hot', '$2.00', '$2.50', '$2.75'];

const [coffee, ,mid, ] = item;

console.log(`A midium ${coffee} costs ${mid}`);