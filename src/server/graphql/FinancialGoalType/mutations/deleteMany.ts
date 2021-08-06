import { mutationField, nonNull } from 'nexus'

export const FinancialGoalTypeDeleteManyMutation = mutationField(
  'deleteManyFinancialGoalType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialGoalTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialGoalType.deleteMany({ where } as any)
    },
  },
)
