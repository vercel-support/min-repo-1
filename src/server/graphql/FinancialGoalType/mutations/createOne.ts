import { mutationField, nonNull } from 'nexus'

export const FinancialGoalTypeCreateOneMutation = mutationField(
  'createOneFinancialGoalType',
  {
    type: nonNull('FinancialGoalType'),
    args: {
      data: nonNull('FinancialGoalTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialGoalType.create({
        data,
        ...select,
      })
    },
  },
)
