import { mutationField, nonNull } from 'nexus'

export const AssetUpdateOneMutation = mutationField('updateOneAsset', {
  type: nonNull('Asset'),
  args: {
    where: nonNull('AssetWhereUniqueInput'),
    data: nonNull('AssetUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.asset.update({
      where,
      data,
      ...select,
    })
  },
})
