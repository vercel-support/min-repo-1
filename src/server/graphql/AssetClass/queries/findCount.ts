import { queryField, nonNull, list } from 'nexus'

export const AssetClassFindCountQuery = queryField('findManyAssetClassCount', {
  type: nonNull('Int'),
  args: {
    where: 'AssetClassWhereInput',
    orderBy: list('AssetClassOrderByInput'),
    cursor: 'AssetClassWhereUniqueInput',
    distinct: 'AssetClassScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.assetClass.count(args as any)
  },
})
