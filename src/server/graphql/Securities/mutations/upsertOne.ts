import { mutationField, nonNull } from 'nexus'

export const SecuritiesUpsertOneMutation = mutationField(
  'upsertOneSecurities',
  {
    type: nonNull('Securities'),
    args: {
      where: nonNull('SecuritiesWhereUniqueInput'),
      create: nonNull('SecuritiesCreateInput'),
      update: nonNull('SecuritiesUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.securities.upsert({
        ...args,
        ...select,
      })
    },
  },
)
