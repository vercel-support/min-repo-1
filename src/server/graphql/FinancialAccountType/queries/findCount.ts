import { queryField, nonNull, list } from 'nexus'

export const FinancialAccountTypeFindCountQuery = queryField(
  'findManyFinancialAccountTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialAccountTypeWhereInput',
      orderBy: list('FinancialAccountTypeOrderByInput'),
      cursor: 'FinancialAccountTypeWhereUniqueInput',
      distinct: 'FinancialAccountTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialAccountType.count(args as any)
    },
  },
)
