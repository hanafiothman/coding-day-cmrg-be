const faker = require("faker")

const generateUser = (id, teamId) => {
  const name = faker.name.findName()
  const userName = name.toLowerCase().replace(/\s/g, "_")

  return {
    id,
    name,
    userName,
    email: `${userName}@codingday.com`,
    title: faker.random.boolean() ? faker.name.jobTitle() : undefined,
    avatar: faker.internet.avatar(),
    birthDate: faker.date.between("1970-01-01", "2000-12-12"),
    country: faker.address.country(),
    phone: faker.phone.phoneNumber(),
    isActive: faker.random.boolean(),
    description: faker.random.boolean() ? faker.lorem.sentences() : undefined,
    teamId,
  }
}

const generateTeam = (id) => {
  return {
    id,
    name: faker.company.companyName(),
    description: faker.random.boolean() ? faker.company.bs() : undefined,
    avatar: `https://picsum.photos/seed/team${id}/360/360`,
  }
}

const generateNews = (id, user) => {
  return {
    id,
    title: faker.random.words(),
    timestamp: faker.date.recent(50),
    message: faker.lorem.paragraphs(),
    icon: `https://picsum.photos/seed/news${id}/360/360`,
    author: {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
    },
  }
}

module.exports = () => {
  const getArr = (count) => Array(count).fill(0).map((x, index) => index + 1)

  const teams = getArr(47).map(generateTeam)
  const users = getArr(1000).map(id => (
    generateUser(
      id,
      faker.random.boolean() ? faker.random.arrayElement(teams).id : undefined
    )
  ))
  const news = getArr(64).map(id => (
    generateNews(id, faker.random.arrayElement(users))
  ))

  return { teams, users, news }
}
