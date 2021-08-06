import { queryField, nonNull, list } from 'nexus'

export const InvestmentExperienceFindCountQuery = queryField(
  'findManyInvestmentExperienceCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'InvestmentExperienceWhereInput',
      orderBy: list('InvestmentExperienceOrderByInput'),
      cursor: 'InvestmentExperienceWhereUniqueInput',
      distinct: 'InvestmentExperienceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.investmentExperience.count(args as any)
    },
  },
)
