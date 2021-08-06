import { mutationField, nonNull } from 'nexus'

export const AssetDeleteManyMutation = mutationField('deleteManyAsset', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'AssetWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.asset.deleteMany({ where } as any)
  },
})
