import { mutationField, nonNull } from 'nexus'

export const FinancialGoalTypeUpsertOneMutation = mutationField(
  'upsertOneFinancialGoalType',
  {
    type: nonNull('FinancialGoalType'),
    args: {
      where: nonNull('FinancialGoalTypeWhereUniqueInput'),
      create: nonNull('FinancialGoalTypeCreateInput'),
      update: nonNull('FinancialGoalTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialGoalType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
