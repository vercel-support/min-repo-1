import { mutationField, nonNull } from 'nexus'

export const ExchangeUpsertOneMutation = mutationField('upsertOneExchange', {
  type: nonNull('Exchange'),
  args: {
    where: nonNull('ExchangeWhereUniqueInput'),
    create: nonNull('ExchangeCreateInput'),
    update: nonNull('ExchangeUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exchange.upsert({
      ...args,
      ...select,
    })
  },
})
