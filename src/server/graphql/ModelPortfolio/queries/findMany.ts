import { queryField, nonNull, list } from 'nexus'

export const ModelPortfolioFindManyQuery = queryField(
  'findManyModelPortfolio',
  {
    type: nonNull(list(nonNull('ModelPortfolio'))),
    args: {
      where: 'ModelPortfolioWhereInput',
      orderBy: list('ModelPortfolioOrderByInput'),
      cursor: 'ModelPortfolioWhereUniqueInput',
      distinct: 'ModelPortfolioScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.modelPortfolio.findMany({
        ...args,
        ...select,
      })
    },
  },
)
