import { mutationField, nonNull } from 'nexus'

export const FinancialGoalDeleteManyMutation = mutationField(
  'deleteManyFinancialGoal',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialGoalWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialGoal.deleteMany({ where } as any)
    },
  },
)
