import { mutationField, nonNull } from 'nexus'

export const AssetCategorySectorUpdateManyMutation = mutationField(
  'updateManyAssetCategorySector',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetCategorySectorWhereInput',
      data: nonNull('AssetCategorySectorUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetCategorySector.updateMany(args as any)
    },
  },
)
