const backend =  new XMLHttpRequest();

backend.addEventListener('load', () => {
    console.log(backend.response);
});

// backend.open('GET', 'https://supersimplebackend.dev/products/first');
// backend.open('GET', 'https://supersimplebackend.dev/hello');
// backend.open('GET', 'https://supersimplebackend.dev/documentation');
// backend.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
backend.open('GET', 'https://supersimplebackend.dev');
backend.send();
