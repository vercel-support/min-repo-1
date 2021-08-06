import { mutationField, nonNull } from 'nexus'

export const AssetStatusReasonUpdateManyMutation = mutationField(
  'updateManyAssetStatusReason',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetStatusReasonWhereInput',
      data: nonNull('AssetStatusReasonUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetStatusReason.updateMany(args as any)
    },
  },
)
