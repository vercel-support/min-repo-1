import { queryField, list } from 'nexus'

export const InvestmentExperienceAggregateQuery = queryField(
  'aggregateInvestmentExperience',
  {
    type: 'AggregateInvestmentExperience',
    args: {
      where: 'InvestmentExperienceWhereInput',
      orderBy: list('InvestmentExperienceOrderByInput'),
      cursor: 'InvestmentExperienceWhereUniqueInput',
      distinct: 'InvestmentExperienceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.investmentExperience.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
