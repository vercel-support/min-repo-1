import { mutationField, nonNull } from 'nexus'

export const FinancialGoalDeleteOneMutation = mutationField(
  'deleteOneFinancialGoal',
  {
    type: 'FinancialGoal',
    args: {
      where: nonNull('FinancialGoalWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialGoal.delete({
        where,
        ...select,
      })
    },
  },
)
