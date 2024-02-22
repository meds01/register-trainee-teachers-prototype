// This is to simulate some fake API tokens for testing

const generatedTokens = [
  {
    tokenName: 'Token 1',
    tokenDescription: 'Maecenas at odio odio',
    lastUsedDate: '01/02/2024',
    expirationDate: '01/12/2024'
  },
  {
    tokenName: 'For Ernest Ryan',
    tokenDescription: 'Nulla dapibus vitae nisl vitae venenatis',
    lastUsedDate: 'Never',
    expirationDate: '01/12/2024'
  },
  {
    tokenName: "Carlie Yundt's",
    tokenDescription: 'Vestibulum lobortis neque libero.',
    lastUsedDate: '19/02/2024',
    expirationDate: '01/12/2024'
  }
]

function generateNewToken () {
  const part1 = 'yweuyi'
  const part2 = 172351273
  const token = (part1 + part2).toString()
  console.log(token)
  return token
}

const token = "Andrew's token"

module.exports = {
  generatedTokens,
  generateNewToken,
  token
}
