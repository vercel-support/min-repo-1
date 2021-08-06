import { mutationField, nonNull } from 'nexus'

export const ExchangeUpdateManyMutation = mutationField('updateManyExchange', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ExchangeWhereInput',
    data: nonNull('ExchangeUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.exchange.updateMany(args as any)
  },
})
