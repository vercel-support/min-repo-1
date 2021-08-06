import { queryField, nonNull, list } from 'nexus'

export const FinancialAccountTypeFindManyQuery = queryField(
  'findManyFinancialAccountType',
  {
    type: nonNull(list(nonNull('FinancialAccountType'))),
    args: {
      where: 'FinancialAccountTypeWhereInput',
      orderBy: list('FinancialAccountTypeOrderByInput'),
      cursor: 'FinancialAccountTypeWhereUniqueInput',
      distinct: 'FinancialAccountTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialAccountType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
