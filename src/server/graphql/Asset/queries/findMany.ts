import { queryField, nonNull, list } from 'nexus'

export const AssetFindManyQuery = queryField('findManyAsset', {
  type: nonNull(list(nonNull('Asset'))),
  args: {
    where: 'AssetWhereInput',
    orderBy: list('AssetOrderByInput'),
    cursor: 'AssetWhereUniqueInput',
    distinct: 'AssetScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.asset.findMany({
      ...args,
      ...select,
    })
  },
})
