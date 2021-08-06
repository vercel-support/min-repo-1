import { queryField, nonNull, list } from 'nexus'

export const ExchangeFindManyQuery = queryField('findManyExchange', {
  type: nonNull(list(nonNull('Exchange'))),
  args: {
    where: 'ExchangeWhereInput',
    orderBy: list('ExchangeOrderByInput'),
    cursor: 'ExchangeWhereUniqueInput',
    distinct: 'ExchangeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exchange.findMany({
      ...args,
      ...select,
    })
  },
})
