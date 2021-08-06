import { mutationField, nonNull } from 'nexus'

export const FinancialGoalStatusDeleteOneMutation = mutationField(
  'deleteOneFinancialGoalStatus',
  {
    type: 'FinancialGoalStatus',
    args: {
      where: nonNull('FinancialGoalStatusWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialGoalStatus.delete({
        where,
        ...select,
      })
    },
  },
)
