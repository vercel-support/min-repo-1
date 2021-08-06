import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesDeleteManyMutation = mutationField(
  'deleteManyAssetsAndLiabilities',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetsAndLiabilitiesWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.assetsAndLiabilities.deleteMany({ where } as any)
    },
  },
)
