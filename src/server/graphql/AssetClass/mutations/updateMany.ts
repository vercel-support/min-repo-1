import { mutationField, nonNull } from 'nexus'

export const AssetClassUpdateManyMutation = mutationField(
  'updateManyAssetClass',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetClassWhereInput',
      data: nonNull('AssetClassUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetClass.updateMany(args as any)
    },
  },
)
