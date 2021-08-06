import { queryField, list } from 'nexus'

export const ExchangeAggregateQuery = queryField('aggregateExchange', {
  type: 'AggregateExchange',
  args: {
    where: 'ExchangeWhereInput',
    orderBy: list('ExchangeOrderByInput'),
    cursor: 'ExchangeWhereUniqueInput',
    distinct: 'ExchangeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exchange.aggregate({ ...args, ...select }) as any
  },
})
