import { mutationField, nonNull } from 'nexus'

export const FinancialGoalStatusCreateOneMutation = mutationField(
  'createOneFinancialGoalStatus',
  {
    type: nonNull('FinancialGoalStatus'),
    args: {
      data: nonNull('FinancialGoalStatusCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialGoalStatus.create({
        data,
        ...select,
      })
    },
  },
)
