import { queryField, nonNull } from 'nexus'

export const FinancialGoalStatusFindUniqueQuery = queryField(
  'findUniqueFinancialGoalStatus',
  {
    type: 'FinancialGoalStatus',
    args: {
      where: nonNull('FinancialGoalStatusWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialGoalStatus.findUnique({
        where,
        ...select,
      })
    },
  },
)
