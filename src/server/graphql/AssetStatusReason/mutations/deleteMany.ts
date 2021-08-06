import { mutationField, nonNull } from 'nexus'

export const AssetStatusReasonDeleteManyMutation = mutationField(
  'deleteManyAssetStatusReason',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetStatusReasonWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.assetStatusReason.deleteMany({ where } as any)
    },
  },
)
