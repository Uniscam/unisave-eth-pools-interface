export type VestNFT = {
  attributes: string,
  levelLong: string,
  levelShort: string,
  displayName: string,
  bestCost: number,
  image: string,
}

type VestNFTs = {
  holder: Array<VestNFT>,
  referral: Array<VestNFT>,
  volunteer: Array<VestNFT>,
  governance: Array<VestNFT>,
  timestamp: Array<VestNFT>,
  game: Array<VestNFT>,
}

export const VestNFTs: VestNFTs = {
  holder: [
    {
      attributes: 'Holder',
      levelLong: 'Pirates',
      levelShort: '(P1)',
      displayName: 'Usopp',
      bestCost: 100,
      image: 'vestnft.png',
    },
    {
      attributes: 'Holder',
      levelLong: 'General',
      levelShort: '(G1)',
      displayName: 'Ace',
      bestCost: 1000,
      image: 'vestnft.png',
    },
    {
      attributes: 'Holder',
      levelLong: 'King',
      levelShort: '(K1)',
      displayName: 'Luffy',
      bestCost: 10000,
      image: 'vestnft.png',
    },
  ],
  referral: [
    {
      attributes: 'Referral',
      levelLong: 'Pirates',
      levelShort: '(P1)',
      displayName: 'Alvida',
      bestCost: 100,
      image: 'vestnft.png',
    },
    {
      attributes: 'Referral',
      levelLong: 'General',
      levelShort: '(G1)',
      displayName: 'Smoker',
      bestCost: 1000,
      image: 'vestnft.png',
    },
    {
      attributes: 'Referral',
      levelLong: 'King',
      levelShort: '(K1)',
      displayName: 'Kuzan',
      bestCost: 10000,
      image: 'vestnft.png',
    },
  ],
  volunteer: [
    {
      attributes: 'Volunteer',
      levelLong: 'Pirates',
      levelShort: '(P1)',
      displayName: 'Inazuma',
      bestCost: 100,
      image: 'vestnft.png',
    },
    {
      attributes: 'Volunteer',
      levelLong: 'General',
      levelShort: '(G1)',
      displayName: 'Koala',
      bestCost: 1000,
      image: 'vestnft.png',
    },
    {
      attributes: 'Volunteer',
      levelLong: 'King',
      levelShort: '(K1)',
      displayName: 'Monkey D. Dragon',
      bestCost: 10000,
      image: 'vestnft.png',
    },
  ],
  governance: [
    {
      attributes: 'Governance',
      levelLong: 'Pirates',
      levelShort: '(P1)',
      displayName: 'Coupon',
      bestCost: 100,
      image: 'vestnft.png',
    },
    {
      attributes: 'Governance',
      levelLong: 'General',
      levelShort: '(G1)',
      displayName: 'Book',
      bestCost: 1000,
      image: 'vestnft.png',
    },
    {
      attributes: 'Governance',
      levelLong: 'King',
      levelShort: '(K1)',
      displayName: 'Medal',
      bestCost: 10000,
      image: 'vestnft.png',
    },
  ],
  timestamp: [
    {
      attributes: 'Day',
      levelLong: 'Pirates',
      levelShort: '(P1)',
      displayName: 'Pirate',
      bestCost: 100,
      image: 'vestnft.png',
    },
    {
      attributes: 'Month',
      levelLong: 'General',
      levelShort: '(G1)',
      displayName: 'Yonko',
      bestCost: 1000,
      image: 'vestnft.png',
    },
    {
      attributes: 'Year',
      levelLong: 'King',
      levelShort: '(K1)',
      displayName: 'One Piece',
      bestCost: 10000,
      image: 'vestnft.png',
    },
  ],
  game: [
    {
      attributes: 'Raffle',
      levelLong: 'Pirates',
      levelShort: '(P1)',
      displayName: 'Smoke Fruit',
      bestCost: 100,
      image: 'vestnft.png',
    },
    {
      attributes: 'Raffle',
      levelLong: 'General',
      levelShort: '(G1)',
      displayName: 'Sand-Sand Fruit',
      bestCost: 1000,
      image: 'vestnft.png',
    },
    {
      attributes: 'Raffle',
      levelLong: 'King',
      levelShort: '(K1)',
      displayName: 'Mera-Mera Fruit',
      bestCost: 10000,
      image: 'vestnft.png',
    },
  ],
}
