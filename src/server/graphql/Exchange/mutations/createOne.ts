import { mutationField, nonNull } from 'nexus'

export const ExchangeCreateOneMutation = mutationField('createOneExchange', {
  type: nonNull('Exchange'),
  args: {
    data: nonNull('ExchangeCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.exchange.create({
      data,
      ...select,
    })
  },
})
