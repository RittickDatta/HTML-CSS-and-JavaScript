const person = {
    name: {
      firstName: 'Rittick',
      lastName: 'Datta',
    },
    age: {
      value: 29,
      dob: {
        day: 14,
        month: 'Dec',
        year: 1990,
      },
    },
    address: {
      country: 'India',
      state: 'Delhi',
      city: 'New Delhi',
    },
    phone: {
      extension: '+91',
      number: '9821070947',
    },
    email: {
      value: 'drittick@gmail.com',
      workEmail: false,
    },
  };
  
  const scanPerson = (getInfo) => {
    switch (getInfo.infoType) {
      case 'name':
        return {
          name: person.name,
          desc: `First name is ${person.name.firstName} and last name is ${person.name.lastName}.`,
        }.desc;
        break;
      case 'age':
        return {
          age: person.age,
          desc: `${person.name.firstName}'s age is ${person.age.value}, born on ${person.age.dob.day} ${person.age.dob.month} ${person.age.dob.year}.`,
        }.desc;
        break;
      case 'address':
        return {
          address: person.address,
          desc: `${person.name.firstName} lives in ${person.address.city}. It is in ${person.address.state}, ${person.address.country}.`,
        }.desc;
        break;
      case 'phone':
        return {
          phone: person.phone,
          desc: `${person.name.firstName}'s phone number is ${person.phone.number}. Please use the extension: ${person.phone.extension}.`,
        }.desc;
        break;
      case 'email':
        return {
          email: person.email,
          desc: `${person.name.firstName}'s email is ${
            person.email.value
          }. It is ${person.email.workEmail ? 'his' : 'not his'} work email.`,
        }.desc;
        break;
      default:
        return person;
    }
  };
  
  const getPersonDetails = (
    keys = ['name', 'age', 'address', 'phone', 'email']
  ) => {
    for (let key of keys) {
      console.log(scanPerson({ infoType: key, description: true }));
    }
  };
  
  getPersonDetails();