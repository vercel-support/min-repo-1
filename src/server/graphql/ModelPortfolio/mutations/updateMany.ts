import { mutationField, nonNull } from 'nexus'

export const ModelPortfolioUpdateManyMutation = mutationField(
  'updateManyModelPortfolio',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ModelPortfolioWhereInput',
      data: nonNull('ModelPortfolioUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.modelPortfolio.updateMany(args as any)
    },
  },
)
