const names = ['Mario', 'Giovanni', 'Luigi', 'Franca', 'Luisa', 'Sara', 'Manuel', 'Dylan', 'Erica', 'Oscar', 'Mauro', 'Silvia', 'Jessica', 'Jane', 'Matteo', 'Virgilia', 'Valentina']
const surnames = ['Rossi', 'Verdi', 'Brambilla', 'Brown', 'Holmes', 'Johnson', 'Fantozzi', 'Verace', 'Bettinelli', 'Adda', 'Zanichelli', 'Di Biagio', 'Villeneuve', 'Ncono']

module.exports = () => {
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({
      id: i,
      name: `${names[Math.floor(Math.random()*names.length)]}`,
      surname: `${surnames[Math.floor(Math.random()*surnames.length)]}`
     })
  }
  return data
}
