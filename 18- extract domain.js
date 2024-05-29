// function domainName(url){
//    return url
//   }

//   console.log(domainName("http://google.com"))

// console.log(/\bworld\b/.test("hello world"));

let text = "http.google.com";
let regex = /[a-z]\.(.*?)\.[a-z]/;

console.log(text.match(regex));
