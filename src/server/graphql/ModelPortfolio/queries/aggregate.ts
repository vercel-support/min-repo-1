import { queryField, list } from 'nexus'

export const ModelPortfolioAggregateQuery = queryField(
  'aggregateModelPortfolio',
  {
    type: 'AggregateModelPortfolio',
    args: {
      where: 'ModelPortfolioWhereInput',
      orderBy: list('ModelPortfolioOrderByInput'),
      cursor: 'ModelPortfolioWhereUniqueInput',
      distinct: 'ModelPortfolioScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.modelPortfolio.aggregate({ ...args, ...select }) as any
    },
  },
)
