// console.log(isEmpty({})) --> true
// console.log(isEmpty({name: "John" })) --> false

function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
  
    return true;
  }

  console.log(isEmpty({}));

  console.log(isEmpty({name: "John" }))