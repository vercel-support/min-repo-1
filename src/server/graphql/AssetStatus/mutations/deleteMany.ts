import { mutationField, nonNull } from 'nexus'

export const AssetStatusDeleteManyMutation = mutationField(
  'deleteManyAssetStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetStatusWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.assetStatus.deleteMany({ where } as any)
    },
  },
)
