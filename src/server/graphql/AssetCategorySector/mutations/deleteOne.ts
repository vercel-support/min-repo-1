import { mutationField, nonNull } from 'nexus'

export const AssetCategorySectorDeleteOneMutation = mutationField(
  'deleteOneAssetCategorySector',
  {
    type: 'AssetCategorySector',
    args: {
      where: nonNull('AssetCategorySectorWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.assetCategorySector.delete({
        where,
        ...select,
      })
    },
  },
)
