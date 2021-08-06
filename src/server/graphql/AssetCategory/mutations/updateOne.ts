import { mutationField, nonNull } from 'nexus'

export const AssetCategoryUpdateOneMutation = mutationField(
  'updateOneAssetCategory',
  {
    type: nonNull('AssetCategory'),
    args: {
      where: nonNull('AssetCategoryWhereUniqueInput'),
      data: nonNull('AssetCategoryUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.assetCategory.update({
        where,
        data,
        ...select,
      })
    },
  },
)
