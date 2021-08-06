import { mutationField, nonNull } from 'nexus'

export const FinancialInterestsUpdateOneMutation = mutationField(
  'updateOneFinancialInterests',
  {
    type: nonNull('FinancialInterests'),
    args: {
      where: nonNull('FinancialInterestsWhereUniqueInput'),
      data: nonNull('FinancialInterestsUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialInterests.update({
        where,
        data,
        ...select,
      })
    },
  },
)
