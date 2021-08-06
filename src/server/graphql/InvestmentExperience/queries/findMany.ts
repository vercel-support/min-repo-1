import { queryField, nonNull, list } from 'nexus'

export const InvestmentExperienceFindManyQuery = queryField(
  'findManyInvestmentExperience',
  {
    type: nonNull(list(nonNull('InvestmentExperience'))),
    args: {
      where: 'InvestmentExperienceWhereInput',
      orderBy: list('InvestmentExperienceOrderByInput'),
      cursor: 'InvestmentExperienceWhereUniqueInput',
      distinct: 'InvestmentExperienceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.investmentExperience.findMany({
        ...args,
        ...select,
      })
    },
  },
)
