import { mutationField, nonNull } from 'nexus'

export const AssetClassUpsertOneMutation = mutationField(
  'upsertOneAssetClass',
  {
    type: nonNull('AssetClass'),
    args: {
      where: nonNull('AssetClassWhereUniqueInput'),
      create: nonNull('AssetClassCreateInput'),
      update: nonNull('AssetClassUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetClass.upsert({
        ...args,
        ...select,
      })
    },
  },
)
