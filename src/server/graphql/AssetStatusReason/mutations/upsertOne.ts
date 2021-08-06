import { mutationField, nonNull } from 'nexus'

export const AssetStatusReasonUpsertOneMutation = mutationField(
  'upsertOneAssetStatusReason',
  {
    type: nonNull('AssetStatusReason'),
    args: {
      where: nonNull('AssetStatusReasonWhereUniqueInput'),
      create: nonNull('AssetStatusReasonCreateInput'),
      update: nonNull('AssetStatusReasonUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetStatusReason.upsert({
        ...args,
        ...select,
      })
    },
  },
)
