import { mutationField, nonNull } from 'nexus'

export const ModelPortfolioUpsertOneMutation = mutationField(
  'upsertOneModelPortfolio',
  {
    type: nonNull('ModelPortfolio'),
    args: {
      where: nonNull('ModelPortfolioWhereUniqueInput'),
      create: nonNull('ModelPortfolioCreateInput'),
      update: nonNull('ModelPortfolioUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.modelPortfolio.upsert({
        ...args,
        ...select,
      })
    },
  },
)
