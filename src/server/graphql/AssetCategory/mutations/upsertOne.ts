import { mutationField, nonNull } from 'nexus'

export const AssetCategoryUpsertOneMutation = mutationField(
  'upsertOneAssetCategory',
  {
    type: nonNull('AssetCategory'),
    args: {
      where: nonNull('AssetCategoryWhereUniqueInput'),
      create: nonNull('AssetCategoryCreateInput'),
      update: nonNull('AssetCategoryUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetCategory.upsert({
        ...args,
        ...select,
      })
    },
  },
)
