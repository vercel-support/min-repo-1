import { mutationField, nonNull } from 'nexus'

export const AssetCategoryCreateOneMutation = mutationField(
  'createOneAssetCategory',
  {
    type: nonNull('AssetCategory'),
    args: {
      data: nonNull('AssetCategoryCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.assetCategory.create({
        data,
        ...select,
      })
    },
  },
)
