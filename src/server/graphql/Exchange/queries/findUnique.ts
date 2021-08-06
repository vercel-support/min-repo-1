import { queryField, nonNull } from 'nexus'

export const ExchangeFindUniqueQuery = queryField('findUniqueExchange', {
  type: 'Exchange',
  args: {
    where: nonNull('ExchangeWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.exchange.findUnique({
      where,
      ...select,
    })
  },
})
