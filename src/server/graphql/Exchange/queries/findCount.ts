import { queryField, nonNull, list } from 'nexus'

export const ExchangeFindCountQuery = queryField('findManyExchangeCount', {
  type: nonNull('Int'),
  args: {
    where: 'ExchangeWhereInput',
    orderBy: list('ExchangeOrderByInput'),
    cursor: 'ExchangeWhereUniqueInput',
    distinct: 'ExchangeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.exchange.count(args as any)
  },
})
