const FindTheOldest = function(people) {
    return people.reduce((oldest, current) => {
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const currentAge = current.yearOfDeath - current.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
  });

};

const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    const currentYear = new Date().getFullYear();

    const getAge = person => {
      const deathYear = person.yearOfDeath || currentYear;
      return deathYear - person.yearOfBirth;
    };

    return getAge(current) > getAge(oldest) ? current : oldest;
  });
};
// Do not edit below this line
module.exports = findTheOldest;
