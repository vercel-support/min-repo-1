import { mutationField, nonNull } from 'nexus'

export const FinancialGoalStatusUpsertOneMutation = mutationField(
  'upsertOneFinancialGoalStatus',
  {
    type: nonNull('FinancialGoalStatus'),
    args: {
      where: nonNull('FinancialGoalStatusWhereUniqueInput'),
      create: nonNull('FinancialGoalStatusCreateInput'),
      update: nonNull('FinancialGoalStatusUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoalStatus.upsert({
        ...args,
        ...select,
      })
    },
  },
)
