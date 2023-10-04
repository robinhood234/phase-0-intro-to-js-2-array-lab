// Write your solution here!
  const cats =['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name) {
  cats.push('Ralph');
};
function destructivelyPrependCat(name) {
  cats.unshift('Bob');
};
function destructivelyRemoveLastCat() {
  cats.pop();
};
function destructivelyRemoveFirstCat() {
  cats.shift();
};
function appendCat(name) {
  const catName = [...cats, 'Broom'];
  return catName;
};
function prependCat(name) {
  const catRemoved = ['Arnold', ...cats];
  return catRemoved;
};
function removeLastCat() {
const dltLsCat = [...cats];
dltLsCat.pop();
return dltLsCat;
};

function  removeFirstCat() {
const fsCatDlt = [...cats];
fsCatDlt.shift();
return fsCatDlt;
};