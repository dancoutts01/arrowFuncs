function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
} 

let double = arr => arr.map(val => val * 2)

document.addEventListener('click', function() {
    console.log('click')
})