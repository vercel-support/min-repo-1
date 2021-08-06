import { queryField, list } from 'nexus'

export const AssetAggregateQuery = queryField('aggregateAsset', {
  type: 'AggregateAsset',
  args: {
    where: 'AssetWhereInput',
    orderBy: list('AssetOrderByInput'),
    cursor: 'AssetWhereUniqueInput',
    distinct: 'AssetScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.asset.aggregate({ ...args, ...select }) as any
  },
})
