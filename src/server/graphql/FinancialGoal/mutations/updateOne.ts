import { mutationField, nonNull } from 'nexus'

export const FinancialGoalUpdateOneMutation = mutationField(
  'updateOneFinancialGoal',
  {
    type: nonNull('FinancialGoal'),
    args: {
      where: nonNull('FinancialGoalWhereUniqueInput'),
      data: nonNull('FinancialGoalUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialGoal.update({
        where,
        data,
        ...select,
      })
    },
  },
)
