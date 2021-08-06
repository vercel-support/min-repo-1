import { mutationField, nonNull } from 'nexus'

export const ModelPortfolioCreateOneMutation = mutationField(
  'createOneModelPortfolio',
  {
    type: nonNull('ModelPortfolio'),
    args: {
      data: nonNull('ModelPortfolioCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.modelPortfolio.create({
        data,
        ...select,
      })
    },
  },
)
