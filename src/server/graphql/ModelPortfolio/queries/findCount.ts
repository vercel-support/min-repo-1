import { queryField, nonNull, list } from 'nexus'

export const ModelPortfolioFindCountQuery = queryField(
  'findManyModelPortfolioCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ModelPortfolioWhereInput',
      orderBy: list('ModelPortfolioOrderByInput'),
      cursor: 'ModelPortfolioWhereUniqueInput',
      distinct: 'ModelPortfolioScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.modelPortfolio.count(args as any)
    },
  },
)
