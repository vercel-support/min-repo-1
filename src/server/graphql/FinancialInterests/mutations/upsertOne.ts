import { mutationField, nonNull } from 'nexus'

export const FinancialInterestsUpsertOneMutation = mutationField(
  'upsertOneFinancialInterests',
  {
    type: nonNull('FinancialInterests'),
    args: {
      where: nonNull('FinancialInterestsWhereUniqueInput'),
      create: nonNull('FinancialInterestsCreateInput'),
      update: nonNull('FinancialInterestsUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialInterests.upsert({
        ...args,
        ...select,
      })
    },
  },
)
