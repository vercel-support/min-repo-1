import { mutationField, nonNull } from 'nexus'

export const ExchangeDeleteOneMutation = mutationField('deleteOneExchange', {
  type: 'Exchange',
  args: {
    where: nonNull('ExchangeWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.exchange.delete({
      where,
      ...select,
    })
  },
})
