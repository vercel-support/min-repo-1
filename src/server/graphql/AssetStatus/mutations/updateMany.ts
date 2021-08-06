import { mutationField, nonNull } from 'nexus'

export const AssetStatusUpdateManyMutation = mutationField(
  'updateManyAssetStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetStatusWhereInput',
      data: nonNull('AssetStatusUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetStatus.updateMany(args as any)
    },
  },
)
