import { queryField, list } from 'nexus'

export const ModelPortfolioFindFirstQuery = queryField(
  'findFirstModelPortfolio',
  {
    type: 'ModelPortfolio',
    args: {
      where: 'ModelPortfolioWhereInput',
      orderBy: list('ModelPortfolioOrderByInput'),
      cursor: 'ModelPortfolioWhereUniqueInput',
      distinct: 'ModelPortfolioScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.modelPortfolio.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
