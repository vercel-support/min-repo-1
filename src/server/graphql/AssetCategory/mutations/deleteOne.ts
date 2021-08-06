import { mutationField, nonNull } from 'nexus'

export const AssetCategoryDeleteOneMutation = mutationField(
  'deleteOneAssetCategory',
  {
    type: 'AssetCategory',
    args: {
      where: nonNull('AssetCategoryWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.assetCategory.delete({
        where,
        ...select,
      })
    },
  },
)
