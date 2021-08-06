import { mutationField, nonNull } from 'nexus'

export const FinancialGoalStatusDeleteManyMutation = mutationField(
  'deleteManyFinancialGoalStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialGoalStatusWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialGoalStatus.deleteMany({ where } as any)
    },
  },
)
