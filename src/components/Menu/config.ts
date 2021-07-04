import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Bowls',
    icon: 'PoolIcon',
    href: '/bowls',
  },
  {
   label: 'Lottery (CommingSoon)',
   icon: 'TicketIcon',
   href: '/lottery',
},
  
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/',
      },
      {
        label: 'CoinGecko (Pending)',
        href: 'https://www.coingecko.com/en/coins/',
      },
      {
        label: 'CoinMarketCap (Pending)',
        href: 'https://coinmarketcap.com/currencies/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: 'Docs (Pending)',
        href: 'https://jellycake.gitbook.io/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com',
      },
    ],
  },
  {
    label: 'Audits',
    icon: 'AuditIcon',
    href: 'https://www.github.com',
  },
  {
    label: 'RoadMap',
    icon: 'AuditIcon',
    href: 'https://www.github.com',
  },
]

export default config
