import { mutationField, nonNull } from 'nexus'

export const FinancialGoalTypeUpdateOneMutation = mutationField(
  'updateOneFinancialGoalType',
  {
    type: nonNull('FinancialGoalType'),
    args: {
      where: nonNull('FinancialGoalTypeWhereUniqueInput'),
      data: nonNull('FinancialGoalTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialGoalType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
