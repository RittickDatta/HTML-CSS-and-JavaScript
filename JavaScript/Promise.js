const getTicket = new Promise((resolve, reject) => {
  const gotTickets = true;
  if (gotTickets) {
    resolve('We have the tickets.');
  } else {
    reject('The show is sold out!');
  }
});

const getPopcorn = getTicket
    .then((message) => {
        return new Promise(( resolve, reject) => {
            const gotPopcorn = true;
            if(gotPopcorn) {
                resolve(message + '\nWe got popcorn.')
            } else {
                reject('They are out of popcorn.')
            }
        })
    });

    getPopcorn.then((data) => {
        console.log(data+'\nWe have everything.');
    })
