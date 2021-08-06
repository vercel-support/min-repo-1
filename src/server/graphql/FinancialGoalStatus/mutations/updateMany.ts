import { mutationField, nonNull } from 'nexus'

export const FinancialGoalStatusUpdateManyMutation = mutationField(
  'updateManyFinancialGoalStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialGoalStatusWhereInput',
      data: nonNull('FinancialGoalStatusUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialGoalStatus.updateMany(args as any)
    },
  },
)
