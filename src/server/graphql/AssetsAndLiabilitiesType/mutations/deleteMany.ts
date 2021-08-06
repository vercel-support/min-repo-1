import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesTypeDeleteManyMutation = mutationField(
  'deleteManyAssetsAndLiabilitiesType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetsAndLiabilitiesTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.assetsAndLiabilitiesType.deleteMany({ where } as any)
    },
  },
)
