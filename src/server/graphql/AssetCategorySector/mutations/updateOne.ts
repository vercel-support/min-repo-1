import { mutationField, nonNull } from 'nexus'

export const AssetCategorySectorUpdateOneMutation = mutationField(
  'updateOneAssetCategorySector',
  {
    type: nonNull('AssetCategorySector'),
    args: {
      where: nonNull('AssetCategorySectorWhereUniqueInput'),
      data: nonNull('AssetCategorySectorUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.assetCategorySector.update({
        where,
        data,
        ...select,
      })
    },
  },
)
