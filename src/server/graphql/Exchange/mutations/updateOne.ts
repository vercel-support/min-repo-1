import { mutationField, nonNull } from 'nexus'

export const ExchangeUpdateOneMutation = mutationField('updateOneExchange', {
  type: nonNull('Exchange'),
  args: {
    where: nonNull('ExchangeWhereUniqueInput'),
    data: nonNull('ExchangeUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.exchange.update({
      where,
      data,
      ...select,
    })
  },
})
