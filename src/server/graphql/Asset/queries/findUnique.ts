import { queryField, nonNull } from 'nexus'

export const AssetFindUniqueQuery = queryField('findUniqueAsset', {
  type: 'Asset',
  args: {
    where: nonNull('AssetWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.asset.findUnique({
      where,
      ...select,
    })
  },
})
