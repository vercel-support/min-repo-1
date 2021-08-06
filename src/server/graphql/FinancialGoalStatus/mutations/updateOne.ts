import { mutationField, nonNull } from 'nexus'

export const FinancialGoalStatusUpdateOneMutation = mutationField(
  'updateOneFinancialGoalStatus',
  {
    type: nonNull('FinancialGoalStatus'),
    args: {
      where: nonNull('FinancialGoalStatusWhereUniqueInput'),
      data: nonNull('FinancialGoalStatusUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialGoalStatus.update({
        where,
        data,
        ...select,
      })
    },
  },
)
