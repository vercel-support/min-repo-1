import { mutationField, nonNull } from 'nexus'

export const AssetCategorySectorUpsertOneMutation = mutationField(
  'upsertOneAssetCategorySector',
  {
    type: nonNull('AssetCategorySector'),
    args: {
      where: nonNull('AssetCategorySectorWhereUniqueInput'),
      create: nonNull('AssetCategorySectorCreateInput'),
      update: nonNull('AssetCategorySectorUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetCategorySector.upsert({
        ...args,
        ...select,
      })
    },
  },
)
