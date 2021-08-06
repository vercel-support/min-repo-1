import { queryField, nonNull } from 'nexus'

export const ModelPortfolioFindUniqueQuery = queryField(
  'findUniqueModelPortfolio',
  {
    type: 'ModelPortfolio',
    args: {
      where: nonNull('ModelPortfolioWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.modelPortfolio.findUnique({
        where,
        ...select,
      })
    },
  },
)
