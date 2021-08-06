import { mutationField, nonNull } from 'nexus'

export const FinancialGoalTypeDeleteOneMutation = mutationField(
  'deleteOneFinancialGoalType',
  {
    type: 'FinancialGoalType',
    args: {
      where: nonNull('FinancialGoalTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialGoalType.delete({
        where,
        ...select,
      })
    },
  },
)
