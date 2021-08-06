import { mutationField, nonNull } from 'nexus'

export const FinancialInterestsDeleteOneMutation = mutationField(
  'deleteOneFinancialInterests',
  {
    type: 'FinancialInterests',
    args: {
      where: nonNull('FinancialInterestsWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialInterests.delete({
        where,
        ...select,
      })
    },
  },
)
