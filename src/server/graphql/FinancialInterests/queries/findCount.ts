import { queryField, nonNull, list } from 'nexus'

export const FinancialInterestsFindCountQuery = queryField(
  'findManyFinancialInterestsCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialInterestsWhereInput',
      orderBy: list('FinancialInterestsOrderByInput'),
      cursor: 'FinancialInterestsWhereUniqueInput',
      distinct: 'FinancialInterestsScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialInterests.count(args as any)
    },
  },
)
