import { queryField, nonNull } from 'nexus'

export const FinancialAccountFindUniqueQuery = queryField(
  'findUniqueFinancialAccount',
  {
    type: 'FinancialAccount',
    args: {
      where: nonNull('FinancialAccountWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialAccount.findUnique({
        where,
        ...select,
      })
    },
  },
)
