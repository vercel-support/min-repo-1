import { mutationField, nonNull } from 'nexus'

export const AssetCategoryUpdateManyMutation = mutationField(
  'updateManyAssetCategory',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetCategoryWhereInput',
      data: nonNull('AssetCategoryUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetCategory.updateMany(args as any)
    },
  },
)
