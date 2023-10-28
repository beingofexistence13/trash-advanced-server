import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Family'),
    items: [
      {
        label: t('Asif'),
        href: 'https://v2litepaper.pancakeswap.finance/',
      },
      {
        label: t('Sabbir'),
        href: 'https://docs.pancakeswap.finance/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Emon'),
        href: 'https://docs.pancakeswap.finance/brand',
      },
      {
        label: t('Sumon'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Shohan'),
        href: 'https://docs.pancakeswap.finance/contact-us/telegram',
      },
      {
        label: t('Adory Apa'),
        href: 'https://v2litepaper.pancakeswap.finance/',
      },
      {
        label: '—',
      },
      {
        label: t('Biplob Bhai'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.pancakeswap.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.pancakeswap.finance/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.pancakeswap.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.pancakeswap.finance/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.pancakeswap.finance/hiring/become-a-chef',
      },
    ],
  },
]
