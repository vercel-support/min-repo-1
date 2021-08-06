import { queryField, list } from 'nexus'

export const ExchangeFindFirstQuery = queryField('findFirstExchange', {
  type: 'Exchange',
  args: {
    where: 'ExchangeWhereInput',
    orderBy: list('ExchangeOrderByInput'),
    cursor: 'ExchangeWhereUniqueInput',
    distinct: 'ExchangeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exchange.findFirst({
      ...args,
      ...select,
    })
  },
})
