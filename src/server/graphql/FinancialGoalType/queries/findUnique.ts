import { queryField, nonNull } from 'nexus'

export const FinancialGoalTypeFindUniqueQuery = queryField(
  'findUniqueFinancialGoalType',
  {
    type: 'FinancialGoalType',
    args: {
      where: nonNull('FinancialGoalTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialGoalType.findUnique({
        where,
        ...select,
      })
    },
  },
)
