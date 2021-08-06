import { mutationField, nonNull } from 'nexus'

export const AssetCategorySectorDeleteManyMutation = mutationField(
  'deleteManyAssetCategorySector',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetCategorySectorWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.assetCategorySector.deleteMany({ where } as any)
    },
  },
)
