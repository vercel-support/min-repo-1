import { queryField, nonNull } from 'nexus'

export const FinancialAccountTypeFindUniqueQuery = queryField(
  'findUniqueFinancialAccountType',
  {
    type: 'FinancialAccountType',
    args: {
      where: nonNull('FinancialAccountTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialAccountType.findUnique({
        where,
        ...select,
      })
    },
  },
)
