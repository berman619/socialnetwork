const seedUsers = require('./userSeeds');
const seedThoughts = require('./thoughtSeeds');

const seedAll = async () => {
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedThoughts();
  console.log('\n----- THOUGHTS SEEDED -----\n');
  process.exit(0);
};

seedAll();