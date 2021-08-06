import { mutationField, nonNull } from 'nexus'

export const AssetUpdateManyMutation = mutationField('updateManyAsset', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'AssetWhereInput',
    data: nonNull('AssetUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.asset.updateMany(args as any)
  },
})
