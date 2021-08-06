import { queryField, list } from 'nexus'

export const InvestmentExperienceFindFirstQuery = queryField(
  'findFirstInvestmentExperience',
  {
    type: 'InvestmentExperience',
    args: {
      where: 'InvestmentExperienceWhereInput',
      orderBy: list('InvestmentExperienceOrderByInput'),
      cursor: 'InvestmentExperienceWhereUniqueInput',
      distinct: 'InvestmentExperienceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.investmentExperience.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
