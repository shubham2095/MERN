const obj ={
    name: "S",
    age:21
}

//  no changes allowed in freeze 

// Object.freeze(obj)


// only update the current value no add no delete in seal

// Object.seal(obj)


// No addition in case of prevent extension only update and delete

// Object.preventExtensions(obj)

delete obj.age
obj.city = "Delhi"
obj.name = "D"

console.log(obj);
