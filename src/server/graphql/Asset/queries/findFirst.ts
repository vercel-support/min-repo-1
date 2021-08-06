import { queryField, list } from 'nexus'

export const AssetFindFirstQuery = queryField('findFirstAsset', {
  type: 'Asset',
  args: {
    where: 'AssetWhereInput',
    orderBy: list('AssetOrderByInput'),
    cursor: 'AssetWhereUniqueInput',
    distinct: 'AssetScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.asset.findFirst({
      ...args,
      ...select,
    })
  },
})
