import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesSourceDeleteManyMutation = mutationField(
  'deleteManyAssetsAndLiabilitiesSource',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetsAndLiabilitiesSourceWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.assetsAndLiabilitiesSource.deleteMany({ where } as any)
    },
  },
)
