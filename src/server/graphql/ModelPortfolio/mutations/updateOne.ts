import { mutationField, nonNull } from 'nexus'

export const ModelPortfolioUpdateOneMutation = mutationField(
  'updateOneModelPortfolio',
  {
    type: nonNull('ModelPortfolio'),
    args: {
      where: nonNull('ModelPortfolioWhereUniqueInput'),
      data: nonNull('ModelPortfolioUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.modelPortfolio.update({
        where,
        data,
        ...select,
      })
    },
  },
)
