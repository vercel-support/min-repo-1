import { mutationField, nonNull } from 'nexus'

export const ModelPortfolioDeleteOneMutation = mutationField(
  'deleteOneModelPortfolio',
  {
    type: 'ModelPortfolio',
    args: {
      where: nonNull('ModelPortfolioWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.modelPortfolio.delete({
        where,
        ...select,
      })
    },
  },
)
