import { mutationField, nonNull } from 'nexus'

export const FinancialGoalUpdateManyMutation = mutationField(
  'updateManyFinancialGoal',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialGoalWhereInput',
      data: nonNull('FinancialGoalUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialGoal.updateMany(args as any)
    },
  },
)
