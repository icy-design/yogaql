import gql from 'graphql-tag';

export const fakeDefinition = gql`
enum fake__Locale {
  az
  cz
  de
  de_AT
  de_CH
  en
  en_AU
  en_BORK
  en_CA
  en_GB
  en_IE
  en_IND
  en_US
  en_au_ocker
  es
  es_MX
  fa
  fr
  fr_CA
  ge
  id_ID
  it
  ja
  ko
  nb_NO
  nep
  nl
  pl
  pt_BR
  ru
  sk
  sv
  tr
  uk
  vi
  zh_CN
  zh_TW
}

enum fake__Types {
  zipCode
  city
  streetName
  "Configure address with option \`useFullAddress\`"
  streetAddress
  secondaryAddress
  county
  country
  countryCode
  state
  stateAbbr
  latitude
  longitude

  colorName
  productCategory
  productName
  "Sum of money. Configure with options \`minMoney\`/\`maxMoney\` and 'decimalPlaces'."
  money
  productMaterial
  product

  companyName
  companyCatchPhrase
  companyBS

  dbColumn
  dbType
  dbCollation
  dbEngine

  "Configure date format with option \`dateFormat\`"
  pastDate
  "Configure date format with option \`dateFormat\`"
  futureDate
  "Configure date format with option \`dateFormat\`"
  recentDate

  financeAccountName
  financeTransactionType
  currencyCode
  currencyName
  currencySymbol
  bitcoinAddress
  internationalBankAccountNumber
  bankIdentifierCode

  hackerAbbr
  hackerPhrase

  "An image url. Configure image with options: \`imageCategory\`, \`imageWidth\`, \`imageHeight\` and \`randomizeImageUrl\`"
  imageUrl
  "An URL for an avatar"
  avatarUrl
  "Configure email provider with option: \`emailProvider\`"
  email
  url
  domainName
  ipv4Address
  ipv6Address
  userAgent
  "Configure color with option: \`baseColor\`"
  colorHex
  macAddress
  "Configure password with option \`passwordLength\`"
  password

  "Lorem Ipsum text. Configure size with option \`loremSize\`"
  lorem

  firstName
  lastName
  fullName
  jobTitle

  phoneNumber
  mobileNumber

  number
  uuid
  word
  words
  locale

  filename
  mimeType
  fileExtension
  semver
}

enum fake__imageCategory {
  abstract
  animals
  business
  cats
  city
  food
  nightlife
  fashion
  people
  nature
  sports
  technics
  transport
}

enum fake__loremSize {
  word
  words
  sentence
  sentences
  paragraph
  paragraphs
}

input fake__color {
  red255: Int = 0
  green255: Int = 0
  blue255: Int = 0
}

input fake__options {
  "Only for type \`streetAddress\`"
  useFullAddress: Boolean
  "Only for type \`money\`"
  minMoney: Float
  "Only for type \`money\`"
  maxMoney: Float
  "Only for type \`money\`"
  decimalPlaces: Int
  "Only for type \`imageUrl\`"
  imageWidth: Int
  "Only for type \`imageUrl\`"
  imageHeight: Int
  "Only for type \`imageUrl\`"
  imageCategory: fake__imageCategory
  "Only for type \`imageUrl\`"
  randomizeImageUrl: Boolean
  "Only for type \`email\`"
  emailProvider: String
  "Only for type \`password\`"
  passwordLength: Int
  "Only for type \`lorem\`"
  loremSize: fake__loremSize
  "Only for types \`*Date\`. Example value: \`YYYY MM DD\`. [Full Specification](http://momentjs.com/docs/#/displaying/format/)"
  dateFormat: String
  "Only for type \`colorHex\`. [Details here](https://stackoverflow.com/a/43235/4989887)"
  baseColor: fake__color = { red255: 0, green255: 0, blue255: 0 }
  "Only for type \`number\`"
  minNumber: Float
  "Only for type \`number\`"
  maxNumber: Float
  "Only for type \`number\`"
  precisionNumber: Float
}

directive @fake(type:fake__Types!, options: fake__options = {}, locale:fake__Locale) on FIELD_DEFINITION | SCALAR

directive @listLength(min: Int!, max: Int!) on FIELD_DEFINITION

scalar examples__JSON
directive @examples(values: [examples__JSON]!) on FIELD_DEFINITION | SCALAR
`;
