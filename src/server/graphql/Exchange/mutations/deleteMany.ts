import { mutationField, nonNull } from 'nexus'

export const ExchangeDeleteManyMutation = mutationField('deleteManyExchange', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ExchangeWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.exchange.deleteMany({ where } as any)
  },
})
