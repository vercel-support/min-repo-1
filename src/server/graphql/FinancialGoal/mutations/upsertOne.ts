import { mutationField, nonNull } from 'nexus'

export const FinancialGoalUpsertOneMutation = mutationField(
  'upsertOneFinancialGoal',
  {
    type: nonNull('FinancialGoal'),
    args: {
      where: nonNull('FinancialGoalWhereUniqueInput'),
      create: nonNull('FinancialGoalCreateInput'),
      update: nonNull('FinancialGoalUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoal.upsert({
        ...args,
        ...select,
      })
    },
  },
)
