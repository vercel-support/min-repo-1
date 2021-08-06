import { mutationField, nonNull } from 'nexus'

export const FinancialGoalCreateOneMutation = mutationField(
  'createOneFinancialGoal',
  {
    type: nonNull('FinancialGoal'),
    args: {
      data: nonNull('FinancialGoalCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialGoal.create({
        data,
        ...select,
      })
    },
  },
)
