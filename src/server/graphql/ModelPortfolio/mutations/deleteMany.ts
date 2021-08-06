import { mutationField, nonNull } from 'nexus'

export const ModelPortfolioDeleteManyMutation = mutationField(
  'deleteManyModelPortfolio',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ModelPortfolioWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.modelPortfolio.deleteMany({ where } as any)
    },
  },
)
