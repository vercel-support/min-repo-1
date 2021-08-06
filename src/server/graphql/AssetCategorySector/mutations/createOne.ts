import { mutationField, nonNull } from 'nexus'

export const AssetCategorySectorCreateOneMutation = mutationField(
  'createOneAssetCategorySector',
  {
    type: nonNull('AssetCategorySector'),
    args: {
      data: nonNull('AssetCategorySectorCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.assetCategorySector.create({
        data,
        ...select,
      })
    },
  },
)
