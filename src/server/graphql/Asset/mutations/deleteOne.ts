import { mutationField, nonNull } from 'nexus'

export const AssetDeleteOneMutation = mutationField('deleteOneAsset', {
  type: 'Asset',
  args: {
    where: nonNull('AssetWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.asset.delete({
      where,
      ...select,
    })
  },
})
