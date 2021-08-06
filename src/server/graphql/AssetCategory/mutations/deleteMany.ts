import { mutationField, nonNull } from 'nexus'

export const AssetCategoryDeleteManyMutation = mutationField(
  'deleteManyAssetCategory',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetCategoryWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.assetCategory.deleteMany({ where } as any)
    },
  },
)
