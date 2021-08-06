import { mutationField, nonNull } from 'nexus'

export const AssetStatusUpsertOneMutation = mutationField(
  'upsertOneAssetStatus',
  {
    type: nonNull('AssetStatus'),
    args: {
      where: nonNull('AssetStatusWhereUniqueInput'),
      create: nonNull('AssetStatusCreateInput'),
      update: nonNull('AssetStatusUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetStatus.upsert({
        ...args,
        ...select,
      })
    },
  },
)
