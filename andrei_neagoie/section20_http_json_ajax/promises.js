const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject("Error, this broke");
  }
});

promise.then(result => console.log(result)); //returns 'Stuff worked'


//multiple .then(s) is called chaining
promise
  .then(result => result + '!')
  .then(result2 => {
    console.log(result2); //returns 'Stuff worked!'
  });


  promise
  .then(result => result + '!')
  .then(result2 => {
    throw Error
    console.log(result2); //returns 'Stuff worked!'
  })
  .catch(() => console.log('error!')); //.catch catches any errors that may happen before it is called throughout the .then chain

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hi!')
  })

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie')
  })

  const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Is it me you're looking for?")
  })

  //Promise.all takes an array of promises as an argument and can return their resolved or rejected values as an array. The first time it returns it waits until all of the promise arguments are resolved before returning anything.
  Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
      console.log(values);
    })