import { queryField, nonNull, list } from 'nexus'

export const AssetFindCountQuery = queryField('findManyAssetCount', {
  type: nonNull('Int'),
  args: {
    where: 'AssetWhereInput',
    orderBy: list('AssetOrderByInput'),
    cursor: 'AssetWhereUniqueInput',
    distinct: 'AssetScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.asset.count(args as any)
  },
})
