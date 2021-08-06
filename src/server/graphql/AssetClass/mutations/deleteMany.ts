import { mutationField, nonNull } from 'nexus'

export const AssetClassDeleteManyMutation = mutationField(
  'deleteManyAssetClass',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetClassWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.assetClass.deleteMany({ where } as any)
    },
  },
)
