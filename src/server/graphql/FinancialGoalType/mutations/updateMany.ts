import { mutationField, nonNull } from 'nexus'

export const FinancialGoalTypeUpdateManyMutation = mutationField(
  'updateManyFinancialGoalType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialGoalTypeWhereInput',
      data: nonNull('FinancialGoalTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialGoalType.updateMany(args as any)
    },
  },
)
